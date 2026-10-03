import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import SearchField from '@/components/SearchField';
import VideoGallery from '@/components/VideoGallery';
import { IMAGES, EKADASHI_SHEET_URL } from '@/data/content';

const PAGE_SIZE = 15; // = BHAJAN_PAGE in apps-script/ekadashi-kirtan.gs

// from apps-script/ekadashi-kirtan.gs ?view=bhajanList
type BhajanPage = { items: { yt: string; title: string }[]; total: number };

export default function Bhajan() {
  // search and page live in the URL (?q=&page=) so Back, refresh and shared links keep them
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const query = q.trim();
  const page = Math.max(1, Number(params.get('page')) || 1);
  const [data, setData] = useState<(BhajanPage & { key: string }) | null>(null);
  const [failed, setFailed] = useState(false);
  const [retry, setRetry] = useState(0);
  const top = useRef<HTMLDivElement>(null);

  // the API returns one page at a time and does the searching; while typing, wait for a pause
  // so each keystroke isn't a request, and drop replies that arrive after a newer request
  useEffect(() => {
    let stale = false;
    setFailed(false);
    const t = setTimeout(() => {
      fetch(`${EKADASHI_SHEET_URL}?view=bhajanList&page=${page}&q=${encodeURIComponent(query)}`)
        .then((r) => r.json())
        .then((d: BhajanPage) => {
          // an older deployment answers with the kirtan list instead
          if (!Array.isArray(d.items)) throw new Error('not a bhajan page');
          if (!stale) setData({ ...d, key: `${page}|${query}` });
        })
        .catch(() => !stale && setFailed(true));
    }, query ? 350 : 0);
    return () => {
      stale = true;
      clearTimeout(t);
    };
  }, [page, query, retry]);

  const loading = !failed && data?.key !== `${page}|${query}`;
  const pages = data ? Math.ceil(data.total / PAGE_SIZE) : 0;
  // a new search starts again from page 1
  const search = (v: string) => setParams(v ? { q: v } : {}, { replace: true });
  const goPage = (n: number) => {
    setParams({ ...(q ? { q } : {}), ...(n > 1 ? { page: String(n) } : {}) });
    top.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <PageHero
        breadcrumb="Our Bhajans"
        title="Bhajans & Kirtan"
        subtitle="Bhajans and kirtans sung by Param Pujya Shri Gaurdas Ji Maharaj."
        image={IMAGES.bhajanBanner}
      />
      <section className="py-10 sm:py-14 bg-cream-50">
        <div className="max-w-[1200px] mx-auto px-[22px]">
          <SectionHeading eyebrow="Our Bhajans" title="Bhajan Listing" />
          <div ref={top} className="scroll-mt-28">
            <SearchField label="Search bhajans by title" value={q} onChange={search} count={loading ? undefined : data?.total} noun="bhajans" />
          </div>

          {failed ? (
            <div className="text-center py-10">
              <p className="text-ink-400">Couldn’t load the bhajans.</p>
              <button onClick={() => setRetry((n) => n + 1)} className="btn-outline mt-4">Try again</button>
            </div>
          ) : !data || (loading && !data.items.length) ? (
            <p className="text-center text-ink-400 py-10" aria-live="polite">Loading bhajans…</p>
          ) : !data.items.length ? (
            <div className="text-center py-10">
              <p className="text-ink-400">No bhajans found{query && ` for “${query}”`}.</p>
              {query && <button onClick={() => search('')} className="btn-outline mt-4">Clear search</button>}
            </div>
          ) : (
            <div aria-busy={loading} className={`transition-opacity ${loading ? 'opacity-50' : ''}`}>
              <VideoGallery items={data.items.map((b, i) => ({ id: i, ...b }))} pageSize={PAGE_SIZE} />
            </div>
          )}

          {pages > 1 && !failed && (
            <nav aria-label="Bhajan pages" className="mt-10 flex items-center justify-center gap-4">
              <button onClick={() => goPage(page - 1)} disabled={page <= 1} className="btn-outline !px-4 disabled:opacity-40 disabled:pointer-events-none">
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              <span className="text-sm text-ink-600 tabular-nums">
                Page {page} of {pages}
              </span>
              <button onClick={() => goPage(page + 1)} disabled={page >= pages} className="btn-outline !px-4 disabled:opacity-40 disabled:pointer-events-none">
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </nav>
          )}
        </div>
      </section>
    </div>
  );
}
