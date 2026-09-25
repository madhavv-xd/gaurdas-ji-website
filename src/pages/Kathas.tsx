import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CalendarCheck, Video } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import SearchField from '@/components/SearchField';
import { useQueryParam } from '@/lib/useQueryParam';
import { CATEGORIES, KATHAS, VIDEOS, IMAGES } from '@/data/content';

export default function Kathas() {
  const [query, setQuery] = useQueryParam();
  const q = query.trim().toLowerCase();
  const filtered = CATEGORIES.filter((c) => c.name.toLowerCase().includes(q));

  return (
    <div>
      <PageHero
        breadcrumb="Our Katha's"
        title="Join All Kathas"
        subtitle="Every katha series by Shri Gaurdas Ji Maharaj — with upcoming dates, past events and recordings."
        image={IMAGES.heroKatha}
      />

      <section className="py-[52px] sm:py-[76px] bg-cream-50">
        <div className="max-w-[1100px] mx-auto px-[22px]">
          <SectionHeading eyebrow="Our Katha's" title="Katha Series" />
          <SearchField label="Search kathas by title" value={query} onChange={setQuery} suggestions={CATEGORIES.map((c) => c.name)} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {filtered.map((c) => {
              const kathas = KATHAS.filter((k) => k.categoryId === c.id);
              const ids = new Set(kathas.map((k) => k.id));
              const videos = VIDEOS.filter((v) => ids.has(v.kathaId)).length;
              const upcoming = kathas.filter((k) => k.status === 'upcoming').length;
              return (
                <Link key={c.id} to={`/katha-details/${c.id}`} viewTransition data-reveal className="group card flex flex-col">
                  {/* posters are 304×384; keep that ratio so the artwork's own title is never cropped */}
                  <div className="card-media aspect-[304/384]">
                    <img src={c.image} alt="" loading="lazy" decoding="async" style={{ viewTransitionName: `katha-${c.id}` }} className="[view-transition-class:hero-morph] w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                    {upcoming > 0 && (
                      <span className="absolute top-3 left-3 bg-saffron-500 text-white text-[0.72rem] font-semibold px-3 py-1 rounded-full">
                        {upcoming} upcoming
                      </span>
                    )}
                  </div>
                  <div className="px-3 pt-4 pb-2 flex flex-col flex-1">
                    <h3 className="font-sanskrit text-[1.45rem] leading-snug text-ink-800 mb-4 group-hover:text-brand-deep transition-colors">{c.name}</h3>
                    <div className="mt-auto pt-3 flex items-center gap-4 border-t border-dashed border-gold/40 text-[0.85rem] text-ink-500">
                      <span className="flex items-center gap-1.5"><CalendarCheck className="w-4 h-4 text-saffron-500" aria-hidden />{kathas.length} kathas</span>
                      <span className="flex items-center gap-1.5"><Video className="w-4 h-4 text-saffron-500" aria-hidden />{videos} videos</span>
                      <ArrowRight className="w-5 h-5 ml-auto text-brand group-hover:translate-x-1 transition-transform" aria-hidden />
                    </div>
                  </div>
                </Link>
              );
            })}
            {filtered.length === 0 && (
              <div className="col-span-full text-center py-10">
                <p className="text-ink-400">No kathas match “{query}”.</p>
                <button onClick={() => setQuery('')} className="btn-outline mt-4">Clear search</button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-ink-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-saffron-500 flex items-center justify-center mx-auto mb-5">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight text-balance mb-3">
            Want to attend a Katha?
          </h2>
          <p className="text-lg text-cream-200 mb-6 max-w-2xl mx-auto">See the upcoming events and plan your visit.</p>
          <Link to="/events" className="btn-saffron">
            View Events <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
