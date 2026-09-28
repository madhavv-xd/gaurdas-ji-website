import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function BackToTop() {
  const [show, setShow] = useState(false);
  // on home the Nitai Das banner holds the bottom-right corner, so sit above it
  const home = useLocation().pathname === '/';

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      className={`fixed right-4 ${home ? 'bottom-[232px] sm:bottom-[210px]' : 'bottom-20 sm:bottom-6'} z-[120] w-11 h-11 rounded-full bg-ink-800 text-white shadow-lift flex items-center justify-center hover:bg-saffron-500 transition-all duration-300 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
