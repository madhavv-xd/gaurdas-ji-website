import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, ListVideo, Play } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import SearchField from '@/components/SearchField';
import { useQueryParam } from '@/lib/useQueryParam';
import { usePlaylists } from '@/lib/usePlaylists';
import { matches } from '@/lib/search';
import { IMAGES } from '@/data/content';

// The katha recordings: YouTube playlists ticked in the sheet; each card opens that playlist's videos.
export default function Kathas() {
  const [query, setQuery] = useQueryParam();
  const { lists, failed } = usePlaylists();
  const filtered = lists?.filter((p) => matches(p.title, query)) ?? [];

  return (
    <div>
      <PageHero
        breadcrumb="Our Katha's"
        title="Join All Kathas"
        subtitle="Recordings of Shri Gaurdas Ji Maharaj’s kathas, from his YouTube channel."
        image={IMAGES.kathaBanner}
      />

      <section className="py-10 sm:py-14 bg-cream-50">
        <div className="max-w-[1100px] mx-auto px-[22px]">
          <SectionHeading eyebrow="Our Katha's" title="Katha Series" />
          <SearchField label="Search kathas by title" value={query} onChange={setQuery} suggestions={lists?.map((p) => p.title)} />

          {failed ? (
            <p className="text-center text-ink-400 py-10">Couldn’t load the kathas. Check your connection and refresh.</p>
          ) : !lists ? (
            <p className="text-center text-ink-400 py-10" aria-live="polite">Loading kathas…</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {filtered.map((p) => (
                <Link key={p.id} to={`/katha-playlist/${p.id}`} viewTransition className="group card flex flex-col animate-fade-in">
                  <div className="card-media aspect-video">
                    <img src={p.thumbnail} alt="" loading="lazy" decoding="async" style={{ viewTransitionName: `pl-${p.id}` }} className="[view-transition-class:hero-morph] w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                    <span className="absolute inset-0 bg-ink-900/10 group-hover:bg-ink-900/30 transition-colors" />
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[54px] h-[54px] rounded-full bg-saffron-500/95 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" aria-hidden />
                    </span>
                  </div>
                  <div className="px-3 pt-4 pb-2 flex flex-col flex-1">
                    <h3 className="font-sanskrit text-[1.3rem] leading-snug text-ink-800 mb-4 line-clamp-2 group-hover:text-brand-deep transition-colors">{p.title}</h3>
                    <div className="mt-auto pt-3 flex items-center gap-1.5 border-t border-dashed border-gold/40 text-[0.85rem] text-ink-500">
                      <ListVideo className="w-4 h-4 text-saffron-500" aria-hidden />
                      {p.videos.length} {p.videos.length === 1 ? 'video' : 'videos'}
                      <ArrowRight className="w-5 h-5 ml-auto text-brand group-hover:translate-x-1 transition-transform" aria-hidden />
                    </div>
                  </div>
                </Link>
              ))}
              {filtered.length === 0 && (
                <div className="col-span-full text-center py-10">
                  {query ? (
                    <>
                      <p className="text-ink-400">No kathas match “{query}”.</p>
                      <button onClick={() => setQuery('')} className="btn-outline mt-4">Clear search</button>
                    </>
                  ) : (
                    <p className="text-ink-400">No kathas yet.</p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-ink-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-saffron-500 flex items-center justify-center mx-auto mb-5">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight text-balance mb-3">
            Want to attend a Katha?
          </h2>
          <p className="text-lg text-cream-200 mb-6 max-w-2xl mx-auto">See the upcoming kathas and plan your visit.</p>
          <Link to="/events" className="btn-saffron">
            View Events <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
