import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { usePageTitle } from '@/lib/usePageTitle';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb?: string;
  // trail between Home and the current page
  crumbs?: { label: string; to: string }[];
  // browser tab title, when it should differ from the heading
  docTitle?: string;
}

export default function PageHero({ title, subtitle, image, breadcrumb, crumbs = [], docTitle }: PageHeroProps) {
  usePageTitle(docTitle ?? title);

  return (
    <section className="relative min-h-[380px] flex items-center overflow-hidden bg-ink-900">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover animate-[heroZoom_9s_ease-out_both]" />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(11,30,43,.9)_0%,rgba(11,30,43,.55)_46%,rgba(11,30,43,.12)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(9,24,36,.6),transparent_34%)]" />
      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-[22px] py-20 text-white">
        <nav aria-label="Breadcrumb" className="mb-4 animate-fade-in">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#ffd9a8]">
            {[{ label: 'Home', to: '/' }, ...crumbs].map((c) => (
              <li key={c.to} className="flex items-center gap-1.5">
                <Link to={c.to} className="hover:text-white">{c.label}</Link>
                <ChevronRight className="w-3 h-3 opacity-70" aria-hidden />
              </li>
            ))}
            <li aria-current="page" className="truncate max-w-[60vw]">{title}</li>
          </ol>
        </nav>
        {breadcrumb && <p className="eyebrow !text-saffron-400 animate-fade-in">{breadcrumb}</p>}
        <h1 className="text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.1] max-w-[660px] text-balance [text-shadow:0_2px_30px_rgba(0,0,0,.4)] animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-[#eaf1f6] max-w-[540px] animate-fade-up" style={{ animationDelay: '0.15s' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
