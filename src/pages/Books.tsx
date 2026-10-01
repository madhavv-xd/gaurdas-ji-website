import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { IMAGES, SITE, EKADASHI_SHEET_URL } from '@/data/content';

// from apps-script/ekadashi-kirtan.gs ?view=books
type Book = { id: string; title: string; image: string; description: string; category: string; price: string };

const PHONE = SITE.phones[0];
// wa.me takes the number as digits only, country code first
const WHATSAPP = `https://wa.me/${PHONE.replace(/\D/g, '')}?text=${encodeURIComponent('I want to buy a book: ')}`;

export default function Books() {
  const [books, setBooks] = useState<Book[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch(`${EKADASHI_SHEET_URL}?view=books`)
      .then((r) => r.json())
      .then((d) => {
        // an older deployment answers with the kirtan list instead
        if (!Array.isArray(d.books)) throw new Error('not a book list');
        setBooks(d.books);
      })
      .catch(() => setFailed(true));
  }, []);

  return (
    <div>
      <PageHero
        breadcrumb="Books"
        title="Books"
        subtitle="Books available from Shri Gaur Kripa Dham Ashram."
        image={IMAGES.gaurdasji3}
      />
      <section className="py-10 sm:py-14 bg-cream-50">
        <div className="max-w-[1200px] mx-auto px-[22px]">
          <SectionHeading eyebrow="Books" title="Our Books" />
          <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
            {failed ? (
              <p className="text-center text-ink-400 py-10">Couldn’t load the books. Check your connection and refresh.</p>
            ) : !books ? (
              <p className="text-center text-ink-400 py-10" aria-live="polite">Loading books…</p>
            ) : !books.length ? (
              <p className="text-center text-ink-400 py-10">No books listed yet.</p>
            ) : (
              <ul className="space-y-6">
                {/* Book ID can repeat in the sheet, so key by position */}
                {books.map((b, i) => (
                  // solid offset edge in the border colour gives each card a raised, 3D look
                  <li key={i} className="flex gap-5 sm:gap-7 p-5 sm:p-7 bg-white rounded-[20px] border border-saffron-300 shadow-[6px_6px_0_0_theme(colors.saffron.300)]">
                    {/* natural aspect ratio, so a cover is never cropped; min-h holds a 3:4 space while it loads */}
                    <img src={b.image} alt="" loading="lazy" decoding="async" className="w-20 sm:w-28 h-auto min-h-[107px] sm:min-h-[149px] object-contain self-start flex-none rounded-md bg-cream-100 shadow-soft" />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3 className="text-[1.3rem] leading-snug text-ink-800">{b.title}</h3>
                        {/* a sheet formatted as currency already shows ₹ */}
                        {b.price && <p className="text-[0.95rem] text-saffron-700 tabular-nums">₹{b.price.replace(/^₹\s*/, '')}</p>}
                      </div>
                      {b.category && <p className="mt-0.5 text-sm text-ink-400">{b.category}</p>}
                      {b.description && <p className="mt-3 max-w-[65ch] text-[0.95rem] leading-relaxed text-ink-600">{b.description}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* one way to buy for every book; stays in view beside the list on wide screens */}
            <aside className="lg:sticky lg:top-[calc(var(--hdr,0px)+24px)] transition-[top] duration-300 relative overflow-hidden rounded-[22px] bg-ink-800 p-7 text-white">
              <div className="absolute inset-0 bg-hero-pattern opacity-40" aria-hidden />
              <div className="relative">
                <h2 className="text-[1.6rem] text-white">Buy a book</h2>
                <p className="mt-2 text-cream-200 leading-relaxed">Call or WhatsApp us with the name of the book you want.</p>
                <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="mt-5 inline-flex items-center gap-2.5 tabular-nums hover:text-saffron-400">
                  <Phone className="w-4 h-4 text-saffron-400" aria-hidden /> {PHONE}
                </a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn w-full mt-6 bg-forest-500 text-white hover:bg-forest-600">
                  <MessageCircle className="w-4 h-4" aria-hidden /> WhatsApp to buy
                </a>
                <Link to="/contact-us" className="btn-saffron w-full mt-3">
                  Contact us to buy
                </Link>
                <p className="mt-3 text-center text-sm text-red-300">** delivery charges applicable</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
