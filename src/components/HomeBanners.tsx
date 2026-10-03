import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Modal from '@/components/Modal';
import { EKADASHI_SHEET_URL } from '@/data/content';

type Banner = { title: string; image: string; description: string };

const SEEN = 'bannersSeen';
const SHOW_MS = 10_000;

// Home page popup: the first row of the sheet's Banners tab with Display TRUE.
// Closes on ✕ or by itself after 10 s (paused while the pointer is on it). Once per browser session.
export default function HomeBanners() {
  const [banner, setBanner] = useState<Banner | null>(null);
  const [closed, setClosed] = useState(false);
  const [paused, setPaused] = useState(false);
  const left = useRef(SHOW_MS); // time the popup still has
  const open = !!banner && !closed;

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SEEN)) return;
    } catch {
      /* storage blocked: show it */
    }
    fetch(`${EKADASHI_SHEET_URL}?view=banners`)
      .then((r) => r.json())
      .then((d) => Array.isArray(d.banners) && d.banners[0] && setBanner(d.banners[0])) // an older deployment sends the kirtan list
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!open || paused) return;
    try {
      sessionStorage.setItem(SEEN, '1');
    } catch {
      /* storage blocked: nothing to do */
    }
    const start = Date.now();
    const t = setTimeout(() => setClosed(true), left.current);
    return () => {
      clearTimeout(t);
      left.current -= Date.now() - start;
    };
  }, [open, paused]);

  return (
    <Modal open={open} onClose={() => setClosed(true)} label={banner?.title || 'Announcement'}>
      {banner && (
        <article
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          className={`${paused ? 'paused ' : ''}flex flex-col md:flex-row md:items-center gap-5 md:gap-10 max-h-[calc(100dvh-6rem)] text-white`}
        >
          <img
            src={banner.image}
            alt={banner.title}
            className="flex-none self-center max-h-[40dvh] md:max-h-[calc(100dvh-6rem)] md:max-w-[45%] w-auto max-w-full object-contain rounded-xl shadow-2xl"
          />
          <div className="flex-1 min-h-0 md:max-h-[calc(100dvh-6rem)] flex flex-col">
            {banner.title && <h2 className="font-serif-display text-[1.6rem] md:text-[2.2rem] leading-tight">{banner.title}</h2>}
            {banner.description && (
              <p className="mt-3 min-h-0 overflow-y-auto text-white/80 leading-[1.8] whitespace-pre-line">{banner.description}</p>
            )}
            {/* fills over the 10 s; same bar as the hero slider's dots */}
            <span className="relative mt-5 flex-none block h-1 rounded-full bg-white/15 overflow-hidden">
              <span className="dot-progress absolute inset-0 bg-saffron-400" style={{ '--slide-ms': `${SHOW_MS}ms` } as CSSProperties} />
            </span>
          </div>
        </article>
      )}
    </Modal>
  );
}
