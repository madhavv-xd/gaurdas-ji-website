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

          <div className="space-y-6">
            {filtered.map((c) => {
              const kathas = KATHAS.filter((k) => k.categoryId === c.id);
              const ids = new Set(kathas.map((k) => k.id));
              const videos = VIDEOS.filter((v) => ids.has(v.kathaId)).length;
              const upcoming = kathas.filter((k) => k.status === 'upcoming').length;
              return (
                <Link
                  key={c.id}
                  to={`/katha-details/${c.id}`}
                  data-reveal
                  className="group grid md:grid-cols-[320px_1fr] bg-white rounded-2xl overflow-hidden shadow-soft border border-gold/15 hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-56 md:h-auto overflow-hidden bg-cream-200">
                    <img src={c.image} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    {upcoming > 0 && (
                      <span className="absolute top-3 left-3 bg-saffron-500 text-white text-[0.68rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Upcoming</span>
                    )}
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <h3 className="font-sanskrit text-[1.7rem] text-ink-800 mb-2 group-hover:text-brand-deep transition-colors">{c.name}</h3>
                    {c.description && <div className="rich text-ink-500 mb-4" dangerouslySetInnerHTML={{ __html: c.description }} />}
                    <div className="flex flex-wrap gap-4 text-sm text-ink-500 mb-5">
                      <span className="flex items-center gap-1.5"><CalendarCheck className="w-4 h-4 text-saffron-500" />{kathas.length} kathas</span>
                      <span className="flex items-center gap-1.5"><Video className="w-4 h-4 text-saffron-500" />{videos} videos</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-brand">
                      Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
            {filtered.length === 0 && (
              <div className="text-center py-10">
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
          <div className="w-16 h-16 rounded-2xl bg-gradient-warm flex items-center justify-center mx-auto mb-5 shadow-lg">
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
