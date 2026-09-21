import { Link } from 'react-router-dom';
import { usePageTitle } from '@/lib/usePageTitle';
import { IMAGES } from '@/data/content';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <section className="py-32 px-[22px] text-center">
      <img src={IMAGES.logo} alt="" className="w-16 h-16 mx-auto mb-4" />
      <p className="eyebrow">404</p>
      <h1 className="text-[clamp(2rem,4vw,3rem)] text-ink-800 mt-2 mb-4">Page not found</h1>
      <p className="text-ink-400 mb-8">This page may have moved. Try the kathas or events listings.</p>
      <div className="flex justify-center gap-3 flex-wrap">
        <Link to="/" className="btn-saffron">Back to Home</Link>
        <Link to="/events" className="btn-outline">Upcoming Events</Link>
      </div>
    </section>
  );
}
