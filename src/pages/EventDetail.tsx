import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, MapPin, Navigation, CalendarPlus, Share2, Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import VideoGallery from '@/components/VideoGallery';
import NotFound from '@/pages/NotFound';
import { CATEGORIES, KATHAS, VIDEOS, IMAGES, mapsDir, type Katha } from '@/data/content';

// "21 July 2026 - 23 January 2027" → Google Calendar all-day event link (end date is exclusive)
function calendarLink(k: Katha) {
  const [from, to] = k.dates.split(/\s+-\s+/).map((s) => new Date(`${s} 12:00`));
  if (!from || isNaN(+from)) return null;
  const end = new Date(+(to && !isNaN(+to) ? to : from) + 864e5);
  const ymd = (d: Date) => d.toISOString().slice(0, 10).replace(/-/g, '');
  const p = new URLSearchParams({ action: 'TEMPLATE', text: k.name, dates: `${ymd(from)}/${ymd(end)}`, location: k.location });
  return `https://calendar.google.com/calendar/render?${p}`;
}

export default function EventDetail() {
  const { id } = useParams();
  const [shared, setShared] = useState(false);
  const katha = KATHAS.find((k) => String(k.id) === id);
  if (!katha) return <NotFound />;

  const category = CATEGORIES.find((c) => c.id === katha.categoryId);
  const videos = VIDEOS.filter((v) => v.kathaId === katha.id);
  const upcoming = katha.status === 'upcoming';
  const cal = upcoming ? calendarLink(katha) : null;

  // native share sheet on phones, copy link elsewhere
  const share = async () => {
    const data = { title: katha.name, url: window.location.href };
    if (navigator.share) return navigator.share(data).catch(() => {});
    await navigator.clipboard?.writeText(data.url);
    setShared(true);
    setTimeout(() => setShared(false), 1800);
  };

  return (
    <div>
      <PageHero
        breadcrumb={category?.name ?? 'Event'}
        title={katha.name}
        crumbs={category ? [{ label: category.name, to: `/katha-details/${category.id}` }] : []}
        image={IMAGES.heroKatha}
      />

      <section className="py-[52px] sm:py-[76px] bg-cream-50">
        <div className="max-w-[1200px] mx-auto px-[22px] grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <div className="min-w-0">
            {katha.images.map((src) => (
              <img key={src} src={src} alt={katha.name} className="w-full rounded-[18px] shadow-soft mb-6" />
            ))}
            <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] text-ink-800 mb-4">{katha.name}</h2>
            <div className="rich text-ink-500 max-w-[70ch]" dangerouslySetInnerHTML={{ __html: katha.shortDescription + katha.description }} />
          </div>

          <aside className="bg-white rounded-[22px] p-6 sm:p-8 shadow-soft border border-gold/15 lg:sticky lg:top-28">
            <h3 className="text-[1.4rem] text-saffron-500 mb-5">Event Date &amp; Time</h3>
            <dl className="space-y-4 text-ink-600">
              {katha.dates && <div className="flex gap-3"><dt className="sr-only">Dates</dt><Calendar className="w-5 h-5 text-saffron-500 flex-none" aria-hidden /><dd>{katha.dates}</dd></div>}
              {katha.time && <div className="flex gap-3"><dt className="sr-only">Time</dt><Clock className="w-5 h-5 text-saffron-500 flex-none" aria-hidden /><dd>{katha.time}</dd></div>}
              {katha.location && <div className="flex gap-3"><dt className="sr-only">Venue</dt><MapPin className="w-5 h-5 text-saffron-500 flex-none" aria-hidden /><dd>{katha.location}</dd></div>}
            </dl>
            <div className="mt-6 grid gap-3">
              {upcoming && katha.location && (
                <a href={mapsDir(katha.location)} target="_blank" rel="noopener noreferrer" className="btn-saffron w-full">
                  <Navigation className="w-4 h-4" /> Get Direction
                </a>
              )}
              {cal && (
                <a href={cal} target="_blank" rel="noopener noreferrer" className="btn-outline w-full">
                  <CalendarPlus className="w-4 h-4" /> Add to Google Calendar
                </a>
              )}
              <button onClick={share} className="btn-outline w-full">
                {shared ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                <span aria-live="polite">{shared ? 'Link copied' : 'Share this event'}</span>
              </button>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-[52px] sm:py-[76px] bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-[22px]">
          {videos.length > 0 ? (
            <>
              <SectionHeading eyebrow="Events" title={`Videos of ${katha.name}`} />
              <VideoGallery items={videos.map((v) => ({ id: v.id, title: v.name, yt: v.yt }))} />
            </>
          ) : (
            <SectionHeading
              eyebrow="Events"
              title={upcoming ? 'This event has not started yet' : 'No videos for this event yet'}
              description={upcoming ? 'Videos will be added here once the event begins.' : undefined}
            />
          )}
        </div>
      </section>
    </div>
  );
}
