import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import EventCard from '@/components/EventCard';
import NotFound from '@/pages/NotFound';
import { CATEGORIES, KATHAS, IMAGES } from '@/data/content';

export default function KathaDetail() {
  const { id } = useParams();
  const category = CATEGORIES.find((c) => String(c.id) === id);
  const kathas = KATHAS.filter((k) => k.categoryId === category?.id);
  // open on Upcoming only when there is something upcoming
  const [tab, setTab] = useState<'upcoming' | 'done'>(kathas.some((k) => k.status === 'upcoming') ? 'upcoming' : 'done');
  if (!category) return <NotFound />;

  const shown = kathas.filter((k) => k.status === tab);

  return (
    <div>
      <PageHero
        breadcrumb="Katha Detail"
        title={category.name}
        crumbs={[{ label: 'All Kathas', to: '/all-kathas' }]}
        image={category.image || IMAGES.heroKatha}
        vtName={`katha-${category.id}`}
      />

      <section className="py-[52px] sm:py-[76px] bg-cream-50">
        <div className="max-w-[1200px] mx-auto px-[22px]">
          {category.description && (
            <div className="rich text-ink-500 max-w-3xl mb-10" dangerouslySetInnerHTML={{ __html: category.description }} />
          )}

          <div role="tablist" aria-label="Events" className="flex justify-center gap-2 mb-10">
            {([
              ['upcoming', 'Upcoming Events'],
              ['done', 'Previous Events'],
            ] as const).map(([key, label]) => (
              <button
                key={key}
                role="tab"
                aria-selected={tab === key}
                onClick={() => setTab(key)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  tab === key ? 'bg-saffron-500 text-white' : 'bg-white text-ink-500 border border-ink-800/15 hover:border-saffron-300'
                }`}
              >
                {label} ({kathas.filter((k) => k.status === key).length})
              </button>
            ))}
          </div>

          {shown.length > 0 ? (
            <div key={tab} role="tabpanel" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {shown.map((k) => (
                <div key={k.id} className="flex">
                  <EventCard katha={k} />
                </div>
              ))}
            </div>
          ) : (
            <div role="tabpanel" className="text-center py-10">
              <p className="text-ink-400">No upcoming events for this katha yet.</p>
              <Link to="/events" className="btn-outline mt-4">See all upcoming events</Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
