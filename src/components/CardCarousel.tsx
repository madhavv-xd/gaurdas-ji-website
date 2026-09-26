import { Children, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// stagger delay for [data-reveal] items (read by .reveal in index.css)
const d = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;

// Horizontal snap carousel: the centred card is full size, its neighbours shrink and fade.
export default function CardCarousel({ label, children }: { label: string; children: ReactNode }) {
  const slides = Children.toArray(children);
  const track = useRef<HTMLDivElement>(null);
  const [cur, setCur] = useState(0);

  const centre = (i: number, smooth = true) => {
    const t = track.current;
    const el = t?.children[i] as HTMLElement | undefined;
    if (!t || !el) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    t.scrollTo({ left: el.offsetLeft + el.offsetWidth / 2 - t.clientWidth / 2, behavior: smooth && !reduce ? 'smooth' : 'instant' });
  };

  // open on the middle card, so there are neighbours on both sides
  useEffect(() => {
    const mid = Math.floor((slides.length - 1) / 2);
    centre(mid, false);
    setCur(mid);
  }, [slides.length]);

  const onScroll = () => {
    const t = track.current!;
    const mid = t.scrollLeft + t.clientWidth / 2;
    const dist = (i: number) => {
      const el = t.children[i] as HTMLElement;
      return Math.abs(el.offsetLeft + el.offsetWidth / 2 - mid);
    };
    let best = 0;
    for (let i = 1; i < t.children.length; i++) if (dist(i) < dist(best)) best = i;
    setCur(best);
  };

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        ref={track}
        onScroll={onScroll}
        className="relative flex gap-5 overflow-x-auto snap-x snap-mandatory py-6 px-[calc(50%-130px)] sm:px-[calc(50%-150px)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]"
      >
        {slides.map((s, i) => (
          <div key={i} data-reveal style={d(i * 90)} className="snap-center shrink-0 w-[260px] sm:w-[300px]">
            <div
              className={`h-full transition-[transform,opacity] duration-500 ease-out motion-reduce:transition-none ${
                i === cur ? 'scale-100 opacity-100' : 'scale-[.86] opacity-60'
              }`}
            >
              {s}
            </div>
          </div>
        ))}
      </div>

      <Controls n={slides.length} cur={cur} go={centre} />
    </div>
  );
}

// Arrows + dots. `loop` wraps past either end instead of disabling the arrow.
function Controls({ n, cur, go, loop }: { n: number; cur: number; go: (i: number) => void; loop?: boolean }) {
  if (n < 2) return null;
  const to = (i: number) => go(loop ? (i + n) % n : Math.min(n - 1, Math.max(0, i)));
  return (
    <div className="flex items-center justify-center gap-4 mt-2">
      <button onClick={() => to(cur - 1)} disabled={!loop && cur === 0} aria-label="Previous" className="p-2 rounded-full text-ink-800 hover:bg-cream-200 disabled:opacity-30 transition">
        <ArrowLeft className="w-5 h-5" />
      </button>
      {Array.from({ length: n }, (_, i) => (
        <button
          key={i}
          onClick={() => go(i)}
          aria-label={`Go to card ${i + 1}`}
          aria-current={i === cur}
          className={`h-2 rounded-full transition-all duration-300 ${i === cur ? 'w-6 bg-saffron-500' : 'w-2 bg-ink-800/20 hover:bg-ink-800/40'}`}
        />
      ))}
      <button onClick={() => to(cur + 1)} disabled={!loop && cur === n - 1} aria-label="Next" className="p-2 rounded-full text-ink-800 hover:bg-cream-200 disabled:opacity-30 transition">
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}

// 3D deck of flashcards: the front card is live, the rest sit behind it, tilted and pushed back.
// Arrows, dots, swipe, arrow keys, or clicking/focusing a back card bring a card to the front.
export function CardStack({ label, children }: { label: string; children: ReactNode }) {
  const slides = Children.toArray(children);
  const n = slides.length;
  const [cur, setCur] = useState(0);
  const swipe = useRef<{ x: number; moved: boolean } | null>(null);
  const go = (i: number) => setCur((i + n) % n);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      data-reveal
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(cur + 1);
        if (e.key === 'ArrowLeft') go(cur - 1);
      }}
    >
      <div
        className="relative mx-auto w-[260px] sm:w-[300px] aspect-[3/4] my-6 [perspective:1400px] touch-pan-y"
        onPointerDown={(e) => (swipe.current = { x: e.clientX, moved: false })}
        onPointerMove={(e) => {
          if (swipe.current && Math.abs(e.clientX - swipe.current.x) > 10) swipe.current.moved = true;
        }}
        onPointerUp={(e) => {
          const dx = swipe.current ? e.clientX - swipe.current.x : 0;
          if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1));
        }}
        // a swipe shouldn't also open the card it started on
        onClickCapture={(e) => {
          if (swipe.current?.moved) e.preventDefault();
          swipe.current = null;
        }}
      >
        {slides.map((s, i) => {
          const k = (i - cur + n) % n; // 0 = front, 1 = just behind…
          return (
            <div
              key={i}
              onClickCapture={(e) => {
                if (k === 0) return;
                e.preventDefault();
                go(i);
              }}
              onFocus={() => k !== 0 && go(i)}
              style={{
                zIndex: n - k,
                opacity: k > 2 ? 0 : 1 - k * 0.12,
                transform: `translate3d(${k * 34}px, ${k * -14}px, ${k * -90}px) rotateY(${k * -9}deg) rotateZ(${k * 2.5}deg)`,
                filter: k ? `brightness(${1 - k * 0.12})` : undefined,
              }}
              className={`absolute inset-0 transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(.2,.8,.2,1)] motion-reduce:transition-none ${
                k ? 'cursor-pointer' : ''
              }`}
            >
              {s}
            </div>
          );
        })}
      </div>
      <Controls n={n} cur={cur} go={go} loop />
    </div>
  );
}

// Tall image card: full-bleed picture, badge on top, text over a dark fade at the bottom.
export function PosterCard({
  to,
  image,
  badge,
  transitionName,
  center,
  children,
}: {
  to: string;
  image: string;
  badge: string;
  transitionName?: string;
  center?: ReactNode;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      viewTransition
      className="group relative flex flex-col justify-end aspect-[3/4] rounded-[26px] overflow-hidden bg-ink-800 shadow-lift focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-saffron-400"
    >
      <img
        src={image}
        alt=""
        loading="lazy"
        decoding="async"
        style={transitionName ? { viewTransitionName: transitionName } : undefined}
        className="[view-transition-class:hero-morph] absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(9,24,36,.95),rgba(9,24,36,.35)_45%,rgba(9,24,36,.55))]" />
      <span className="absolute top-4 left-4 z-10 text-white text-[0.72rem] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-saffron-500 shadow-soft">
        {badge}
      </span>
      {center && <div className="absolute inset-0 z-10 flex items-center justify-center">{center}</div>}
      <div className="relative z-10 p-5 text-white">{children}</div>
    </Link>
  );
}
