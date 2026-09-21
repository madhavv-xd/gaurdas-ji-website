import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { CATEGORIES, IMAGES, type Katha } from '@/data/content';

export default function EventCard({ katha }: { katha: Katha }) {
  const category = CATEGORIES.find((c) => c.id === katha.categoryId);
  const image = katha.images[0] ?? category?.image ?? IMAGES.heroKatha;
  return (
    <Link
      to={`/event-detail/${katha.id}`}
      className="group w-full h-full bg-white rounded-2xl overflow-hidden shadow-soft border border-gold/15 flex flex-col hover:-translate-y-1 hover:shadow-lift transition-all duration-300"
    >
      <div className="relative h-[190px] overflow-hidden bg-cream-200">
        <img src={image} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <span
          className={`absolute top-3 left-3 text-white text-[0.68rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
            katha.status === 'upcoming' ? 'bg-saffron-500' : 'bg-brand'
          }`}
        >
          {katha.status === 'upcoming' ? 'Upcoming' : 'Completed'}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        {category && <p className="eyebrow mb-1">{category.name}</p>}
        <h3 className="text-[1.2rem] text-ink-800 mb-3 group-hover:text-brand-deep transition-colors">{katha.name}</h3>
        <dl className="space-y-1.5 text-[0.85rem] text-ink-500 mb-4">
          {katha.dates && (
            <div className="flex gap-2"><dt className="sr-only">Dates</dt><Calendar className="w-4 h-4 mt-0.5 text-saffron-500 flex-none" aria-hidden /><dd>{katha.dates}</dd></div>
          )}
          {katha.time && (
            <div className="flex gap-2"><dt className="sr-only">Time</dt><Clock className="w-4 h-4 mt-0.5 text-saffron-500 flex-none" aria-hidden /><dd>{katha.time}</dd></div>
          )}
          {katha.location && (
            <div className="flex gap-2"><dt className="sr-only">Venue</dt><MapPin className="w-4 h-4 mt-0.5 text-saffron-500 flex-none" aria-hidden /><dd>{katha.location}</dd></div>
          )}
        </dl>
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          View details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
