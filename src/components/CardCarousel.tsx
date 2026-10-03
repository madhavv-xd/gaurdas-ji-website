import { Children, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// stagger delay for [data-reveal] items (read by .reveal in index.css)
const d = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;

// Horizontal snap carousel: the centred card is full size, its neighbours shrink and fade.
// Infinite: the cards are rendered three times; once scrolling settles outside the middle
// copy, the track jumps (invisibly) to the same card in the middle copy.
export default function CardCarousel({ label, children }: { label: string; children: ReactNode }) {
  const slides = Children.toArray(children);
  const n = slides.length;
  const track = useRef<HTMLDivElement>(null);
  const settle = useRef(0);
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
    const mid = n + Math.floor((n - 1) / 2);
    centre(mid, false);
    setCur(mid);
  }, [n]);

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
    clearTimeout(settle.current);
    settle.current = window.setTimeout(() => {
      if (best < n || best >= 2 * n) centre((best % n) + n, false);
    }, 150);
  };

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        ref={track}
        onScroll={onScroll}
        className="relative flex gap-5 overflow-x-auto snap-x snap-mandatory py-8 -mt-8 px-[calc(50%-150px)] sm:px-[calc(50%-210px)] lg:px-[calc(50%-230px)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]"
      >
        {[...slides, ...slides, ...slides].map((s, i) => (
          <div
            key={i}
            data-reveal
            style={d((i % n) * 90)}
            // copies stay out of the tab order and the accessibility tree
            {...(i < n || i >= 2 * n ? { inert: '', 'aria-hidden': true } : {})}
            // view-transition names must be unique, so only the middle copy keeps them
            className={`snap-center shrink-0 w-[300px] sm:w-[420px] lg:w-[460px] ${i < n || i >= 2 * n ? '[&_img]:![view-transition-name:none]' : ''}`}
          >
            <div
              className={`h-full transition-[transform,opacity] duration-500 ease-out motion-reduce:transition-none ${
                i % n === cur % n ? 'scale-100 opacity-100' : 'scale-[.86] opacity-60'
              }`}
            >
              {s}
            </div>
          </div>
        ))}
      </div>

      <Controls n={n} cur={cur % n} go={(i) => centre(cur - (cur % n) + i)} loop />
    </div>
  );
}

// Arrows + dots. With `loop` the arrows never disable and pass -1 / n through; `go` wraps.
function Controls({ n, cur, go, loop }: { n: number; cur: number; go: (i: number) => void; loop?: boolean }) {
  if (n < 2) return null;
  const to = (i: number) => go(loop ? i : Math.min(n - 1, Math.max(0, i)));
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
// The caller holds which card is in front, so something beside the deck can follow or change it.
export function CardStack({ label, cur, onChange, children }: { label: string; cur: number; onChange: (i: number) => void; children: ReactNode }) {
  const slides = Children.toArray(children);
  const n = slides.length;
  const swipe = useRef<{ x: number; moved: boolean } | null>(null);
  const go = (i: number) => onChange((i + n) % n);

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
        className="relative mx-auto w-[260px] sm:w-[300px] lg:w-[330px] aspect-[4/5] mt-20 mb-6 [perspective:1400px] touch-pan-y"
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

// Temple-arch (jharokha) outlines: two stepped tiers and a pointed dome. CREST is the small tab on PosterCard,
// CROWN the top of JharokhaCard. Both sit above the picture, so a poster's title is never cut.
const CREST = 'M0,54C0,39.8 11.6,33.1 25.6,31.7C27.3,20.9 36.4,16.2 44.6,15.5C46.3,6.8 56.2,2.7 62,0C67.8,2.7 77.7,6.8 79.4,15.5C87.6,16.2 96.7,20.9 98.4,31.7C112.4,33.1 124,39.8 124,54';
const CROWN =
  'M0,96C0,70.8 28,58.8 62,56.4C66,37.2 88,28.8 108,27.6C112,12 136,4.8 150,0C164,4.8 188,12 192,27.6C212,28.8 234,37.2 238,56.4C272,58.8 300,70.8 300,96';

type CardProps = {
  to: string;
  image: string;
  badge: string;
  transitionName?: string;
  center?: ReactNode;
  children: ReactNode;
};

const Picture = ({ image, transitionName }: Pick<CardProps, 'image' | 'transitionName'>) => (
  <img
    src={image}
    alt=""
    loading="lazy"
    decoding="async"
    style={transitionName ? { viewTransitionName: transitionName } : undefined}
    className="[view-transition-class:hero-morph] absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
  />
);

// Dark poster card: the whole 4:5 picture with text over a fade at the bottom; the badge rides on a saffron arch tab above it.
export function PosterCard({ to, image, badge, transitionName, center, children }: CardProps) {
  return (
    <Link
      to={to}
      viewTransition
      // drop-shadow (not box-shadow) so the shadow takes in the tab
      className="group relative block rounded-[22px] drop-shadow-[0_16px_24px_rgba(16,43,61,.3)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-saffron-400"
    >
      <span className="absolute left-1/2 bottom-[calc(100%-1px)] -translate-x-1/2 w-[124px] h-[54px] z-10">
        <svg viewBox="0 0 124 54" preserveAspectRatio="none" aria-hidden className="absolute inset-0 w-full h-full overflow-visible">
          <path d={`${CREST}Z`} className="fill-saffron-500" />
          <path d={CREST} fill="none" className="stroke-saffron-300" vectorEffect="non-scaling-stroke" />
        </svg>
        <i className="absolute left-1/2 top-[22px] -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/90" aria-hidden />
        <span className="absolute inset-x-0 bottom-2 text-center text-white text-[0.64rem] font-bold uppercase tracking-[0.08em]">{badge}</span>
      </span>
      <div className="relative flex flex-col justify-end aspect-[4/5] overflow-hidden rounded-[22px] bg-ink-800">
        <Picture image={image} transitionName={transitionName} />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(9,24,36,.95),rgba(9,24,36,.35)_45%,transparent_75%)]" />
        {center && <div className="absolute inset-0 z-10 flex items-center justify-center">{center}</div>}
        <div className="relative z-10 p-5 text-white">{children}</div>
      </div>
    </Link>
  );
}

// Ivory card shaped like a jharokha: gold-trimmed arch top, the whole 16:9 picture (a YouTube thumbnail), then badge and text below it.
export function JharokhaCard({ to, image, badge, transitionName, center, children }: CardProps) {
  return (
    <Link
      to={to}
      viewTransition
      className="group block rounded-[20px] drop-shadow-[0_16px_24px_rgba(16,43,61,.22)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-saffron-400"
    >
      <svg viewBox="0 0 300 96" aria-hidden className="block w-full h-auto -mb-px overflow-visible">
        <path d={`${CROWN}Z`} className="fill-white" />
        <path d={CROWN} fill="none" className="stroke-gold" vectorEffect="non-scaling-stroke" />
        <g className="fill-gold">
          <circle cx="150" cy="44" r="5" />
          <circle cx="138" cy="52" r="3" />
          <circle cx="162" cy="52" r="3" />
        </g>
      </svg>
      <div className="bg-white border border-t-0 border-gold rounded-b-[20px] px-3.5 pb-4 sm:px-5 sm:pb-6 text-center">
        <div className="relative aspect-video overflow-hidden rounded-[10px] bg-cream-200">
          <Picture image={image} transitionName={transitionName} />
          {center && <div className="absolute inset-0 flex items-center justify-center">{center}</div>}
        </div>
        <span className="block mt-3.5 sm:mt-5 text-[0.64rem] sm:text-[0.72rem] font-bold uppercase tracking-[0.12em] text-saffron-600">{badge}</span>
        {children}
      </div>
    </Link>
  );
}
