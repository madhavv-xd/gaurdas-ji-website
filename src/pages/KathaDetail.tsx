import { Link, useParams } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import EventCard from '@/components/EventCard';
import NotFound from '@/pages/NotFound';
import { CATEGORIES, IMAGES, UPCOMING_KATHAS } from '@/data/content';

export default function KathaDetail() {
  const { id } = useParams();
  const category = CATEGORIES.find((c) => String(c.id) === id);
  if (!category) return <NotFound />;

  const shown = UPCOMING_KATHAS.filter((k) => k.categoryId === category.id);

  return (
    <div>
      <PageHero
        breadcrumb="Katha Detail"
        title={category.name}
        crumbs={[{ label: 'All Kathas', to: '/all-kathas' }]}
        image={category.image || IMAGES.heroKatha}
        vtName={`katha-${category.id}`}
      />

      <section className="py-10 sm:py-14 bg-cream-50">
        <div className="max-w-[1200px] mx-auto px-[22px]">
          {category.description && (
            <div className="rich text-ink-500 max-w-3xl mb-10" dangerouslySetInnerHTML={{ __html: category.description }} />
          )}

          <h2 className="text-center text-[1.6rem] text-ink-800 mb-8">Upcoming Kathas</h2>
          {shown.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {shown.map((k) => (
                <div key={k.id} className="flex">
                  <EventCard katha={k} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-ink-400">No upcoming kathas in this category yet.</p>
              <Link to="/events" className="btn-outline mt-4">See all upcoming kathas</Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
