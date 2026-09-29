import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Fireworks over the home page right after the /launch countdown (Launch navigates to "/" with state { launched: true }).
// The page dims to night blue so the gold shows up on the cream site; after LENGTH seconds the whole overlay has
// faded out and removes itself. Colours are the site's saffron-gold and blues.

const COLORS = ['#ffd479', '#ffa733', '#fff3dc', '#a8e1ff'];
const PETAL_COLORS = ['#ff9f1c', '#ffb627', '#f7c948', '#f4a733', '#fff1d6'];
const ROCKET_G = 0.16; // px/frame² — sets how long rockets climb
const LENGTH = 8; // seconds from arriving on the home page until the overlay is gone
const FADE = 2; // the last seconds, over which everything (dimming, sparks, petals) fades out
const DIM = 0.6; // how dark the page goes behind the fireworks (ink-900 at this opacity)

const rand = (a: number, b: number) => a + Math.random() * (b - a);
const pick = <T,>(xs: T[]) => xs[Math.floor(Math.random() * xs.length)];

type Spark = { x: number; y: number; vx: number; vy: number; age: number; life: number; color: string; width: number; drag: number; gravity: number; flicker: boolean; tail: number };
type Rocket = { x: number; y: number; vx: number; vy: number; color: string };
type Petal = { x: number; y: number; vx: number; vy: number; rot: number; spin: number; flip: number; flipSpeed: number; size: number; color: string; phase: number };
type Glow = { x: number; y: number; r: number; age: number; life: number; color: string; strength: number };

// Runs the show on a transparent full-screen canvas; calls onDone at LENGTH seconds.
// The canvas is cleared every frame and trails are drawn as streaks behind each spark (fading trails on a
// transparent canvas leave ghost pixels). All speeds are per 60fps frame, scaled by real frame time.
function celebrate(canvas: HTMLCanvasElement, onDone: () => void) {
  const ctx = canvas.getContext('2d')!;
  let w = 0;
  let h = 0;
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();
  window.addEventListener('resize', resize);

  const sparks: Spark[] = [];
  const rockets: Rocket[] = [];
  const petals: Petal[] = [];
  const glows: Glow[] = [];
  const waves = [0, -10].map((age) => ({ age, life: 70 })); // two shockwave rings, the second a moment later
  const [cx, cy] = [w / 2, h * 0.45];

  const dim = (alpha: number) => {
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = alpha;
    ctx.fillStyle = '#102b3d'; // ink-900
    ctx.fillRect(0, 0, w, h);
  };

  // a rocket that peaks exactly at height `peak` (v = √(2gd))
  const fire = (x: number, peak: number) =>
    rockets.push({ x, y: h + 10, vx: rand(-0.5, 0.5), vy: -Math.sqrt(2 * ROCKET_G * (h + 10 - peak)), color: pick(COLORS) });

  const burst = (x: number, y: number, color: string) => {
    const type = pick(['peony', 'peony', 'ring', 'willow', 'lotus']);
    const alt = pick(COLORS);
    const willow = type === 'willow';
    const power = Math.min(w, h) / 80; // burst size follows the screen: ~250px radius on a 800px-tall display
    // ponytail: particle cap by halving bursts when busy; a real pool if low-end projector laptops stutter
    const n = sparks.length > 2500 ? 60 : 140;
    for (let i = 0; i < n; i++) {
      const even = (i / n) * Math.PI * 2;
      let a = rand(0, Math.PI * 2);
      let s = power * (0.3 + 0.7 * Math.sqrt(Math.random()));
      let c = i % 2 ? alt : color;
      if (type === 'ring') [a, s] = [even, power * (i % 2 ? 0.45 : 0.9)];
      if (type === 'lotus') [a, s] = [even, power * (0.2 + 0.8 * Math.abs(Math.sin(4 * even)))]; // eight petals
      if (willow) [s, c] = [power * 0.5 * Math.sqrt(Math.random()), '#ffc861'];
      sparks.push({
        x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, age: 0,
        life: willow ? rand(110, 160) : rand(55, 85),
        color: c,
        width: willow ? 2 : 2.6,
        drag: willow ? 0.965 : 0.955,
        gravity: willow ? 0.035 : 0.05,
        flicker: willow || Math.random() < 0.3,
        tail: willow ? 6 : 3.5,
      });
    }
    glows.push({ x, y, r: power * 24, age: 0, life: 24, color, strength: 0.45 });
  };

  const petal = (x: number, y: number, vx: number, vy: number) =>
    petals.push({ x, y, vx, vy, rot: rand(0, 6.3), spin: rand(-0.06, 0.06), flip: rand(0, 6.3), flipSpeed: rand(0.03, 0.09), size: rand(7, 13), color: pick(PETAL_COLORS), phase: rand(0, 6.3) });

  // opening: dim before the first paint, a warm flash, petals thrown up from the centre, and the sky bursts at once
  // (the rocket salvo below lands a second and a half later as the second wave)
  dim(DIM);
  glows.push({ x: cx, y: cy, r: Math.max(w, h) * 0.6, age: 0, life: 40, color: '#ffd98f', strength: 0.45 });
  for (let i = 0; i < 90; i++) petal(cx, cy, rand(-7, 7), rand(-16, -6));
  for (const [fx, fy] of [[0.2, 0.3], [0.5, 0.16], [0.8, 0.3]]) burst(w * fx, h * fy, pick(COLORS));

  const start = performance.now();
  let last = start;
  let salvo = false;
  let nextRocket = 1.6;
  let petalDebt = 0;
  let frame = 0;

  const tick = (now: number) => {
    const k = Math.min(Math.max(now - last, 0) / 16.67, 3); // a frame's timestamp can predate `start` slightly
    const dt = k / 60;
    const t = (now - start) / 1000;
    last = now;

    // schedule: one synchronized salvo, rockets until 3 s before the end (they take ~1.5 s to climb and burst),
    // petals until the fade starts; then the whole overlay fades out and is removed at LENGTH
    if (t >= LENGTH) {
      onDone();
      return;
    }
    if (!salvo && t > 0.15) {
      salvo = true;
      [0.12, 0.31, 0.5, 0.69, 0.88].forEach((f) => fire(w * f, h * 0.22));
    }
    if (t > nextRocket && t < LENGTH - 3) {
      const count = Math.random() < 0.35 ? 2 : 1;
      for (let i = 0; i < count; i++) fire(rand(0.12, 0.88) * w, rand(0.1, 0.42) * h);
      nextRocket = t + rand(0.25, 0.6);
    }
    petalDebt += (t < LENGTH - FADE ? 22 : 0) * dt;
    for (; petalDebt >= 1; petalDebt--) petal(rand(0, w), -20, rand(-0.5, 0.5), rand(0.5, 1.5));
    canvas.style.opacity = String(Math.min(1, (LENGTH - t) / FADE));

    ctx.clearRect(0, 0, w, h);
    dim(DIM);
    ctx.globalCompositeOperation = 'lighter';
    ctx.lineCap = 'round';

    for (let i = rockets.length - 1; i >= 0; i--) {
      const r = rockets[i];
      r.vy += ROCKET_G * k;
      r.x += r.vx * k;
      r.y += r.vy * k;
      ctx.globalAlpha = 1;
      ctx.strokeStyle = '#fff1d0';
      ctx.lineWidth = 2.6;
      ctx.beginPath();
      ctx.moveTo(r.x - r.vx * 3, r.y - r.vy * 3);
      ctx.lineTo(r.x, r.y);
      ctx.stroke();
      sparks.push({ x: r.x, y: r.y, vx: rand(-0.3, 0.3), vy: rand(0, 1), age: 0, life: rand(15, 30), color: '#ffcf8a', width: 1.4, drag: 0.95, gravity: 0.02, flicker: true, tail: 2 });
      if (r.vy >= -1) {
        burst(r.x, r.y, r.color);
        rockets.splice(i, 1);
      }
    }

    for (let i = sparks.length - 1; i >= 0; i--) {
      const p = sparks[i];
      const drag = Math.pow(p.drag, k);
      p.vx *= drag;
      p.vy = p.vy * drag + p.gravity * k;
      p.x += p.vx * k;
      p.y += p.vy * k;
      p.age += k;
      if (p.age >= p.life) {
        sparks[i] = sparks[sparks.length - 1];
        sparks.pop();
        continue;
      }
      let alpha = Math.min(1, (1 - p.age / p.life) * 2.5);
      if (p.flicker && Math.random() < 0.3) alpha *= 0.2;
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = p.color;
      ctx.lineWidth = p.width;
      ctx.beginPath();
      ctx.moveTo(p.x - p.vx * p.tail, p.y - p.vy * p.tail);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }

    for (let i = glows.length - 1; i >= 0; i--) {
      const g = glows[i];
      g.age += k;
      if (g.age >= g.life) {
        glows.splice(i, 1);
        continue;
      }
      const f = 1 - g.age / g.life;
      const r = g.r * (1.3 - 0.3 * f);
      const grad = ctx.createRadialGradient(g.x, g.y, 0, g.x, g.y, r);
      grad.addColorStop(0, g.color);
      grad.addColorStop(1, `${g.color}00`);
      ctx.globalAlpha = f * f * g.strength;
      ctx.fillStyle = grad;
      ctx.fillRect(g.x - r, g.y - r, r * 2, r * 2);
    }
    const reach = Math.hypot(w, h);
    for (const wv of waves) {
      wv.age += k;
      if (wv.age < 0 || wv.age > wv.life) continue;
      const f = wv.age / wv.life;
      ctx.globalAlpha = (1 - f) * 0.9;
      ctx.strokeStyle = '#ffd479';
      ctx.lineWidth = 6 * (1 - f) + 0.5;
      ctx.beginPath();
      ctx.arc(cx, cy, (1 - Math.pow(1 - f, 3)) * reach, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.globalCompositeOperation = 'source-over';
    const air = Math.pow(0.97, k);
    for (let i = petals.length - 1; i >= 0; i--) {
      const p = petals[i];
      p.vx *= air;
      p.vy = p.vy * air + 0.06 * k;
      p.x += (p.vx + Math.sin(t * 1.5 + p.phase) * 0.6) * k;
      p.y += p.vy * k;
      p.rot += p.spin * k;
      p.flip += p.flipSpeed * k;
      if (p.y > h + 30) {
        petals[i] = petals[petals.length - 1];
        petals.pop();
        continue;
      }
      const tilt = Math.cos(p.flip);
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.scale(1, tilt);
      ctx.globalAlpha = 0.7 + 0.3 * Math.abs(tilt); // catches the light as it turns
      ctx.fillStyle = p.color;
      const s = p.size;
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.quadraticCurveTo(s * 0.85, -s * 0.15, 0, s);
      ctx.quadraticCurveTo(-s * 0.85, -s * 0.15, 0, -s);
      ctx.fill();
      ctx.restore();
    }

    frame = requestAnimationFrame(tick);
  };
  frame = requestAnimationFrame(tick);

  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener('resize', resize);
  };
}

type LaunchState = { launched?: boolean } | null;

// Rendered once in the site shell; does nothing unless the page was reached from the /launch countdown.
// Runs even with reduced motion: it only ever follows the deliberate press on /launch.
export default function LaunchFireworks() {
  const { state, pathname } = useLocation();
  const navigate = useNavigate();
  const ref = useRef<HTMLCanvasElement>(null);
  const [on, setOn] = useState(() => (state as LaunchState)?.launched === true);

  // drop the flag from history so a reload doesn't replay the show
  useEffect(() => {
    if ((state as LaunchState)?.launched) navigate(pathname, { replace: true, state: null });
  }, [state, pathname, navigate]);

  // layout effect, so the dimming is drawn before the home page first paints
  useLayoutEffect(() => {
    if (!on || !ref.current) return;
    return celebrate(ref.current, () => setOn(false));
  }, [on]);

  return on ? <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-[250] h-full w-full" /> : null;
}
