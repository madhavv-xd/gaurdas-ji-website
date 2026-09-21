import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Expand } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Lightbox from '@/components/Lightbox';
import { IMAGES, PARAMPARA_IMAGES } from '@/data/content';

export default function GuruParampara() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      <PageHero
        breadcrumb="Disciplic Succession"
        title="Guru Parampara"
        subtitle="The line of spiritual masters in which Shri Gaurdas Ji Maharaj serves."
        image={IMAGES.heroKatha}
      />

      <section className="py-[52px] sm:py-[76px] bg-cream-100">
        <div className="max-w-[1100px] mx-auto px-[22px]">
          <SectionHeading eyebrow="Guru Parampara" title="गुरु परम्परा" />
          <div className="grid md:grid-cols-2 gap-6">
            {PARAMPARA_IMAGES.map((src, i) => (
              <button
                key={src}
                onClick={() => setOpen(i)}
                aria-label={`Open chart ${i + 1} full size`}
                className="group relative block rounded-[18px] bg-white p-3 shadow-soft hover:shadow-lift transition-shadow"
                data-reveal
              >
                <img src={src} alt="" loading="lazy" className="w-full h-full object-contain" />
                <span className="absolute top-5 right-5 w-10 h-10 rounded-full bg-ink-800/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                  <Expand className="w-[18px] h-[18px]" />
                </span>
              </button>
            ))}
          </div>
          <p className="text-center text-sm text-ink-400 mt-6">Tap a chart to view it full size.</p>
          <div className="text-center mt-8">
            <Link to="/about-shri-gaurdasji" className="btn-outline">
              About Maharaj Ji <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      <Lightbox images={PARAMPARA_IMAGES} index={open} onChange={setOpen} />
    </div>
  );
}
