import { useState } from 'react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Lightbox from '@/components/Lightbox';
import { JharokhaCrown } from '@/components/CardCarousel';
import { GALLERY, IMAGES } from '@/data/content';

// Gallery = the CMS photos plus the local portraits supplied with the site assets
// (not IMAGES.kathaPortrait: it is a wide banner strip, which a 3:4 jharokha window would crop to nothing)
const PHOTOS = [...GALLERY, IMAGES.heroGaurdasji, IMAGES.gaurdasji1, IMAGES.gaurdasji3, ...IMAGES.about];

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      <PageHero
        breadcrumb="Gallery"
        title="Photo Gallery"
        subtitle="Moments from kathas, festivals and satsang with Shri Gaurdas Ji Maharaj."
        image={IMAGES.galleryBanner}
      />

      <section className="py-10 sm:py-14 bg-cream-50">
        <div className="max-w-[1200px] mx-auto px-[22px]">
          <SectionHeading eyebrow="Gallery" title="Photos" />
          {/* each photo in a jharokha frame, like the kathas' JharokhaCard */}
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5 sm:gap-x-8 sm:gap-y-10">
            {PHOTOS.map((src, i) => (
              <li key={src}>
                <button
                  onClick={() => setOpen(i)}
                  className="group block w-full rounded-[20px] drop-shadow-[0_16px_24px_rgba(16,43,61,.22)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-saffron-400"
                  aria-label={`Open photo ${i + 1} of ${PHOTOS.length}`}
                >
                  <JharokhaCrown />
                  <div className="bg-white border border-t-0 border-gold rounded-b-[20px] px-2.5 pb-2.5 sm:px-3.5 sm:pb-3.5">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[10px] bg-cream-200">
                      <img src={src} alt="" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Lightbox images={PHOTOS} index={open} onChange={setOpen} />
    </div>
  );
}
