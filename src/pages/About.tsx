import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { ABOUT, IMAGES, PARAMPARA_TEASER } from '@/data/content';

export default function About() {
  return (
    <div>
      <PageHero
        breadcrumb="About Us"
        title="Shri Gaurdas Ji Maharaj"
        subtitle="A brief life introduction of Param Pujya Shri Gaurdas Ji Maharaj."
        image={IMAGES.gaurdasji1}
      />

      <section className="py-[52px] sm:py-[76px]">
        <div className="max-w-[1200px] mx-auto px-[22px] grid lg:grid-cols-[0.75fr_1.25fr] gap-12 items-start">
          <div className="grid grid-cols-2 gap-4 lg:sticky lg:top-28">
            <img src={IMAGES.about[0]} alt="Shri Gaurdas Ji Maharaj" className="col-span-2 rounded-[22px] shadow-lift w-full aspect-[4/5] object-cover object-top" />
            <img src={IMAGES.about[1]} alt="" loading="lazy" className="rounded-[16px] shadow-soft w-full aspect-square object-cover object-top" />
            <img src={IMAGES.kathaPortrait} alt="" loading="lazy" className="rounded-[16px] shadow-soft w-full aspect-square object-cover object-top" />
          </div>
          <article className="max-w-[70ch]">
            <p className="eyebrow">Biography</p>
            <h2 className="font-sanskrit text-[clamp(1.6rem,3vw,2.3rem)] text-ink-800 leading-[1.35] mt-1.5 mb-6">{ABOUT.title}</h2>
            <div className="rich font-sanskrit text-ink-600 text-[1.05rem]" dangerouslySetInnerHTML={{ __html: ABOUT.html }} />
            <figure className="mt-10">
              <img src={PARAMPARA_TEASER} alt="" loading="lazy" className="w-full rounded-[18px] shadow-soft" />
            </figure>
            <Link to="/about-guru-ji" className="btn-ink mt-8">
              गुरु परम्परा <ArrowRight className="w-4 h-4" />
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}
