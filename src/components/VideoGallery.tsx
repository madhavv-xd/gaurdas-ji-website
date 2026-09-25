import { useEffect, useState } from 'react';
import { Play, Facebook, Twitter, MessageCircle, Youtube, ChevronLeft, ChevronRight } from 'lucide-react';
import Modal from '@/components/Modal';
import SearchField from '@/components/SearchField';
import { useQueryParam } from '@/lib/useQueryParam';
import { ytThumb, ytEmbed, ytWatch } from '@/data/content';

export type VideoItem = { id: number; title: string; yt: string };

interface VideoGalleryProps {
  items: VideoItem[];
  // shows the search box when set
  searchPlaceholder?: string;
  // how many to render before "Load more"
  pageSize?: number;
}

const share = (yt: string, title: string) => {
  const url = encodeURIComponent(ytWatch(yt));
  const text = encodeURIComponent(title);
  return [
    { label: 'Share on Facebook', Icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
    { label: 'Share on X', Icon: Twitter, href: `https://twitter.com/intent/tweet?url=${url}&text=${text}` },
    { label: 'Share on WhatsApp', Icon: MessageCircle, href: `https://wa.me/?text=${text}%20${url}` },
  ];
};

export default function VideoGallery({ items, searchPlaceholder, pageSize = 12 }: VideoGalleryProps) {
  const [param, setQuery] = useQueryParam();
  const query = searchPlaceholder ? param : '';
  const [shown, setShown] = useState(pageSize);
  const [playing, setPlaying] = useState<VideoItem | null>(null);

  const q = query.trim().toLowerCase();
  const filtered = q ? items.filter((v) => v.title.toLowerCase().includes(q)) : items;
  const at = playing ? filtered.findIndex((v) => v.id === playing.id) : -1;
  const step = (n: number) => at >= 0 && setPlaying(filtered[(at + n + filtered.length) % filtered.length]);

  // ← → move through the list without closing the player
  useEffect(() => {
    if (!playing) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  return (
    <>
      {searchPlaceholder && (
        <SearchField
          label={searchPlaceholder}
          value={query}
          onChange={(v) => {
            setQuery(v);
            setShown(pageSize);
          }}
          count={filtered.length}
          noun="videos"
        />
      )}

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.slice(0, shown).map((v) => (
          <li key={v.id} className="group card flex flex-col animate-fade-in">
            <button onClick={() => setPlaying(v)} className="card-media aspect-video bg-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500" aria-label={`Play ${v.title}`}>
              <img src={ytThumb(v.yt)} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
              <span className="absolute inset-0 bg-ink-900/20 group-hover:bg-ink-900/40 transition-colors" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[54px] h-[54px] rounded-full bg-saffron-500/95 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
              </span>
            </button>
            <div className="px-2.5 pt-3.5 pb-2 flex flex-col flex-1 gap-3">
              <p className="text-[0.95rem] font-medium text-ink-800 leading-snug line-clamp-3">{v.title}</p>
              <div className="flex gap-2 mt-auto">
                {share(v.yt, v.title).map(({ label, Icon, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="w-8 h-8 rounded-full bg-brand-soft text-brand hover:bg-brand hover:text-white flex items-center justify-center transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <div className="text-center py-10">
          <p className="text-ink-400">No videos match “{query}”.</p>
          <button onClick={() => setQuery('')} className="btn-outline mt-4">Clear search</button>
        </div>
      )}

      {shown < filtered.length && (
        <div className="text-center mt-10">
          <button onClick={() => setShown((n) => n + pageSize)} className="btn-outline">
            Load more ({filtered.length - shown} left)
          </button>
        </div>
      )}

      <Modal open={!!playing} onClose={() => setPlaying(null)} label={playing?.title ?? 'Video'}>
        {playing && (
          <div>
            <iframe
              key={playing.yt}
              src={ytEmbed(playing.yt)}
              title={playing.title}
              className="w-full aspect-video rounded-xl shadow-2xl bg-ink-900"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-white font-medium max-w-[60ch]">{playing.title}</p>
              <div className="flex items-center gap-2">
                {filtered.length > 1 && (
                  <>
                    <button onClick={() => step(-1)} aria-label="Previous video" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-sm text-white/80 tabular-nums min-w-[4.5rem] text-center">
                      {at + 1} of {filtered.length}
                    </span>
                    <button onClick={() => step(1)} aria-label="Next video" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
                <a href={ytWatch(playing.yt)} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2 !px-4 !text-sm ml-1">
                  <Youtube className="w-4 h-4" /> Open in YouTube
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
