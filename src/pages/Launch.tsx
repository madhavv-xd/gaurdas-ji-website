import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Website launch ceremony page (/launch): press "लॉन्च करें" → 5-second countdown → the home page, where
// components/LaunchFireworks plays the fireworks. Shown full-screen on the projector at the katha.
// Colours are the site's own: ink/brand blues with saffron-gold (tailwind.config.js).

const GOLD = '#f4a733'; // saffron-400
const PALE_GOLD = '#fad39a'; // saffron-200
const COUNT_FROM = 5;

const BTN =
  'relative inline-block rounded-full px-12 py-4 text-[1.35rem] leading-none text-ink-900 bg-[linear-gradient(180deg,#fad39a_0%,#f4a733_50%,#e8892b_100%)] shadow-[0_14px_34px_-10px_rgba(244,167,51,.7),inset_0_1px_0_rgba(255,255,255,.55)] [text-shadow:none] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[.97] focus-visible:outline-saffron-300';

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

// rings of radial ellipses, alternating saffron and pale-gold strokes
const ring = (n: number, dist: number, rx: number, ry: number) =>
  Array.from({ length: n }, (_, i) => (
    <ellipse key={i} cx={dist} cy={0} rx={rx} ry={ry} transform={`rotate(${(360 / n) * i})`} stroke={i % 2 ? PALE_GOLD : GOLD} vectorEffect="non-scaling-stroke" />
  ));

export default function Launch() {
  const [counting, setCounting] = useState(false);
  const [count, setCount] = useState(COUNT_FROM);
  const navigate = useNavigate();
  const outerRing = useRef<SVGGElement>(null);
  const innerRing = useRef<SVGGElement>(null);
  const spin = useRef(0); // extra mandala speed; decays back to idle

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

  // Countdown, one number a second; at zero, straight to the home page with the fireworks flag.
  useEffect(() => {
    if (!counting) return;
    const id = setTimeout(() => {
      if (count > 1) {
        spin.current = Math.max(spin.current, 0.12 * (COUNT_FROM + 2 - count)); // the mandala winds up
        setCount(count - 1);
      } else {
        navigate('/', { state: { launched: true } });
      }
    }, 1000);
    return () => clearTimeout(id);
  }, [counting, count, navigate]);

  const start = () => {
    if (counting) return;
    spin.current = 0.15;
    setCounting(true);
  };

  return (
    <div className="relative min-h-svh text-cream-50">
      <div aria-hidden className="fixed inset-0 bg-[radial-gradient(ellipse_at_50%_45%,#255a7d_0%,#173a52_42%,#0b1f2e_100%)]" />
      <svg
        aria-hidden
        viewBox="-500 -500 1000 1000"
        className="pointer-events-none fixed left-1/2 top-1/2 w-[max(130vmin,760px)] -translate-x-1/2 -translate-y-1/2"
      >
        <g fill="none" strokeWidth={1.5} strokeOpacity={0.55}>
          <circle r={490} stroke={GOLD} strokeOpacity={0.35} vectorEffect="non-scaling-stroke" />
          <circle r={410} stroke={GOLD} strokeOpacity={0.45} strokeDasharray="6 14" vectorEffect="non-scaling-stroke" />
          <circle r={300} stroke={GOLD} strokeOpacity={0.4} vectorEffect="non-scaling-stroke" />
          <g ref={outerRing}>{ring(24, 330, 150, 46)}</g>
          <g ref={innerRing}>{ring(16, 170, 130, 42)}</g>
        </g>
      </svg>

      <main className="relative z-10 mx-auto flex min-h-svh max-w-3xl flex-col items-center px-4 text-center">
        <p className="pt-5 text-[0.95rem] text-[#eef4f8] [text-shadow:0_1px_3px_rgba(6,20,31,.9)]">
          Developed by <span className="font-semibold text-saffron-300">Har Setu Tech</span>
        </p>

        {/* dark glow behind the text (fades the mandala lines under it) + a dark halo on every letter, for legibility */}
        <div className="relative flex flex-1 flex-col items-center justify-center py-10 font-sanskrit [text-shadow:0_1px_3px_rgba(6,20,31,.95),0_0_18px_rgba(6,20,31,.8)] before:absolute before:-inset-x-24 before:inset-y-0 before:-z-10 before:bg-[radial-gradient(closest-side,rgba(11,31,46,.85)_0%,rgba(11,31,46,.6)_55%,transparent_100%)]">
          <p className="text-[clamp(1.15rem,1.9vw,1.4rem)] text-saffron-300">श्री राधा रमणों जयति</p>
          <p className="mb-6 mt-1 text-[clamp(1rem,1.6vw,1.2rem)] text-[#eef4f8]">भज निताई गौर राधेश्याम जप हरे कृष्ण हरे राम</p>
          <svg aria-hidden viewBox="0 0 320 24" className="w-[min(320px,70vw)] text-saffron-400" fill="none" stroke="currentColor" strokeWidth={1.2}>
            <path d="M4 15 H136 q7 0 9 -5" />
            <path d="M316 15 H184 q-7 0 -9 -5" />
            <path d="M149 11 q11 10 22 0" />
            <circle cx={160} cy={7} r={3} fill="currentColor" stroke="none" />
          </svg>
          <h1 className="mt-4 font-sanskrit text-[clamp(2.5rem,7vw,4.75rem)] leading-[1.25] text-cream-50 [text-shadow:0_2px_4px_rgba(6,20,31,.9),0_2px_28px_rgba(244,167,51,.3)]">
            श्री गौर दास जी महाराज
          </h1>
          <p className="mt-1 text-[clamp(1.15rem,2vw,1.4rem)] text-[#eef4f8]">की आधिकारिक वेबसाइट</p>

          {/* intro and countdown share one grid cell, so swapping doesn't move anything */}
          <div className="mt-8 grid w-full place-items-center">
            <div
              aria-hidden={counting}
              className={`[grid-area:1/1] flex flex-col items-center transition-all duration-500 ${counting ? 'invisible -translate-y-3 scale-95 opacity-0' : ''}`}
            >
              <p className="max-w-[46rem] text-[clamp(1.05rem,1.9vw,1.3rem)] leading-[1.9] text-white">
                यह श्री गौर दास जी महाराज की वेबसाइट है। यहाँ आपको महाराज जी से जुड़ी सारी जानकारी, आश्रम से जुड़ी जानकारी और श्री निताई दास जी
                महाराज के बारे में जानकारी मिलेगी।
              </p>
              <ul className="mt-6 flex flex-wrap justify-center gap-3">
                {['श्री गौर दास जी महाराज', 'गौर कृपा धाम आश्रम', 'श्री निताई दास जी महाराज'].map((t) => (
                  <li key={t} className="rounded-full border border-saffron-400/60 bg-ink-900/80 px-4 py-1.5 text-[1.02rem] text-cream-50">
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-[1.2rem] text-saffron-300">श्री बद्रीनाथ धाम कथा में शुभारंभ</p>
              <button type="button" onClick={start} className={`mt-5 ${BTN}`}>
                <span aria-hidden className="absolute -inset-2 rounded-full border-2 border-saffron-300/60 motion-safe:animate-[pulseRing_2.4s_ease-out_infinite]" />
                लॉन्च करें
              </button>
            </div>

            <div aria-live="polite" className="[grid-area:1/1]">
              {counting && (
                <div className="relative grid h-56 w-56 place-items-center">
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
          </div>
        </div>
      </main>
    </div>
  );
}
