import { GURUS } from '@/data/content';

// श्री गुरुवर्ग: the six guru portraits, two per row in order (three with `wide`; one per row on phones, so the captions stay readable).
// With onOpen, each portrait opens full size.
export default function GuruVarg({ onOpen, wide }: { onOpen?: (i: number) => void; wide?: boolean }) {
  return (
    <div className="rounded-[18px] bg-white p-4 sm:p-6 shadow-soft" data-reveal>
      <h3 className="font-sanskrit text-center text-[1.4rem] text-ink-800 mb-4">श्री गुरुवर्ग (गुरुजन)</h3>
      <ul className={`grid items-center gap-4 sm:gap-5 ${wide ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
        {GURUS.map((g, i) => {
          const img = <img src={g.image} alt={g.name} loading="lazy" className="w-full h-auto max-w-[260px] mx-auto drop-shadow-md" />;
          return (
            <li key={g.image}>
              {onOpen ? (
                <button onClick={() => onOpen(i)} className="block w-full rounded-xl hover:opacity-90 transition-opacity">
                  {img}
                </button>
              ) : (
                img
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
