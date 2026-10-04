import { useState } from 'react';
import { ArrowLeft, ArrowRight, ListVideo, Play, Youtube, Instagram, Facebook } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import VideoGallery from '@/components/VideoGallery';
import { usePlaylists, type Playlist } from '@/lib/usePlaylists';
import { IMAGES, NITAI_ABOUT, NITAI_SOCIAL } from '@/data/content';

const SOCIAL_ICONS = { YouTube: Youtube, Instagram, Facebook };
const videoCount = (n: number) => `${n} ${n === 1 ? 'video' : 'videos'}`;

// Playlists from Nitai Das ji's YouTube channel, ticked in the sheet's NitaiPlaylists tab.
export default function NitaiDas() {
  const { lists, failed } = usePlaylists('nitaiPlaylists');
  const [open, setOpen] = useState<Playlist | null>(null);

  return (
    <div>
      <PageHero
        breadcrumb="Shri Nitai Das Ji Maharaj"
        title="Shri Nitai Das Ji Maharaj"
        subtitle=""
        image={IMAGES.kathaPortrait}
      />
      <section aria-labelledby="nitai-follow" className="bg-white border-b border-gold/25">
        <div className="max-w-[1200px] mx-auto px-[22px] py-6 sm:py-8 grid lg:grid-cols-[auto_1fr] gap-5 lg:gap-10 items-center">
          <div className="flex items-center gap-4">
            <img src={IMAGES.nitaiDas} alt="" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover ring-2 ring-gold" />
            <div>
              <h2 id="nitai-follow" className="text-2xl text-ink-800 leading-tight">Follow Nitai Das ji</h2>
              <p className="text-sm text-ink-400">Live kathas and updates</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {NITAI_SOCIAL.map(({ label, handle, action, href }) => {
              const Icon = SOCIAL_ICONS[label];
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-[14px] bg-cream-50 ring-1 ring-gold/30 hover:ring-saffron-400 px-4 py-3 transition"
                >
                  <Icon className="w-6 h-6 shrink-0 text-saffron-500" aria-hidden />
                  <span className="min-w-0">
                    <span className="block font-semibold text-ink-800">{label}</span>
                    <span className="block text-[0.82rem] text-ink-400 truncate">{handle}</span>
                    <span className="block text-sm font-semibold text-saffron-600 group-hover:text-saffron-700">{action} →</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-[1200px] mx-auto px-[22px]">
          <SectionHeading title="श्री निताई दास जी महाराज" description="बाल व्यास" />
          <div className="max-w-[70ch] mx-auto space-y-4 font-sanskrit text-ink-600 text-[1.05rem]">
            {NITAI_ABOUT.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </section>
      <section className="py-10 sm:py-14 bg-cream-50">
        <div className="max-w-[1200px] mx-auto px-[22px]">
          {open ? (
            <>
              <button onClick={() => setOpen(null)} className="btn-outline mb-6">
                <ArrowLeft className="w-4 h-4" /> All kathas
              </button>
              <SectionHeading eyebrow={videoCount(open.videos.length)} title={open.title} />
              <VideoGallery
                key={open.id}
                items={open.videos.map((v, i) => ({ id: i, title: v.title, yt: v.yt }))}
                searchPlaceholder="Search this katha’s videos"
              />
            </>
          ) : (
            <>
              <SectionHeading eyebrow="Playlist" title="Katha Series" />
              {failed ? (
                <p className="text-center text-ink-400">Could not load the kathas. Check your connection and refresh.</p>
              ) : !lists ? (
                <p className="text-center text-ink-400" aria-live="polite">Loading kathas…</p>
              ) : !lists.length ? (
                <p className="text-center text-ink-400">No kathas yet.</p>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
                  {lists.map((p) => (
                    <button key={p.id} onClick={() => setOpen(p)} className="group card flex flex-col text-left animate-fade-in">
                      <div className="card-media aspect-video">
                        <img src={p.thumbnail} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                        <span className="absolute inset-0 bg-ink-900/10 group-hover:bg-ink-900/30 transition-colors" />
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[54px] h-[54px] rounded-full bg-saffron-500/95 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" aria-hidden />
                        </span>
                      </div>
                      <div className="px-3 pt-4 pb-2 flex flex-col flex-1">
                        <h3 className="font-sanskrit text-[1.3rem] leading-snug text-ink-800 mb-4 line-clamp-2 group-hover:text-brand-deep transition-colors">{p.title}</h3>
                        <div className="mt-auto pt-3 flex items-center gap-1.5 border-t border-dashed border-gold/40 text-[0.85rem] text-ink-500">
                          <ListVideo className="w-4 h-4 text-saffron-500" aria-hidden />
                          {videoCount(p.videos.length)}
                          <ArrowRight className="w-5 h-5 ml-auto text-brand group-hover:translate-x-1 transition-transform" aria-hidden />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
