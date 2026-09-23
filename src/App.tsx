import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ErrorBoundary from '@/components/ErrorBoundary';
import Home from '@/pages/Home';
import About from '@/pages/About';
import GuruParampara from '@/pages/GuruParampara';
import Kathas from '@/pages/Kathas';
import KathaDetail from '@/pages/KathaDetail';
import Events from '@/pages/Events';
import EventDetail from '@/pages/EventDetail';
import PreviousEvents from '@/pages/PreviousEvents';
import Bhajan from '@/pages/Bhajan';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';
import NitaiDas from '@/pages/NitaiDas';
import Donate from '@/pages/Donate';
import NotFound from '@/pages/NotFound';
import EkadashiKirtan from '@/components/EkadashiKirtan';

// Fades up every section's content container (and anything marked data-reveal) as it scrolls into view.
function ScrollReveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(
      'main section ~ section > [class*="max-w"], [data-reveal]'
    );
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target;
            el.classList.add('in');
            io.unobserve(el);
            // drop the reveal classes once done so they don't override hover transforms
            setTimeout(() => el.classList.remove('reveal', 'in'), 1300);
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => {
      el.classList.add('reveal');
      io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);
  return null;
}

function Shell() {
  const { pathname } = useLocation();
  const firstLoad = useRef(true);
  // new page: jump to top and move keyboard/screen-reader focus to the content (not on first load)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    document.getElementById('main')?.focus({ preventScroll: true });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col pb-16 sm:pb-0">
      <ScrollReveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[300] btn-ink">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        {/* keyed so each page mounts fresh and fades in */}
        <div key={pathname} className="route-in">
          <ErrorBoundary>
            <Routes>
              {/* paths match gaurdasjimaharaj.in */}
              <Route path="/" element={<Home />} />
              <Route path="/about-shri-gaurdasji" element={<About />} />
              <Route path="/about-guru-ji" element={<GuruParampara />} />
              <Route path="/all-kathas" element={<Kathas />} />
              <Route path="/katha-details/:id" element={<KathaDetail />} />
              <Route path="/events" element={<Events />} />
              <Route path="/event-detail/:id" element={<EventDetail />} />
              <Route path="/previous-event" element={<PreviousEvents />} />
              <Route path="/bhajan" element={<Bhajan />} />
              <Route path="/photos" element={<Gallery />} />
              <Route path="/shri-nitai-das-ji-maharaj" element={<NitaiDas />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/donate-us" element={<Donate />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </div>
      </main>
      <Footer />
      <BackToTop />
      <EkadashiKirtan />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}

export default App;
