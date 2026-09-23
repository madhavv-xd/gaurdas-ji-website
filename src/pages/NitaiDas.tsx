import { useEffect, useState } from 'react';
import { ArrowLeft, CalendarCheck, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import VideoGallery from '@/components/VideoGallery';
import { IMAGES, NITAI_DAS_SHEET_URL } from '@/data/content';

type Katha = { id: number; katha_name: string; date: string; venue: string; image_url: string };
type Video = { katha_id: number; title: string; youtube_link: string };

// handles watch?v=ID, youtu.be/ID and /live/ID links
const ytId = (url: string) => url.match(/(?:v=|youtu\.be\/|\/live\/)([\w-]{11})/)?.[1] ?? '';

export default function NitaiDas() {
  const [data, setData] = useState<{ kathas: Katha[]; videos: Video[] } | null>(null);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState<Katha | null>(null);

  useEffect(() => {
    fetch(NITAI_DAS_SHEET_URL)
      .then((r) => r.json())
      .then((j) => setData({ kathas: j.kathas ?? [], videos: j.videos ?? [] }))
      .catch(() => setError(true));
  }, []);

  const items = (data?.videos ?? [])
    .filter((v) => v.katha_id === open?.id)
    .map((v, i) => ({ id: i, title: v.title, yt: ytId(v.youtube_link) }))
    .filter((v) => v.yt);

  return (
    <div>
      <PageHero
        breadcrumb="Shri Nitai Das Ji Maharaj"
        title="Shri Nitai Das Ji Maharaj"
        subtitle="Katha recordings by Shri Nitai Das Ji Maharaj."
        image={IMAGES.kathaPortrait}
      />
      <section className="py-[52px] sm:py-[76px] bg-cream-50">
        <div className="max-w-[1200px] mx-auto px-[22px]">
          {open ? (
            <>
              <button onClick={() => setOpen(null)} className="btn-outline mb-6">
                <ArrowLeft className="w-4 h-4" /> All kathas
              </button>
              <SectionHeading eyebrow={`${open.date} · ${open.venue}`} title={open.katha_name} />
              <VideoGallery key={open.id} items={items} searchPlaceholder="Search videos by title" />
            </>
          ) : (
            <>
              <SectionHeading eyebrow="Playlist" title="Katha Series" />
              {error && <p className="text-center text-ink-400">Could not load the kathas. Check your connection and refresh.</p>}
              {!data && !error && <p className="text-center text-ink-400">Loading kathas…</p>}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
                {data?.kathas.map((k) => (
                  <button key={k.id} onClick={() => setOpen(k)} className="group card flex flex-col text-left">
                    <div className="card-media aspect-[4/3] bg-cream-100">
                      <img src={k.image_url} alt="" loading="lazy" decoding="async" className="w-full h-full object-contain" />
                    </div>
                    <div className="px-3 pt-4 pb-2 flex flex-col flex-1 gap-2">
                      <h3 className="text-[1.05rem] font-medium leading-snug text-ink-800 group-hover:text-brand-deep transition-colors">{k.katha_name}</h3>
                      <p className="flex items-center gap-1.5 text-[0.85rem] text-ink-500"><CalendarCheck className="w-4 h-4 text-saffron-500" aria-hidden />{k.date}</p>
                      <p className="flex items-center gap-1.5 text-[0.85rem] text-ink-500"><MapPin className="w-4 h-4 text-saffron-500" aria-hidden />{k.venue}</p>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
