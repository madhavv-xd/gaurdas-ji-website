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
  Play,
  Calendar,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CardCarousel, { CardStack, JharokhaCard, PosterCard } from '@/components/CardCarousel';
import GuruVarg from '@/components/GuruVarg';
import { EkadashiDatesButton } from '@/components/EkadashiKirtan';
import HomeBanners from '@/components/HomeBanners';
import { usePageTitle } from '@/lib/usePageTitle';
import { usePlaylists } from '@/lib/usePlaylists';
import {
  IMAGES,
  SITE,
  BANK,
  ABOUT,
  CATEGORIES,
  KATHAS,
  VIDEOS,
  BHAJANS,
  YT_LIVE_URL,
  mapsDir,
} from '@/data/content';

// stagger delay for [data-reveal] items (read by .reveal in index.css)
const d = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;

const upcoming = KATHAS.filter((k) => k.status === 'upcoming');
const categoryName = (id: number) => CATEGORIES.find((c) => c.id === id)?.name ?? '';
const aboutIntro = (ABOUT.html.match(/<p>[\s\S]*?<\/p>/g) ?? []).slice(0, 2).join('');

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
    secondary: { label: 'Watch Kathas', to: '/all-kathas' },
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

// One side of the hero frame: a gold line broken by the label (label only on xl, where the margin fits it)
function FrameSide({ text, className }: { text: string; className: string }) {
  return (
    <div className={`absolute inset-y-0 flex flex-col items-center ${className}`}>
      <span className="flex-1 w-px bg-gold/45" />
      <b className="hidden xl:block py-5 [writing-mode:vertical-rl] text-[0.66rem] font-semibold tracking-[0.35em] uppercase text-[#ffd9a8]/75">
        {text}
      </b>
      <span className="flex-1 w-px bg-gold/45" />
    </div>
  );
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

      {/* gold frame, the ashram's name running down its sides (wide screens), like a framed painting */}
      <div aria-hidden className="pointer-events-none absolute inset-3 sm:inset-5 xl:inset-6 z-10 border-y border-gold/45">
        <FrameSide text={SITE.ashram} className="left-0 -translate-x-1/2 [&>b]:rotate-180" />
        <FrameSide text="Vrindavan" className="right-0 translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-8 sm:px-12 xl:px-[22px] pt-12 pb-24 lg:pt-16 lg:pb-28 flex items-center">
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

      <div className="absolute bottom-7 sm:bottom-9 xl:bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3.5">
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

// Upcoming kathas: the card deck on one side, the schedule on the other. Hovering or focusing a row
// brings its card to the front; the deck's own arrows highlight the matching row.
function UpcomingKathas() {
  const [cur, setCur] = useState(0);
  return (
    // overflow-x-clip: on phones the deck's back cards reach past the screen edge and would widen the page
    <section className="py-10 sm:py-14 overflow-x-clip">
      <div className="max-w-[1200px] mx-auto px-[22px] grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-x-14 items-center">
        <div className="lg:col-start-2">
          <SectionHeading eyebrow="Events" title="All Upcoming Kathas" align="left" />
        </div>
        <div className="lg:col-start-1 lg:row-start-1 lg:row-span-2">
          <CardStack label="Upcoming kathas" cur={cur} onChange={setCur}>
            {upcoming.map((k) => (
              <PosterCard key={k.id} to={`/event-detail/${k.id}`} image={k.images[0] ?? CATEGORIES.find((c) => c.id === k.categoryId)?.image ?? IMAGES.heroKatha} badge="Upcoming">
                {categoryName(k.categoryId) && <p className="font-sanskrit text-saffron-300 text-sm mb-1">{categoryName(k.categoryId)}</p>}
                <b className="block font-serif-display font-normal text-[1.6rem] leading-tight">{k.name}</b>
                <dl className="mt-2.5 space-y-1 text-[0.85rem] text-white/85">
                  {k.dates && (
                    <div className="flex gap-2"><dt className="sr-only">Dates</dt><Calendar className="w-4 h-4 mt-0.5 text-saffron-400 flex-none" aria-hidden /><dd>{k.dates}</dd></div>
                  )}
                  {k.location && (
                    <div className="flex gap-2"><dt className="sr-only">Venue</dt><MapPin className="w-4 h-4 mt-0.5 text-saffron-400 flex-none" aria-hidden /><dd className="line-clamp-2">{k.location}</dd></div>
                  )}
                </dl>
              </PosterCard>
            ))}
          </CardStack>
        </div>
        <div className="lg:col-start-2">
          <ol className="space-y-2">
            {upcoming.map((k, i) => {
              const [day, month] = k.dates.split(' '); // "07 August 2026 - 14 August 2026"
              const on = i === cur;
              return (
                <li key={k.id}>
                  <Link
                    to={`/event-detail/${k.id}`}
                    onMouseEnter={() => setCur(i)}
                    onFocus={() => setCur(i)}
                    className={`flex items-center gap-4 rounded-[16px] p-3 pr-4 transition-colors ${on ? 'bg-white shadow-soft ring-1 ring-gold/30' : 'hover:bg-white/60'}`}
                  >
                    <span
                      className={`flex-none w-14 h-14 rounded-[12px] flex flex-col items-center justify-center leading-none transition-colors ${
                        on ? 'bg-saffron-500 text-white' : 'bg-cream-200 text-ink-800'
                      }`}
                    >
                      {day && month ? (
                        <>
                          <b className="font-serif-display font-normal text-[1.35rem]">{day}</b>
                          <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-wider">{month.slice(0, 3)}</span>
                        </>
                      ) : (
                        <Calendar className="w-5 h-5" aria-hidden />
                      )}
                    </span>
                    <span className="min-w-0 flex-1">
                      <b className="block font-semibold text-ink-800 truncate">{k.name}</b>
                      {k.dates && <span className="block text-[0.82rem] text-saffron-600">{k.dates}</span>}
                      {k.location && <span className="block text-[0.82rem] text-ink-400 truncate">{k.location}</span>}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 flex-none text-saffron-500 transition ${on ? 'opacity-100' : 'opacity-0 -translate-x-1'}`}
                      aria-hidden
                    />
                  </Link>
                </li>
              );
            })}
          </ol>
          <div className="mt-8 text-center lg:text-left">
            <Link to="/events" className="btn-outline">
              All Events <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// The first 6 katha playlists ticked in the sheet (same list as the Kathas page), as a carousel.
// Hidden when nothing is ticked or the sheet can't be reached.
function HomeKathas() {
  const { lists, failed } = usePlaylists();
  if (failed || lists?.length === 0) return null;
  return (
    <section className="py-10 sm:py-14 bg-cream-100">
      <div className="max-w-[1200px] mx-auto px-[22px]">
        <SectionHeading eyebrow="Watch and listen" title="Shri Gaurdas Ji Maharaj Kathas" description="Recordings of Maharaj Ji’s kathas, day by day." />
        {lists ? (
          <CardCarousel label="Kathas">
            {lists.slice(0, 6).map((p) => (
              <JharokhaCard
                key={p.id}
                to={`/katha-playlist/${p.id}`}
                image={p.thumbnail}
                badge={`${p.videos.length} ${p.videos.length === 1 ? 'video' : 'videos'}`}
                transitionName={`pl-${p.id}`}
                center={
                  <span className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-sm ring-1 ring-white/50 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-saffron-500 transition duration-300">
                    <Play className="w-6 h-6 ml-0.5" fill="currentColor" aria-hidden />
                  </span>
                }
              >
                <b className="block mt-1.5 font-sanskrit font-normal text-[1.35rem] sm:text-[1.65rem] leading-tight text-ink-800 line-clamp-2">{p.title}</b>
                <span className="mt-1.5 sm:mt-2.5 inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-saffron-600">
                  Watch the recordings <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden />
                </span>
              </JharokhaCard>
            ))}
          </CardCarousel>
        ) : (
          <p className="text-center text-ink-400 py-10" aria-live="polite">Loading kathas…</p>
        )}
        <div className="text-center mt-10">
          <Link to="/all-kathas" className="btn-outline">
            View All Kathas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  usePageTitle();

  return (
    <div>
      <HeroSlider />
      <HomeBanners />
      <EkadashiDatesButton />
      <Link
        to="/shri-nitai-das-ji-maharaj"
        className="group fixed right-4 bottom-20 sm:bottom-6 z-[110] w-[92px] sm:w-[128px] bg-cream-50 rounded-[16px] p-1.5 shadow-lift ring-1 ring-gold/30 hover:ring-saffron-400 transition"
      >
        <img src={IMAGES.nitaiDas} alt="" className="w-full aspect-square object-cover rounded-[12px]" />
        <span className="block text-center font-serif-display text-ink-800 text-[0.82rem] sm:text-[0.95rem] leading-tight mt-1.5 mb-1 group-hover:text-saffron-600">
          Shri Nitai Das Ji Maharaj
        </span>
      </Link>

      {/* QUICK STRIP */}
      <section className="bg-ink-900 text-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Radio, title: 'Live Katha', sub: 'Watch live on YouTube', href: YT_LIVE_URL },
            { icon: BookOpen, title: 'Kathas', sub: 'Watch & listen', to: '/all-kathas' },
            { icon: Music, title: 'Bhajans & Kirtan', sub: `${BHAJANS.length} bhajans`, to: '/bhajan' },
            { icon: Heart, title: 'Donate', sub: 'UPI or bank transfer', to: '/donate-us' },
          ].map(({ icon: Icon, title, sub, to, href }) => {
            const cls =
              'group flex items-center gap-3.5 px-[22px] py-[22px] border-b sm:border-b-0 lg:border-r last:border-0 border-white/15 hover:bg-white/[.07] transition-colors';
            const inner = (
              <>
                <span className="w-11 h-11 flex-none rounded-xl bg-white/15 flex items-center justify-center">
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
      <section className="py-10 sm:py-14">
        <div className="max-w-[1200px] mx-auto px-[22px] grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
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
                आगे पढ़ें <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GURU PARAMPARA */}
      <section className="py-10 sm:py-14 bg-ink-900 text-white">
        <div className="max-w-[1200px] mx-auto px-[22px]">
          <SectionHeading eyebrow="Guru Parampara" title="गुरु परम्परा" light />
          <div className="max-w-[680px] mx-auto">
            <GuruVarg wide />
          </div>
          <div className="text-center mt-10">
            <Link to="/about-guru-ji" className="btn-saffron">
              विस्तार से पढ़ें <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <HomeKathas />

      {upcoming.length > 0 && <UpcomingKathas />}

      {/* DONATE */}
      <section className="py-10 sm:py-14 bg-[linear-gradient(120deg,#e8892b,#f4a733)] text-white">
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
      <section className="py-10 sm:py-14">
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

      {/* Stay connected band: the WhatsApp channel is how the ashram actually sends updates */}
      <section className="bg-[linear-gradient(120deg,#e8892b,#f4a733)] text-white text-center py-12 px-[22px]">
        <h2 className="text-[clamp(1.8rem,3.2vw,2.5rem)] leading-tight">Stay Connected to the Ashram</h2>
        <p className="opacity-95 max-w-[520px] mx-auto mt-2.5 mb-6">
          Katha schedules and live links from Shri Gaurdas Ji Maharaj, straight to your WhatsApp.
        </p>
        <a href={SITE.whatsappChannel} target="_blank" rel="noopener noreferrer" className="btn-ink">
          <MessageCircle className="w-4 h-4" /> Join WhatsApp Channel
        </a>
      </section>
    </div>
  );
}
