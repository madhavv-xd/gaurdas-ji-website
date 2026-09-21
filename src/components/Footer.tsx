import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Youtube, Facebook, Instagram, Twitter, Tv, MessageCircle, Heart } from 'lucide-react';
import { SITE, NAV_LINKS, IMAGES, mapsDir } from '@/data/content';

export default function Footer() {
  return (
    <>
      {/* Stay connected band: the WhatsApp channel is how the ashram actually sends updates */}
      <section className="bg-[linear-gradient(120deg,#e8892b,#f4a733)] text-white text-center py-16 px-[22px]">
        <h2 className="text-[clamp(1.8rem,3.2vw,2.5rem)] leading-tight">Stay Connected to the Ashram</h2>
        <p className="opacity-95 max-w-[520px] mx-auto mt-2.5 mb-6">
          Katha schedules and live links from Shri Gaurdas Ji Maharaj, straight to your WhatsApp.
        </p>
        <a href={SITE.whatsappChannel} target="_blank" rel="noopener noreferrer" className="btn-ink">
          <MessageCircle className="w-4 h-4" /> Join WhatsApp Channel
        </a>
      </section>

      <footer className="bg-ink-900 text-[#b9c8d4] pt-14">
        <div className="max-w-[1200px] mx-auto px-[22px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-9 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={IMAGES.logo} alt="" className="w-12 h-12 object-contain" />
                <p className="font-serif-display text-xl text-white">{SITE.name}</p>
              </div>
              <p className="text-sm opacity-80 leading-relaxed mb-4 max-w-xs">
                Kathas, bhajans and satsang with Param Pujya Shri Gaurdas Ji Maharaj from {SITE.ashram}, Vrindavan.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { href: SITE.social.youtube, label: 'YouTube', Icon: Youtube },
                  { href: SITE.social.facebook, label: 'Facebook', Icon: Facebook },
                  { href: SITE.social.instagram, label: 'Instagram', Icon: Instagram },
                  { href: SITE.social.twitter, label: 'X (Twitter)', Icon: Twitter },
                  { href: SITE.social.dailymotion, label: 'Dailymotion', Icon: Tv },
                  { href: SITE.whatsappChannel, label: 'WhatsApp channel', Icon: MessageCircle },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </div>

            <nav aria-label="Explore">
              <h5 className="text-white text-base mb-3">Explore</h5>
              {NAV_LINKS.slice(0, 4).map((link) => (
                <Link key={link.path} to={link.path} className="block py-1 text-sm opacity-80 hover:opacity-100 hover:text-saffron-400 transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>

            <nav aria-label="Devotion">
              <h5 className="text-white text-base mb-3">Devotion</h5>
              {NAV_LINKS.slice(4).map((link) => (
                <Link key={link.path} to={link.path} className="block py-1 text-sm opacity-80 hover:opacity-100 hover:text-saffron-400 transition-colors">
                  {link.label}
                </Link>
              ))}
              <Link to="/previous-event" className="block py-1 text-sm opacity-80 hover:opacity-100 hover:text-saffron-400 transition-colors">
                Previous Events
              </Link>
              <Link to="/donate-us" className="inline-flex items-center gap-1.5 py-1 text-sm text-saffron-400 hover:text-saffron-300 transition-colors">
                <Heart className="w-3.5 h-3.5" fill="currentColor" /> Donate
              </Link>
            </nav>

            <address className="not-italic text-sm space-y-2.5">
              <h5 className="text-white text-base mb-3">Visit</h5>
              <a href={mapsDir(SITE.address)} target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-saffron-400">
                <MapPin className="w-4 h-4 mt-0.5 text-saffron-400 flex-none" />{SITE.address}
              </a>
              {SITE.phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="flex gap-2 hover:text-saffron-400">
                  <Phone className="w-4 h-4 mt-0.5 text-saffron-400 flex-none" />{phone}
                </a>
              ))}
              <a href={`mailto:${SITE.email}`} className="flex gap-2 hover:text-saffron-400 break-all">
                <Mail className="w-4 h-4 mt-0.5 text-saffron-400 flex-none" />{SITE.email}
              </a>
            </address>
          </div>

          <div className="py-4 text-xs opacity-70 flex flex-col sm:flex-row justify-between gap-2 text-center">
            <p>© {new Date().getFullYear()} Shree GaurdasJi Maharaj Trust. All rights reserved.</p>
            <p>In the service of the lotus feet of the Lord.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
