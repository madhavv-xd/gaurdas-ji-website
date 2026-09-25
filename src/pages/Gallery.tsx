import { useState } from 'react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Lightbox from '@/components/Lightbox';
import { GALLERY, IMAGES } from '@/data/content';

// Gallery = the CMS photos plus the local portraits supplied with the site assets
const PHOTOS = [...GALLERY, IMAGES.heroGaurdasji, IMAGES.gaurdasji1, IMAGES.gaurdasji3, IMAGES.kathaPortrait, ...IMAGES.about];
// [width, height] of each photo above (same order), so the page reserves its space before it loads; 3:2 if unknown
const SIZES = [...GALLERY.map(() => [3, 2]), [3, 2], [825, 470], [3, 2], [2, 3], [2, 3], [2, 3], [2, 3]];

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      <PageHero
        breadcrumb="Gallery"
        title="Photo Gallery"
        subtitle="Moments from kathas, festivals and satsang with Shri Gaurdas Ji Maharaj."
        image={IMAGES.heroGaurdasji}
      />

      <section className="py-[52px] sm:py-[76px] bg-cream-50">
        <div className="max-w-[1200px] mx-auto px-[22px]">
          <SectionHeading eyebrow="Gallery" title="Photos" />
          <ul className="columns-2 md:columns-3 gap-3 sm:gap-4 [&>li]:mb-3 sm:[&>li]:mb-4">
            {PHOTOS.map((src, i) => (
              <li key={src} className="break-inside-avoid">
                <button onClick={() => setOpen(i)} className="group block w-full rounded-xl overflow-hidden bg-cream-200" aria-label={`Open photo ${i + 1} of ${PHOTOS.length}`}>
                  <img src={src} alt="" width={(SIZES[i] ?? [3, 2])[0]} height={(SIZES[i] ?? [3, 2])[1]} loading="lazy" decoding="async" className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-700" />
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
