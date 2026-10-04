import { Youtube, Facebook, Instagram, Twitter } from 'lucide-react';
import PageHero from '@/components/PageHero';
import DonatePanel from '@/components/DonatePanel';
import { IMAGES, SITE } from '@/data/content';

export default function Donate() {
  return (
    <div>
      <PageHero
        breadcrumb="Donate Us"
        title="Support the Ashram & Naam Prachar Seva"
        subtitle="Your contributions help us in the seva of the ashram and Hari Naam Prachar Seva."
        image={IMAGES.heroGaurdasji}
      />

      <section className="py-10 sm:py-14 bg-cream-50">
        <div className="max-w-[1000px] mx-auto px-[22px]">
          <DonatePanel />
        </div>

        
      </section>
    </div>
  );
}
