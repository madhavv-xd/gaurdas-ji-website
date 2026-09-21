import { Youtube, Facebook, Instagram, Twitter } from 'lucide-react';
import PageHero from '@/components/PageHero';
import DonatePanel from '@/components/DonatePanel';
import { IMAGES, SITE } from '@/data/content';

export default function Donate() {
  return (
    <div>
      <PageHero
        breadcrumb="Donate Us"
        title="Support Our Cause"
        subtitle="Your contributions help us in our mission to spread the message of katha. Scan the QR code below to donate securely."
        image={IMAGES.heroGaurdasji}
      />

      <section className="py-[52px] sm:py-[76px] bg-cream-50">
        <div className="max-w-[1000px] mx-auto px-[22px]">
          <DonatePanel />
        </div>

        <div className="text-center mt-14 px-[22px]">
          <p className="font-semibold text-ink-800 mb-4">Share with your friends and family</p>
          <div className="flex justify-center gap-3">
            {[
              { href: SITE.social.facebook, label: 'Facebook', Icon: Facebook },
              { href: SITE.social.twitter, label: 'X (Twitter)', Icon: Twitter },
              { href: SITE.social.instagram, label: 'Instagram', Icon: Instagram },
              { href: SITE.social.youtube, label: 'YouTube', Icon: Youtube },
            ].map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-11 h-11 rounded-full bg-brand text-white hover:bg-saffron-500 flex items-center justify-center transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
