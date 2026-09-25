import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Heart,
  Phone,
  Mail,
  Youtube,
  Facebook,
  Instagram,
  Twitter,
  Tv,
  Home as HomeIcon,
  BookOpen,
  Calendar,
  Image,
  ChevronDown,
  Music2,
} from 'lucide-react';
import { NAV_LINKS, SITE, IMAGES, LIVE_KATHA_YT, ytWatch } from '@/data/content';
import { EKADASHI_PATH } from '@/components/EkadashiKirtan';

const SOCIALS = [
  { href: SITE.social.youtube, label: 'YouTube', Icon: Youtube },
  { href: SITE.social.facebook, label: 'Facebook', Icon: Facebook },
  { href: SITE.social.instagram, label: 'Instagram', Icon: Instagram },
  { href: SITE.social.twitter, label: 'X (Twitter)', Icon: Twitter },
  { href: SITE.social.dailymotion, label: 'Dailymotion', Icon: Tv },
];

const APP_BAR = [
  { label: 'Home', path: '/', icon: HomeIcon },
  { label: 'Kathas', path: '/all-kathas', icon: BookOpen },
  { label: 'Donate', path: '/donate-us', icon: Heart, mid: true },
  { label: 'Events', path: '/events', icon: Calendar },
  { label: 'Gallery', path: '/photos', icon: Image },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  // slides away while scrolling down, back on the first scroll up
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (Math.abs(y - last) < 8) return; // ignore jitter
      setHidden(y > last && y > 400);
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // --hdr = the space the header covers right now, so other sticky bars can sit just below it
  useEffect(() => {
    document.documentElement.style.setProperty('--hdr', hidden ? '0px' : `${headerRef.current?.offsetHeight ?? 0}px`);
  }, [hidden]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // lock page scroll behind the drawer; Escape closes it
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      {/* Utility bar */}
      <div className="bg-ink-900 text-[#d7e3ec] text-[0.8rem]">
        <div className="max-w-[1200px] mx-auto px-[22px] py-2 flex items-center justify-between gap-4">
          <a
            href={ytWatch(LIVE_KATHA_YT)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-white whitespace-nowrap hover:text-saffron-400"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_0_4px_rgba(239,68,68,.25)] animate-pulse" />
            Live Katha
          </a>
          <div className="flex items-center gap-4">
            <a href={`tel:${SITE.phones[0].replace(/\s/g, '')}`} className="inline-flex items-center gap-1.5 opacity-85 hover:opacity-100 hover:text-white transition-opacity whitespace-nowrap">
              <Phone className="w-3.5 h-3.5" />
              {SITE.phones[0]}
            </a>
            <a href={`mailto:${SITE.email}`} className="hidden lg:inline-flex items-center gap-1.5 opacity-85 hover:opacity-100 hover:text-white transition-opacity">
              <Mail className="w-3.5 h-3.5" />
              {SITE.email}
            </a>
            <div className="hidden sm:flex gap-3">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="opacity-85 hover:opacity-100 hover:text-white">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky nav */}
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 bg-cream-100/95 backdrop-blur-md border-b border-ink-800/10 transition-[transform,box-shadow] duration-300 ease-out focus-within:translate-y-0 ${
          scrolled ? 'shadow-[0_8px_26px_-18px_rgba(16,43,61,.5)]' : ''
        } ${hidden && !mobileOpen ? '-translate-y-full' : ''}`}
      >
        <div className="max-w-[1200px] mx-auto px-[22px] py-2.5 flex items-center justify-between gap-4">
          {/* logo shrinks by transform once scrolled, so the header's height (and the page) doesn't jump */}
          <Link
            to="/"
            className={`flex items-center gap-2 flex-none origin-left transition-transform duration-300 ${scrolled ? 'scale-[.88]' : ''}`}
            aria-label={`${SITE.name}, home`}
          >
            <img src={IMAGES.logo} alt="" width={56} height={56} className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
            <img src={IMAGES.wordmark} alt="" className="h-10 sm:h-12 w-auto object-contain" />
          </Link>

          <nav aria-label="Main" className="hidden xl:flex items-center">
            {NAV_LINKS.map((link) => {
              const item = (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                  className={`relative inline-flex items-center gap-1 px-3 py-2 text-[0.92rem] font-medium rounded-[10px] transition-colors ${
                    isActive(link.path)
                      ? 'text-brand-deep bg-brand-soft'
                      : 'text-ink-600 hover:bg-brand-soft hover:text-brand-deep'
                  }`}
                >
                  {link.label}
                  {link.path === '/events' && <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" aria-hidden />}
                </Link>
              );
              if (link.path !== '/events') return item;
              // Events dropdown: opens on hover and on keyboard focus (Tab from "Events" into the menu).
              // The trigger is a button, not a link, so clicking it keeps you on the current page.
              return (
                <div key={link.path} className="group relative">
                  {/* Safari doesn't focus buttons on click, so focus it ourselves: the menu opens on focus-within */}
                  <button type="button" aria-haspopup="true" onClick={(e) => e.currentTarget.focus()} className={item.props.className}>
                    {item.props.children}
                  </button>
                  <div className="absolute left-0 top-full pt-2 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-[opacity,transform,visibility] duration-200">
                    <div className="min-w-[210px] bg-white rounded-[14px] p-1.5 ring-1 ring-gold/25 shadow-lift">
                      <Link to="/events" className="block px-3 py-2 rounded-[10px] text-[0.9rem] text-ink-600 hover:bg-brand-soft hover:text-brand-deep">
                        Upcoming events
                      </Link>
                      <Link to={EKADASHI_PATH} className="flex items-center gap-2 px-3 py-2 rounded-[10px] text-[0.9rem] text-ink-600 hover:bg-brand-soft hover:text-brand-deep">
                        <Music2 className="w-4 h-4 text-saffron-500" aria-hidden />
                        Ekadashi Kirtan List
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <a href={`tel:${SITE.phones[0].replace(/\s/g, '')}`} className="hidden md:inline-flex btn-outline !py-2.5 !px-5 !text-sm">
              <Phone className="w-4 h-4" />
              Call
            </a>
            <Link to="/donate-us" className="hidden sm:inline-flex btn-saffron !py-2.5 !px-5 !text-sm">
              <Heart className="w-4 h-4" fill="currentColor" />
              Donate
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="xl:hidden p-2 rounded-[10px] text-ink-800 hover:bg-brand-soft"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="scroll-progress absolute inset-x-0 -bottom-px h-0.5 bg-gradient-warm" aria-hidden />
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[200] xl:hidden transition-[opacity,visibility] duration-300 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="absolute inset-0 bg-[rgba(11,30,43,.5)]" onClick={() => setMobileOpen(false)} />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute top-0 right-0 bottom-0 w-[min(82vw,340px)] bg-cream-50 shadow-[-20px_0_50px_-20px_rgba(16,43,61,.5)] flex flex-col transition-transform duration-300 ease-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-[105%]'
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-ink-800/10">
            <img src={IMAGES.wordmark} alt={SITE.name} className="h-10 w-auto" />
            <button onClick={() => setMobileOpen(false)} className="p-2 text-ink-800" aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav aria-label="Main" className="flex-1 overflow-y-auto">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                tabIndex={mobileOpen ? undefined : -1}
                aria-current={isActive(link.path) ? 'page' : undefined}
                style={{ transitionDelay: mobileOpen ? `${80 + i * 35}ms` : '0ms' }}
                className={`block px-5 py-4 border-b border-ink-800/10 text-base transition-[opacity,transform] duration-300 ${
                  mobileOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                } ${isActive(link.path) ? 'text-brand-deep bg-brand-soft font-semibold' : 'text-ink-600'}`}
              >
                {link.label}
              </Link>
            )).flatMap((el, i) =>
              NAV_LINKS[i].path === '/events'
                ? [
                    el,
                    <Link
                      key="ekadashi"
                      to={EKADASHI_PATH}
                      onClick={() => setMobileOpen(false)}
                      tabIndex={mobileOpen ? undefined : -1}
                      className="flex items-center gap-2 pl-9 pr-5 py-3.5 border-b border-ink-800/10 text-[0.95rem] text-ink-600"
                    >
                      <Music2 className="w-4 h-4 text-saffron-500" aria-hidden />
                      Ekadashi Kirtan List
                    </Link>,
                  ]
                : [el],
            )}
          </nav>
          <div className="p-5">
            <Link to="/donate-us" tabIndex={mobileOpen ? undefined : -1} className="btn-saffron w-full mb-3">
              <Heart className="w-4 h-4" fill="currentColor" />
              Donate
            </Link>
            <a href={`tel:${SITE.phones[0].replace(/\s/g, '')}`} tabIndex={mobileOpen ? undefined : -1} className="flex items-center justify-center gap-2 text-ink-800 font-semibold text-sm">
              <Phone className="w-4 h-4" />
              {SITE.phones[0]}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile bottom app bar */}
      <nav aria-label="Quick links" className="sm:hidden fixed bottom-0 inset-x-0 z-[110] bg-cream-100/95 backdrop-blur-md border-t border-ink-800/10 shadow-[0_-6px_22px_-12px_rgba(16,43,61,.4)] grid grid-cols-5">
        {APP_BAR.map(({ label, path, icon: Icon, mid }) =>
          mid ? (
            <Link key={label} to={path} className="flex flex-col items-center -mt-4 pb-2 text-[0.64rem] font-semibold text-saffron-500">
              <span className="relative w-[52px] h-[52px] rounded-full bg-gradient-warm flex items-center justify-center shadow-[0_8px_18px_-6px_rgba(232,137,43,.8)] mb-0.5">
                <span className="absolute -inset-[5px] rounded-full border-2 border-saffron-400/60 animate-[pulseRing_2.8s_ease-out_3]" />
                <Icon className="w-6 h-6 text-white" fill="currentColor" />
              </span>
              {label}
            </Link>
          ) : (
            <Link
              key={label}
              to={path}
              aria-current={isActive(path) ? 'page' : undefined}
              className={`flex flex-col items-center justify-center gap-0.5 py-2 text-[0.64rem] font-semibold ${
                isActive(path) ? 'text-brand-deep' : 'text-ink-400'
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          )
        )}
      </nav>
    </>
  );
}
