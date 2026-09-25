import { useEffect, useState } from 'react';
import PageHero from '@/components/PageHero';
import { KirtanTables, fetchKirtans, isHidden, type Row } from '@/components/EkadashiKirtan';
import { IMAGES } from '@/data/content';

export default function EkadashiKirtanList() {
  const [rows, setRows] = useState<Row[] | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchKirtans()
      .then((all) => setRows(all.filter((r) => !isHidden(r))))
      .catch(() => setError('Could not load the kirtan list. Check your connection and reload the page.'));
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
