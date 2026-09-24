import { useEffect } from 'react';

// Tweak the feel here.
const SPAWN_DISTANCE = 50; // px the pointer must travel before the next logo appears
const MAX_ITEMS = 12; // at most this many on screen; extra spawns are skipped
const DURATION_MS = 1400;
const SIZE_RANGE: [number, number] = [70, 90]; // logo width in px, picked at random
const MAX_OPACITY = 0.85;
const TEXT_MODE = false; // true = "राधे राधे" text instead of the logo image

const SRC = '/radhe-shyam.png';
const BLUE = '#1E3A8A';
const SAFFRON = '#E8731A';
const FONT = 'Yatra One';

const rand = (min: number, max: number) => min + Math.random() * (max - min);

// "Radhey Radhey" trail: small logos appear near the cursor, float up and fade. Mouse/pen only.
export default function CursorTrail() {
  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const coarse = matchMedia('(pointer: coarse)');
    const live = new Set<HTMLElement>();
    let pending: { x: number; y: number }[] = [];
    let frame = 0;
    let last: { x: number; y: number } | null = null;

    if (TEXT_MODE) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `https://fonts.googleapis.com/css2?family=${FONT.replace(/ /g, '+')}&display=swap`;
      document.head.appendChild(link);
    } else {
      new Image().src = SRC; // preload once; every item reuses the cached file
    }

    const spawn = ({ x, y }: { x: number; y: number }) => {
      if (live.size >= MAX_ITEMS) return;
      let el: HTMLElement;
      const size = rand(...SIZE_RANGE);
      if (TEXT_MODE) {
        el = document.createElement('span');
        el.textContent = 'राधे राधे';
        el.style.cssText = `font-family:'${FONT}',serif;font-size:${size / 4}px;white-space:nowrap;color:${Math.random() < 0.2 ? SAFFRON : BLUE}`;
      } else {
        const img = document.createElement('img');
        img.src = SRC;
        img.alt = '';
        img.draggable = false;
        img.style.width = `${size}px`;
        el = img;
      }
      el.setAttribute('aria-hidden', 'true');
      Object.assign(el.style, {
        position: 'fixed',
        left: '0',
        top: '0',
        zIndex: '9999',
        pointerEvents: 'none',
        userSelect: 'none',
        willChange: 'transform, opacity',
        opacity: '0',
      });

      const x0 = x + rand(-10, 10);
      const y0 = y + rand(-10, 10);
      const drift = rand(-15, 15);
      const tilt = rand(-8, 8);
      const at = (dx: number, dy: number, scale: number) =>
        `translate(${x0 + dx}px, ${y0 + dy}px) translate(-50%, -50%) rotate(${tilt}deg) scale(${scale})`;

      document.body.appendChild(el);
      live.add(el);
      const anim = el.animate(
        [
          { opacity: 0, transform: at(0, 0, 0.8) },
          { opacity: MAX_OPACITY, offset: 0.2 },
          { opacity: 0, transform: at(drift, -40, 1) },
        ],
        { duration: DURATION_MS, easing: 'ease-out', fill: 'forwards' },
      );
      anim.onfinish = () => {
        el.remove();
        live.delete(el);
      };
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch' || reduced.matches || coarse.matches) return;
      if (last && Math.hypot(e.clientX - last.x, e.clientY - last.y) < SPAWN_DISTANCE) return;
      last = { x: e.clientX, y: e.clientY };
      pending.push(last);
      frame ||= requestAnimationFrame(() => {
        frame = 0;
        pending.forEach(spawn);
        pending = [];
      });
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
      live.forEach((el) => el.remove());
      live.clear();
    };
  }, []);

  return null;
}
