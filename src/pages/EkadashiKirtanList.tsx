import { useEffect, useRef, useState } from 'react';
import PageHero from '@/components/PageHero';
import { KirtanTables, fetchKirtans, isHidden, type Row } from '@/components/EkadashiKirtan';
import { IMAGES } from '@/data/content';

// Last list this browser saw: shown instantly while Apps Script (often 5–20 s) sends the fresh one.
const CACHE_KEY = 'ekadashi-kirtans-v1';
const readCache = (): Row[] | null => {
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY) ?? 'null');
  } catch {
    return null;
  }
};

export default function EkadashiKirtanList() {
  const [rows, setRows] = useState<Row[] | null>(readCache);
  const [error, setError] = useState('');
  const hadCache = useRef(rows !== null);

  useEffect(() => {
    fetchKirtans()
      .then((all) => {
        const visible = all.filter((r) => !isHidden(r));
        setRows(visible);
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify(visible));
        } catch {
          /* storage blocked or full: the list still shows */
        }
      })
      .catch(() => {
        // with a saved copy on screen, a failed refresh just keeps it
        if (!hadCache.current) setError('Could not load the kirtan list. Check your connection and reload the page.');
      });
  }, []);

  return (
    <div>
      <PageHero
        breadcrumb="Events"
        title="Ekadashi Kirtan List"
        subtitle="Find an Ekadashi kirtan near you."
        image={IMAGES.gaurdasji3}
        crumbs={[{ label: 'Events', to: '/events' }]}
      />

      <section className="py-[52px] sm:py-[76px] bg-cream-50">
        <div className="max-w-[1200px] mx-auto px-[22px]">
          <KirtanTables rows={rows} error={error} />
        </div>
      </section>
    </div>
  );
}
