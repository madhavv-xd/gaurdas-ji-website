import { Link } from 'react-router-dom';
import { ArrowRight, Video } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import SearchField from '@/components/SearchField';
import { useQueryParam } from '@/lib/useQueryParam';
import { matches } from '@/lib/search';
import EventCard from '@/components/EventCard';
import { KATHAS, IMAGES } from '@/data/content';

const upcoming = KATHAS.filter((k) => k.status === 'upcoming');

export default function Events() {
  const [query, setQuery] = useQueryParam();
  const filtered = upcoming.filter((k) => matches(`${k.name} ${k.location}`, query));

  return (
    <div>
      <PageHero
        breadcrumb="Watch and listen"
        title="Upcoming Kathas"
        subtitle="Where Shri Gaurdas Ji Maharaj’s next kathas will be held."
        image={IMAGES.gaurdasji3}
      />

      <section className="py-10 sm:py-14 bg-cream-50">
        <div className="max-w-[1200px] mx-auto px-[22px]">
          <SectionHeading eyebrow="Events" title="Upcoming Kathas" />
          <SearchField label="Search upcoming kathas by title" value={query} onChange={setQuery} suggestions={upcoming.map((k) => k.name)} />

          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((k) => (
                <div key={k.id} className="flex" data-reveal>
                  <EventCard katha={k} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-ink-400 py-10">{query.trim() ? `No events match “${query}”.` : 'No upcoming kathas right now.'}</p>
          )}
        </div>
      </section>

      <section className="py-12 bg-ink-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Video className="w-12 h-12 text-saffron-400 mx-auto mb-4" />
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight text-balance mb-3">
            Missed a katha?
          </h2>
          <p className="text-lg text-cream-200 mb-6 max-w-2xl mx-auto">Watch the recordings of Maharaj Ji’s kathas, day by day.</p>
          <Link to="/all-kathas" className="btn-saffron">
            Watch Kathas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
