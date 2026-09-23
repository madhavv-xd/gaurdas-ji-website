import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  MapPin,
  ArrowRight,
  BookOpen,
  Music,
  Radio,
  Phone,
  Mail,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Navigation,
  Landmark,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import EventCard from '@/components/EventCard';
import VideoGallery from '@/components/VideoGallery';
import { EkadashiKirtanButton } from '@/components/EkadashiKirtan';
import { usePageTitle } from '@/lib/usePageTitle';
import {
  IMAGES,
  SITE,
  BANK,
  ABOUT,
  CATEGORIES,
  KATHAS,
  VIDEOS,
  BHAJANS,
  PARAMPARA_IMAGES,
  LIVE_KATHA_YT,
  ytWatch,
  mapsDir,
} from '@/data/content';

// stagger delay for [data-reveal] items (read by .reveal in index.css)
const d = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;

const upcoming = KATHAS.filter((k) => k.status === 'upcoming');
const categoryName = (id: number) => CATEGORIES.find((c) => c.id === id)?.name ?? '';
const aboutIntro = (ABOUT.html.match(/<p>[\s\S]*?<\/p>/g) ?? []).slice(0, 4).join('');

const STATS = [
  { value: KATHAS.filter((k) => k.status === 'done').length, label: 'Kathas held' },
  { value: VIDEOS.length, label: 'Katha videos' },
  { value: BHAJANS.length, label: 'Bhajans' },
];

type Slide = {
  image: string;
  tint: string;
  badge?: string;
  eyebrow: string;
  title: string;
  sub: string;
  primary: { label: string; to: string };
  secondary: { label: string; to: string };
};

const SLIDES: Slide[] = [
  {
    image: IMAGES.heroGaurdasji,
    tint: 'rgba(11,30,43,.9),rgba(11,30,43,.55) 46%,rgba(11,30,43,.12)',
    eyebrow: `${SITE.ashram}, Vrindavan`,
    title: SITE.tagline,
    sub: 'Kathas, bhajans and satsang — join Maharaj Ji at an upcoming katha or watch past kathas online.',
    primary: { label: 'All Kathas', to: '/all-kathas' },
    secondary: { label: 'Donate', to: '/donate-us' },
  },
  ...upcoming.slice(0, 1).map((k) => ({
    image: IMAGES.heroKatha,
    tint: 'rgba(46,20,8,.88),rgba(90,45,15,.4) 55%,rgba(50,24,10,.12)',
    badge: `Upcoming · ${k.dates}`,
    eyebrow: 'Upcoming Katha',
    title: categoryName(k.categoryId) || k.name,
    sub: k.location || k.name,
    primary: { label: 'Katha Details', to: `/event-detail/${k.id}` },
    secondary: { label: 'All Events', to: '/events' },
  })),
  {
    image: IMAGES.gaurdasji3,
    tint: 'rgba(48,12,34,.9),rgba(120,40,80,.4) 55%,rgba(48,12,34,.12)',
    eyebrow: 'Bhajan & Kirtan',
    title: 'Listen to Maharaj Ji’s Bhajans',
    sub: `${BHAJANS.length} bhajans and kirtans, plus recordings of every katha day.`,
    primary: { label: 'Listen to Bhajans', to: '/bhajan' },
    secondary: { label: 'Previous Events', to: '/previous-event' },
  },
];

// Counts up once, on first load only; plain number with reduced motion
function CountUp({ to, run }: { to: number; run: boolean }) {
  const [n, setN] = useState(run ? 0 : to);
  useEffect(() => {
    if (!run || matchMedia('(prefers-reduced-motion: reduce)').matches) return setN(to);
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / 1400);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, run]);
  return <>{n}</>;
}

function HeroSlider() {
  const [cur, setCur] = useState(0);
  const [paused, setPaused] = useState(false);
  const firstSlide = useRef(true);
  const swipeX = useRef<number | null>(null);
  const go = (i: number) => setCur((i + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    if (cur !== 0) firstSlide.current = false;
  }, [cur]);

  const s = SLIDES[cur];
  return (
    <section
      aria-roledescription="carousel"
      aria-label="Highlights"
      // auto-advance pauses while the visitor hovers or focuses inside the slider
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(cur + 1);
        if (e.key === 'ArrowLeft') go(cur - 1);
      }}
      onPointerDown={(e) => (swipeX.current = e.clientX)}
      onPointerUp={(e) => {
        if (swipeX.current === null) return;
        const dx = e.clientX - swipeX.current;
        swipeX.current = null;
        if (Math.abs(dx) > 50) go(cur + (dx < 0 ? 1 : -1));
      }}
      className={`relative min-h-[600px] lg:min-h-[660px] flex overflow-hidden bg-ink-900 touch-pan-y select-none ${paused ? 'paused' : ''}`}
    >
      {SLIDES.map((sl, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1100ms] ease-in-out ${i === cur ? 'opacity-100 slide-active' : 'opacity-0'}`}
          aria-hidden={i !== cur}
        >
          <img src={sl.image} alt="" className="slide-img absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(100deg,${sl.tint})` }} />
        </div>
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(9,24,36,.6),transparent_34%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-[22px] py-16 lg:py-24 flex items-center">
        <div key={cur} className="text-white max-w-[660px]" aria-live={paused ? 'polite' : 'off'}>
          {s.badge && (
            <span className="inline-flex items-center gap-2 bg-saffron-500/20 border border-saffron-400/55 text-[#ffd9a8] px-4 py-1.5 rounded-full text-[0.8rem] font-semibold mb-4 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-saffron-400 animate-pulse" />
              {s.badge}
            </span>
          )}
          <p className="eyebrow !text-saffron-400 animate-fade-up" style={{ animationDelay: '.05s' }}>{s.eyebrow}</p>
          <h1
            className="text-[clamp(2.1rem,5vw,4rem)] leading-[1.12] mt-1.5 mb-4 [text-shadow:0_2px_30px_rgba(0,0,0,.4)] text-balance animate-fade-up"
            style={{ animationDelay: '.12s' }}
          >
            {s.title}
          </h1>
          <p className="text-[1.05rem] sm:text-[1.1rem] text-[#eaf1f6] mb-7 max-w-[540px] animate-fade-up" style={{ animationDelay: '.2s' }}>
            {s.sub}
          </p>
          <div className="flex gap-3.5 flex-wrap animate-fade-up" style={{ animationDelay: '.28s' }}>
            <Link to={s.primary.to} className="btn-saffron flex-1 sm:flex-none">
              {s.primary.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to={s.secondary.to} className="btn-ghost flex-1 sm:flex-none">{s.secondary.label}</Link>
          </div>
          <div className="flex gap-2.5 mt-8 flex-wrap animate-fade-up" style={{ animationDelay: '.36s' }}>
            {STATS.map((f) => (
              <div key={f.label} className="glass rounded-[14px] px-[18px] py-3.5 min-w-[120px]">
                <b className="block font-serif-display text-[1.55rem] leading-none text-white tabular-nums">
                  <CountUp to={f.value} run={firstSlide.current} />
                </b>
                <span className="text-[0.64rem] tracking-[0.12em] uppercase text-[#ffd9a8]">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-[18px] left-1/2 -translate-x-1/2 z-20 flex items-center gap-3.5">
        <button onClick={() => go(cur - 1)} aria-label="Previous slide" className="w-10 h-10 rounded-full border border-white/50 bg-[rgba(9,24,36,.42)] backdrop-blur text-white flex items-center justify-center hover:bg-saffron-500 hover:border-transparent active:scale-95 transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === cur}
              className={`relative h-2.5 rounded-full overflow-hidden transition-all duration-300 ${i === cur ? 'w-[40px] bg-white/30' : 'w-2.5 bg-white/40 hover:bg-white/70'}`}
            >
              {/* fills while the slide waits; its end advances the slider (no auto-advance with reduced motion) */}
              {i === cur && (
                <span
                  key={cur}
                  className="dot-progress absolute inset-0 rounded-full bg-saffron-400"
                  onAnimationEnd={() => go(cur + 1)}
                />
              )}
            </button>
          ))}
        </div>
        <button onClick={() => go(cur + 1)} aria-label="Next slide" className="w-10 h-10 rounded-full border border-white/50 bg-[rgba(9,24,36,.42)] backdrop-blur text-white flex items-center justify-center hover:bg-saffron-500 hover:border-transparent active:scale-95 transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

export default function Home() {
  usePageTitle();
  const featured = CATEGORIES.filter((c) => c.featured);

  return (
    <div>
      <HeroSlider />
      <EkadashiKirtanButton />

      {/* QUICK STRIP */}
      <section className="bg-brand text-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Radio, title: 'Live Katha', sub: 'Watch live on YouTube', href: ytWatch(LIVE_KATHA_YT) },
            { icon: BookOpen, title: 'Kathas', sub: 'Watch & listen', to: '/all-kathas' },
            { icon: Music, title: 'Bhajans & Kirtan', sub: `${BHAJANS.length} bhajans`, to: '/bhajan' },
            { icon: Heart, title: 'Donate', sub: 'UPI or bank transfer', to: '/donate-us' },
          ].map(({ icon: Icon, title, sub, to, href }) => {
            const cls =
              'group flex items-center gap-3.5 px-5 py-[22px] border-b sm:border-b-0 lg:border-r last:border-0 border-white/15 hover:bg-white/[.07] transition-colors';
            const inner = (
              <>
                <span className="w-11 h-11 flex-none rounded-xl bg-white/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-[22px] h-[22px]" />
                </span>
                <span>
                  <b className="block font-serif-display text-[1.05rem] font-normal">{title}</b>
                  <small className="opacity-80 text-[0.8rem]">{sub}</small>
                </span>
              </>
            );
            return href ? (
              <a key={title} href={href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
            ) : (
              <Link key={title} to={to!} className={cls}>{inner}</Link>
            );
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-[52px] sm:py-[76px]">
        <div className="max-w-[1200px] mx-auto px-[22px] grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-center">
          <div className="relative max-w-[420px] mx-auto w-full" data-reveal>
            <img src={IMAGES.about[0]} alt="Shri Gaurdas Ji Maharaj" className="rounded-[22px] shadow-lift w-full aspect-[4/5] object-cover object-top" />
            <div className="absolute inset-3.5 border border-gold/50 rounded-[18px] pointer-events-none" />
          </div>
          <div data-reveal style={d(120)}>
            <p className="eyebrow">About Maharaj Ji</p>
            <h2 className="font-sanskrit text-[clamp(1.5rem,2.8vw,2.1rem)] text-ink-800 leading-[1.35] mt-1.5 mb-4">{ABOUT.title}</h2>
            <div className="rich font-sanskrit text-ink-500 text-[1.02rem] mb-6" dangerouslySetInnerHTML={{ __html: aboutIntro }} />
            <div className="flex flex-wrap gap-3">
              <Link to="/about-shri-gaurdasji" className="btn-ink">
                आगे पढ़े <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/about-guru-ji" className="btn-outline">Guru Parampara</Link>
            </div>
          </div>
        </div>
      </section>

      {/* KATHAS — featured categories bento */}
      <section className="py-[52px] sm:py-[76px] bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-[22px]">
          <SectionHeading
            eyebrow="Watch and listen"
            title="Shri Gaurdas Ji Maharaj Kathas"
            description="Every katha series with its dates, venues and recordings of each day."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] lg:auto-rows-[170px] gap-4">
            {featured.map((c, i) => (
              <Link
                key={c.id}
                to={`/katha-details/${c.id}`}
                className={`group relative rounded-[14px] overflow-hidden shadow-soft bg-cream-200 flex items-end hover:-translate-y-1 transition-transform duration-300 ${
                  i === 0 ? 'sm:col-span-2 lg:row-span-2' : i === 3 ? 'sm:col-span-2' : ''
                }`}
              >
                <img src={c.image} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(9,24,36,.9),rgba(9,24,36,.05)_62%)]" />
                <span className="absolute top-3 left-3 z-10 text-white text-[0.68rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-saffron-500">
                  {KATHAS.filter((k) => k.categoryId === c.id).length} kathas
                </span>
                <div className="relative z-10 p-3.5">
                  <b className={`block font-sanskrit font-normal leading-tight text-white ${i === 0 ? 'text-[1.5rem]' : 'text-[1.1rem]'}`}>{c.name}</b>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/all-kathas" className="btn-outline">
              View All Kathas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* GURU PARAMPARA */}
      <section className="py-[52px] sm:py-[76px] bg-ink-900 text-white">
        <div className="max-w-[1200px] mx-auto px-[22px]">
          <SectionHeading eyebrow="Guru Parampara" title="गुरु परम्परा" light />
          <div className="grid md:grid-cols-2 gap-6 max-w-[960px] mx-auto">
            {PARAMPARA_IMAGES.slice(2).map((src, i) => (
              <img key={src} src={src} alt="Guru parampara" loading="lazy" data-reveal style={d(i * 120)} className="w-full rounded-[18px] bg-white p-2 shadow-lift" />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/about-guru-ji" className="btn-saffron">
              विस्तार से पढ़ें <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      {upcoming.length > 0 && (
        <section className="py-[52px] sm:py-[76px]">
          <div className="max-w-[1200px] mx-auto px-[22px]">
            <SectionHeading eyebrow="Events" title="All Upcoming Events" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[18px] justify-center">
              {upcoming.slice(0, 4).map((k, i) => (
                <div key={k.id} data-reveal style={d(i * 90)} className="flex">
                  <EventCard katha={k} />
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/events" className="btn-outline">
                All Events <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* PREVIOUS EVENTS */}
      <section className="py-[52px] sm:py-[76px] bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-[22px]">
          <SectionHeading eyebrow="Events" title="Previous Events" description="Recordings from recent kathas — tap any video to watch." />
          <VideoGallery items={VIDEOS.slice(0, 6).map((v) => ({ id: v.id, title: v.name, yt: v.yt }))} />
          <div className="text-center mt-10">
            <Link to="/previous-event" className="btn-saffron">
              Show All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section className="py-[52px] sm:py-[76px] bg-[linear-gradient(120deg,#e8892b,#f4a733)] text-white">
        <div className="max-w-[1000px] mx-auto px-[22px] grid md:grid-cols-[auto_1fr] gap-10 items-center">
          <img src={IMAGES.qr} alt="Donation QR code" className="w-52 sm:w-60 mx-auto rounded-[18px] bg-white p-3 shadow-lift" data-reveal />
          <div data-reveal style={d(120)}>
            <p className="eyebrow !text-white/90">Support Our Cause</p>
            <h2 className="text-[clamp(1.9rem,3.4vw,2.6rem)] leading-tight mt-1.5 mb-3">Your contribution spreads the message of katha</h2>
            <p className="opacity-95 mb-5">Scan the QR code with any UPI app, or transfer to the trust’s bank account.</p>
            <p className="flex items-start gap-2 text-sm mb-6">
              <Landmark className="w-4 h-4 mt-0.5 flex-none" />
              <span>{BANK.name} · A/c {BANK.account} · IFSC {BANK.ifsc}</span>
            </p>
            <Link to="/donate-us" className="btn-ink">
              <Heart className="w-4 h-4" fill="currentColor" /> Donate Details
            </Link>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section className="py-[52px] sm:py-[76px]">
        <div className="max-w-[1200px] mx-auto px-[22px]">
          <SectionHeading eyebrow="Visit" title="Come to the Ashram" description={`${SITE.ashram}, Vrindavan`} />
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10">
            <div className="bg-white rounded-[22px] p-6 sm:p-[34px] shadow-soft" data-reveal>
              <h3 className="text-ink-800 text-[1.7rem] mb-5">{SITE.ashram}</h3>
              {[
                { icon: MapPin, title: 'Address', sub: SITE.address },
                { icon: Phone, title: 'For donations or more info', sub: SITE.phones.join(' · ') },
                { icon: Mail, title: 'Email', sub: SITE.email },
                { icon: MessageCircle, title: 'WhatsApp channel', sub: 'Join for katha updates', href: SITE.whatsappChannel },
              ].map(({ icon: Icon, title, sub, href }) => (
                <div key={title} className="flex gap-3.5 py-[15px] border-b border-ink-800/10 last:border-0">
                  <span className="w-10 h-10 flex-none rounded-[11px] bg-brand-soft flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand" />
                  </span>
                  <span className="min-w-0">
                    <b className="block text-ink-800 text-[0.98rem]">{title}</b>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand text-[0.86rem] underline">{sub}</a>
                    ) : (
                      <small className="text-ink-400 text-[0.86rem] break-words">{sub}</small>
                    )}
                  </span>
                </div>
              ))}
              <a href={mapsDir(SITE.address)} target="_blank" rel="noopener noreferrer" className="btn-saffron mt-5 w-full sm:w-auto">
                <Navigation className="w-4 h-4" /> Get Directions
              </a>
            </div>
            <div className="rounded-[22px] overflow-hidden shadow-soft min-h-[380px]" data-reveal style={d(120)}>
              <iframe
                title="Map to the ashram"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`}
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
