import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import VideoGallery from '@/components/VideoGallery';
import { VIDEOS, IMAGES } from '@/data/content';

const items = VIDEOS.map((v) => ({ id: v.id, title: v.name, yt: v.yt }));

export default function PreviousEvents() {
  return (
    <div>
      <PageHero
        breadcrumb="Events"
        title="Previous Events"
        subtitle="Recordings of every katha day — watch, listen and share."
        image={IMAGES.heroGaurdasji}
        crumbs={[{ label: 'Events', to: '/events' }]}
      />
      <section className="py-[52px] sm:py-[76px] bg-cream-50">
        <div className="max-w-[1200px] mx-auto px-[22px]">
          <SectionHeading eyebrow="Events" title="Previous Events" />
          <VideoGallery items={items} searchPlaceholder="Search previous events by title" />
        </div>
      </section>
    </div>
  );
}
