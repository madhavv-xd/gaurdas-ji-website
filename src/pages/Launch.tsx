import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Website launch ceremony page (/launch): press "लॉन्च करें" → 5-second countdown → shockwave, flower-petal shower
// and fireworks with a link into the site. Shown full-screen on the projector at the katha.
// Colours are the site's own: ink/brand blues with saffron-gold (tailwind.config.js).

const GOLD = '#f4a733'; // saffron-400
const PALE_GOLD = '#fad39a'; // saffron-200
const FIREWORK_COLORS = ['#ffd479', '#ffa733', '#fff3dc', '#a8e1ff'];
const PETAL_COLORS = ['#ff9f1c', '#ffb627', '#f7c948', '#f4a733', '#fff1d6'];
const COUNT_FROM = 5;

const BTN =
  'relative inline-block rounded-full px-12 py-4 text-[1.35rem] leading-none text-ink-900 bg-[linear-gradient(180deg,#fad39a_0%,#f4a733_50%,#e8892b_100%)] shadow-[0_14px_34px_-10px_rgba(244,167,51,.7),inset_0_1px_0_rgba(255,255,255,.55)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[.97] focus-visible:outline-saffron-300';

// countdown number: drops in, holds, shrinks away — one second per number
const pop = (el: HTMLElement | null) =>
  el?.animate(
    [
      { transform: 'scale(1.8)', opacity: 0 },
      { transform: 'scale(1)', opacity: 1, offset: 0.2 },
      { transform: 'scale(1)', opacity: 1, offset: 0.75 },
      { transform: 'scale(0.7)', opacity: 0 },
    ],
    { duration: 1000, easing: 'ease-out', fill: 'both' }
  );
// gold ring around it that fills over the same second
const sweep = (el: SVGCircleElement | null) =>
  el?.animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], { duration: 1000, easing: 'linear', fill: 'both' });

const rand = (a: number, b: number) => a + Math.random() * (b - a);
const pick = <T,>(xs: T[]) => xs[Math.floor(Math.random() * xs.length)];

type Spark = { x: number; y: number; vx: number; vy: number; age: number; life: number; color: string; width: number; drag: number; gravity: number; flicker: boolean };
type Rocket = { x: number; y: number; vx: number; vy: number; color: string };
type Petal = { x: number; y: number; vx: number; vy: number; rot: number; spin: number; flip: number; flipSpeed: number; size: number; color: string; phase: number };
type Glow = { x: number; y: number; r: number; age: number; life: number; color: string; strength: number };

const ROCKET_G = 0.16; // px/frame² — sets how long rockets climb

// Runs the celebration on two full-screen canvases until the returned stop function is called.
// `fxCanvas` (under the mandala) holds fireworks with fading trails; `topCanvas` (over everything) holds
// petals, flashes and the shockwave. All speeds are per 60fps frame, scaled by real frame time.
function celebrate(fxCanvas: HTMLCanvasElement, topCanvas: HTMLCanvasElement, origin: { x: number; y: number }) {
  const fx = fxCanvas.getContext('2d')!;
  const top = topCanvas.getContext('2d')!;
  let w = 0;
  let h = 0;
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    for (const c of [fxCanvas, topCanvas]) {
      c.width = w * dpr;
      c.height = h * dpr;
      c.getContext('2d')!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
  };
  resize();
  window.addEventListener('resize', resize);

  // the page background (radial-gradient(ellipse at 50% 45%, …)) on a unit circle; painting it faintly each frame
  // fades the trails into the real background (fading to transparent leaves ghost pixels)
  const sky = fx.createRadialGradient(0, 0, 0, 0, 0, 1);
  sky.addColorStop(0, '#255a7d');
  sky.addColorStop(0.42, '#173a52');
  sky.addColorStop(1, '#0b1f2e');

  const sparks: Spark[] = [];
  const rockets: Rocket[] = [];
  const petals: Petal[] = [];
  const glows: Glow[] = [];
  const waves = [0, -10].map((age) => ({ age, life: 70 })); // two shockwave rings, the second a moment later

  // a rocket that peaks exactly at height `peak` (v = √(2gd))
  const fire = (x: number, peak: number) =>
    rockets.push({ x, y: h + 10, vx: rand(-0.5, 0.5), vy: -Math.sqrt(2 * ROCKET_G * (h + 10 - peak)), color: pick(FIREWORK_COLORS) });

  const burst = (x: number, y: number, color: string) => {
    const type = pick(['peony', 'peony', 'ring', 'willow', 'lotus']);
    const alt = pick(FIREWORK_COLORS);
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
      });
    }
    glows.push({ x, y, r: power * 24, age: 0, life: 24, color, strength: 0.45 });
  };

  const petal = (x: number, y: number, vx: number, vy: number) =>
    petals.push({ x, y, vx, vy, rot: rand(0, 6.3), spin: rand(-0.06, 0.06), flip: rand(0, 6.3), flipSpeed: rand(0.03, 0.09), size: rand(7, 13), color: pick(PETAL_COLORS), phase: rand(0, 6.3) });

  // zero: a warm flash, petals thrown up from the countdown, and the sky bursts at once
  // (the rocket salvo below lands a second and a half later as the second wave)
  glows.push({ x: origin.x, y: origin.y, r: Math.max(w, h) * 0.6, age: 0, life: 40, color: '#ffd98f', strength: 0.45 });
  for (let i = 0; i < 90; i++) petal(origin.x, origin.y, rand(-7, 7), rand(-16, -6));
  for (const [fx0, fy0] of [[0.2, 0.3], [0.5, 0.16], [0.8, 0.3]]) burst(w * fx0, h * fy0, pick(FIREWORK_COLORS));

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

    // schedule: one synchronized salvo, ~9 s of heavy fire, then gentle fireworks for as long as the page is open
    if (!salvo && t > 0.15) {
      salvo = true;
      [0.12, 0.31, 0.5, 0.69, 0.88].forEach((f) => fire(w * f, h * 0.22));
    }
    if (t > nextRocket) {
      const heavy = t < 10;
      const count = heavy && Math.random() < 0.35 ? 2 : 1;
      for (let i = 0; i < count; i++) fire(rand(0.12, 0.88) * w, rand(0.1, 0.42) * h);
      nextRocket = t + (heavy ? rand(0.25, 0.6) : rand(0.9, 2.2));
    }
    petalDebt += (t < 9 ? 22 : 5) * dt;
    for (; petalDebt >= 1; petalDebt--) petal(rand(0, w), -20, rand(-0.5, 0.5), rand(0.5, 1.5));

    // fireworks: fade what's there into the background (trails), then draw additively
    fx.globalCompositeOperation = 'source-over';
    fx.globalAlpha = 0.22;
    fx.fillStyle = sky;
    fx.save();
    fx.translate(w * 0.5, h * 0.45);
    fx.scale(w * 0.5 * Math.SQRT2, h * 0.55 * Math.SQRT2); // CSS "ellipse farthest-corner" from that centre
    fx.fillRect(-1, -1, 2, 2);
    fx.restore();
    fx.globalCompositeOperation = 'lighter';
    fx.lineCap = 'round';

    for (let i = rockets.length - 1; i >= 0; i--) {
      const r = rockets[i];
      const [px, py] = [r.x, r.y];
      r.vy += ROCKET_G * k;
      r.x += r.vx * k;
      r.y += r.vy * k;
      fx.globalAlpha = 1;
      fx.strokeStyle = '#fff1d0';
      fx.lineWidth = 2.6;
      fx.beginPath();
      fx.moveTo(px, py);
      fx.lineTo(r.x, r.y);
      fx.stroke();
      sparks.push({ x: r.x, y: r.y, vx: rand(-0.3, 0.3), vy: rand(0, 1), age: 0, life: rand(15, 30), color: '#ffcf8a', width: 1.4, drag: 0.95, gravity: 0.02, flicker: true });
      if (r.vy >= -1) {
        burst(r.x, r.y, r.color);
        rockets.splice(i, 1);
      }
    }

    for (let i = sparks.length - 1; i >= 0; i--) {
      const p = sparks[i];
      const [px, py] = [p.x, p.y];
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
      fx.globalAlpha = alpha;
      fx.strokeStyle = p.color;
      fx.lineWidth = p.width;
      fx.beginPath();
      fx.moveTo(px, py);
      fx.lineTo(p.x, p.y);
      fx.stroke();
    }

    // top layer: redrawn from scratch each frame
    top.clearRect(0, 0, w, h);
    top.globalCompositeOperation = 'lighter';
    for (let i = glows.length - 1; i >= 0; i--) {
      const g = glows[i];
      g.age += k;
      if (g.age >= g.life) {
        glows.splice(i, 1);
        continue;
      }
      const f = 1 - g.age / g.life;
      const r = g.r * (1.3 - 0.3 * f);
      const grad = top.createRadialGradient(g.x, g.y, 0, g.x, g.y, r);
      grad.addColorStop(0, g.color);
      grad.addColorStop(1, `${g.color}00`);
      top.globalAlpha = f * f * g.strength;
      top.fillStyle = grad;
      top.fillRect(g.x - r, g.y - r, r * 2, r * 2);
    }
    const reach = Math.hypot(w, h);
    for (const wv of waves) {
      wv.age += k;
      if (wv.age < 0 || wv.age > wv.life) continue;
      const f = wv.age / wv.life;
      top.globalAlpha = (1 - f) * 0.9;
      top.strokeStyle = '#ffd479';
      top.lineWidth = 6 * (1 - f) + 0.5;
      top.beginPath();
      top.arc(origin.x, origin.y, (1 - Math.pow(1 - f, 3)) * reach, 0, Math.PI * 2);
      top.stroke();
    }

    top.globalCompositeOperation = 'source-over';
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
      top.save();
      top.translate(p.x, p.y);
      top.rotate(p.rot);
      top.scale(1, tilt);
      top.globalAlpha = 0.7 + 0.3 * Math.abs(tilt); // catches the light as it turns
      top.fillStyle = p.color;
      const s = p.size;
      top.beginPath();
      top.moveTo(0, -s);
      top.quadraticCurveTo(s * 0.85, -s * 0.15, 0, s);
      top.quadraticCurveTo(-s * 0.85, -s * 0.15, 0, -s);
      top.fill();
      top.restore();
    }

    frame = requestAnimationFrame(tick);
  };
  frame = requestAnimationFrame(tick);

  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener('resize', resize);
  };
}

// rings of radial ellipses, alternating saffron and pale-gold strokes
const ring = (n: number, dist: number, rx: number, ry: number) =>
  Array.from({ length: n }, (_, i) => (
    <ellipse key={i} cx={dist} cy={0} rx={rx} ry={ry} transform={`rotate(${(360 / n) * i})`} stroke={i % 2 ? PALE_GOLD : GOLD} vectorEffect="non-scaling-stroke" />
  ));

export default function Launch() {
  const [phase, setPhase] = useState<'idle' | 'count' | 'launched'>('idle');
  const [count, setCount] = useState(COUNT_FROM);
  const fxRef = useRef<HTMLCanvasElement>(null);
  const topRef = useRef<HTMLCanvasElement>(null);
  const outerRing = useRef<SVGGElement>(null);
  const innerRing = useRef<SVGGElement>(null);
  const countRef = useRef<HTMLDivElement>(null);
  const enterRef = useRef<HTMLAnchorElement>(null);
  const stop = useRef<() => void>();
  const spin = useRef(0); // extra mandala speed; decays back to idle
  const launched = phase === 'launched';

  useEffect(() => () => stop.current?.(), []);

  // mandala: slow counter-rotating rings (still with reduced motion, until the press)
  useEffect(() => {
    const idle = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 2; // deg/s
    let angle = 0;
    let last = performance.now();
    let id = 0;
    const tick = (now: number) => {
      const dt = Math.min(now - last, 50) / 1000;
      last = now;
      spin.current *= Math.exp(-dt / 1.6);
      angle += (idle + spin.current * 90) * dt;
      outerRing.current?.setAttribute('transform', `rotate(${angle})`);
      innerRing.current?.setAttribute('transform', `rotate(${-angle * 1.4})`);
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  // Countdown, one number a second; at zero the celebration starts along with the "वेबसाइट देखें" screen.
  // Runs even with reduced motion: the celebration is the whole point of the page and only starts on a press.
  useEffect(() => {
    if (phase !== 'count') return;
    const id = setTimeout(() => {
      if (count > 1) {
        spin.current = Math.max(spin.current, 0.12 * (COUNT_FROM + 2 - count)); // the mandala winds up
        setCount(count - 1);
        return;
      }
      if (!fxRef.current || !topRef.current) return;
      const b = countRef.current?.getBoundingClientRect();
      const origin = b ? { x: b.left + b.width / 2, y: b.top + b.height / 2 } : { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      spin.current = 1;
      stop.current = celebrate(fxRef.current, topRef.current, origin);
      setPhase('launched');
      setTimeout(() => enterRef.current?.focus({ preventScroll: true }), 1000);
    }, 1000);
    return () => clearTimeout(id);
  }, [phase, count]);

  const start = () => {
    if (phase !== 'idle') return;
    spin.current = 0.15;
    setPhase('count');
  };

  return (
    <div className="relative min-h-svh text-cream-50">
      <div aria-hidden className="fixed inset-0 bg-[radial-gradient(ellipse_at_50%_45%,#255a7d_0%,#173a52_42%,#0b1f2e_100%)]" />
      {/* paints its own copy of the background once launched, so it sits under the mandala */}
      <canvas ref={fxRef} aria-hidden className="pointer-events-none fixed inset-0 h-full w-full" />
      <svg
        aria-hidden
        viewBox="-500 -500 1000 1000"
        className={`pointer-events-none fixed left-1/2 top-1/2 w-[max(130vmin,760px)] -translate-x-1/2 -translate-y-1/2 transition-transform duration-[1600ms] ease-out ${
          launched ? 'scale-110' : ''
        }`}
      >
        {/* brightens by opacity on launch; a brightness() filter would shift the gold towards green */}
        <g fill="none" strokeWidth={1.5} style={{ strokeOpacity: launched ? 0.9 : 0.55, transition: 'stroke-opacity 1.6s ease-out' }}>
          <circle r={490} stroke={GOLD} strokeOpacity={0.35} vectorEffect="non-scaling-stroke" />
          <circle r={410} stroke={GOLD} strokeOpacity={0.45} strokeDasharray="6 14" vectorEffect="non-scaling-stroke" />
          <circle r={300} stroke={GOLD} strokeOpacity={0.4} vectorEffect="non-scaling-stroke" />
          <g ref={outerRing}>{ring(24, 330, 150, 46)}</g>
          <g ref={innerRing}>{ring(16, 170, 130, 42)}</g>
        </g>
      </svg>

      <main className="relative z-10 mx-auto flex min-h-svh max-w-3xl flex-col items-center px-4 text-center">
        <p className="pt-5 text-[0.82rem] text-[#d7e3ec]/85">
          Developed by <span className="font-semibold text-saffron-300">महाराज जी के शिष्य Har Setu Tech</span>
        </p>

        <div className="flex flex-1 flex-col items-center justify-center py-10 font-sanskrit">
          <svg aria-hidden viewBox="0 0 320 24" className="w-[min(320px,70vw)] text-saffron-400" fill="none" stroke="currentColor" strokeWidth={1.2}>
            <path d="M4 15 H136 q7 0 9 -5" />
            <path d="M316 15 H184 q-7 0 -9 -5" />
            <path d="M149 11 q11 10 22 0" />
            <circle cx={160} cy={7} r={3} fill="currentColor" stroke="none" />
          </svg>
          <h1 className="mt-4 font-sanskrit text-[clamp(2.5rem,7vw,4.75rem)] leading-[1.25] text-cream-50 [text-shadow:0_2px_28px_rgba(244,167,51,.3)]">
            श्री गौर दास जी महाराज
          </h1>
          <p className="mt-1 text-[clamp(1.05rem,2vw,1.35rem)] text-[#d7e3ec]">की आधिकारिक वेबसाइट</p>

          {/* the three screens (intro, countdown, launched) share one grid cell, so swapping doesn't move anything */}
          <div className="mt-8 grid w-full place-items-center">
            <div
              aria-hidden={phase !== 'idle'}
              className={`[grid-area:1/1] flex flex-col items-center transition-all duration-500 ${phase !== 'idle' ? 'invisible -translate-y-3 scale-95 opacity-0' : ''}`}
            >
              <p className="max-w-[46rem] text-[clamp(1.05rem,1.9vw,1.3rem)] leading-[1.9] text-[#e3ecf2]">
                यह श्री गौर दास जी महाराज की वेबसाइट है। यहाँ आपको महाराज जी से जुड़ी सारी जानकारी, आश्रम से जुड़ी जानकारी और श्री निताई दास जी
                महाराज के बारे में जानकारी मिलेगी।
              </p>
              <ul className="mt-6 flex flex-wrap justify-center gap-3">
                {['महाराज जी', 'आश्रम', 'श्री निताई दास जी महाराज'].map((t) => (
                  <li key={t} className="rounded-full border border-saffron-400/45 bg-ink-900/40 px-4 py-1.5 text-[0.95rem] text-saffron-100">
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-[1.1rem] text-saffron-300">श्री बद्रीनाथ धाम कथा में शुभारंभ</p>
              <button type="button" onClick={start} className={`mt-5 ${BTN}`}>
                <span aria-hidden className="absolute -inset-2 rounded-full border-2 border-saffron-300/60 motion-safe:animate-[pulseRing_2.4s_ease-out_infinite]" />
                लॉन्च करें
              </button>
            </div>

            <div aria-live="polite" className="[grid-area:1/1]">
              {phase === 'count' && (
                <div ref={countRef} className="relative grid h-56 w-56 place-items-center">
                  <svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 -rotate-90" fill="none" stroke={GOLD} strokeWidth={2.5}>
                    <circle cx={50} cy={50} r={46} strokeOpacity={0.25} />
                    <circle key={count} ref={sweep} cx={50} cy={50} r={46} pathLength={1} strokeDasharray="1" />
                  </svg>
                  <span key={count} ref={pop} className="font-serif-display text-[9rem] leading-none text-saffron-300 [text-shadow:0_0_40px_rgba(244,167,51,.55)]">
                    {count}
                  </span>
                </div>
              )}
            </div>

            <div
              aria-hidden={!launched}
              aria-live="polite"
              className={`[grid-area:1/1] flex flex-col items-center transition-all delay-[400ms] duration-700 ${launched ? '' : 'invisible translate-y-4 opacity-0'}`}
            >
              {launched && (
                <>
                  <p className="text-[clamp(1.7rem,3.8vw,2.6rem)] text-saffron-300 [text-shadow:0_2px_24px_rgba(244,167,51,.45)]">वेबसाइट लॉन्च हो गई</p>
                  <p className="mt-2 font-sans text-[clamp(1.1rem,2.2vw,1.5rem)] tracking-wide text-cream-50">gaurdasjimaharaj.in</p>
                </>
              )}
              <Link ref={enterRef} to="/" tabIndex={launched ? 0 : -1} className={`mt-8 ${BTN}`}>
                वेबसाइट देखें
              </Link>
            </div>
          </div>
        </div>
      </main>

      <canvas ref={topRef} aria-hidden className="pointer-events-none fixed inset-0 z-20 h-full w-full" />
    </div>
  );
}
