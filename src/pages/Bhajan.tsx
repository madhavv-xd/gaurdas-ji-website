import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import VideoGallery from '@/components/VideoGallery';
import { BHAJANS, IMAGES } from '@/data/content';

const items = BHAJANS.map((b) => ({ id: b.id, title: b.title, yt: b.yt }));

export default function Bhajan() {
  return (
    <div>
      <PageHero
        breadcrumb="Our Bhajans"
        title="Bhajans & Kirtan"
        subtitle="Bhajans and kirtans sung by Param Pujya Shri Gaurdas Ji Maharaj."
        image={IMAGES.kathaPortrait}
      />
      <section className="py-[52px] sm:py-[76px] bg-cream-50">
        <div className="max-w-[1200px] mx-auto px-[22px]">
          <SectionHeading eyebrow="Our Bhajans" title="Bhajan Listing" />
          <VideoGallery items={items} searchPlaceholder="Search bhajans by title" />
        </div>
      </section>
    </div>
  );
}
