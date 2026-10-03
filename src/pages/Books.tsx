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
          {/* one way to buy for every book, as a slim bar above them */}
          <aside className="relative overflow-hidden rounded-[22px] bg-ink-800 px-6 py-5 sm:px-7 mb-10 text-white">
            <div className="absolute inset-0 bg-hero-pattern opacity-40" aria-hidden />
            <div className="relative flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex-[1_1_320px] min-w-0">
                <h2 className="text-[1.35rem] text-white">Buy a book</h2>
                <p className="mt-1 text-[0.92rem] text-cream-200 leading-relaxed">Call or WhatsApp us with the name of the book you want.</p>
              </div>
              <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="inline-flex items-center gap-2.5 font-semibold tabular-nums hover:text-saffron-400">
                <Phone className="w-4 h-4 text-saffron-400" aria-hidden /> {PHONE}
              </a>
              <div className="grid sm:grid-cols-2 gap-3 w-full sm:w-auto">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn !py-2.5 !text-[0.9rem] bg-forest-500 text-white hover:bg-forest-600">
                  <MessageCircle className="w-4 h-4" aria-hidden /> WhatsApp to buy
                </a>
                <Link to="/contact-us" className="btn-saffron !py-2.5 !text-[0.9rem]">
                  Contact us to buy
                </Link>
              </div>
              <p className="basis-full text-center sm:text-right text-[0.8rem] text-red-300">** delivery charges applicable</p>
            </div>
          </aside>
          {failed ? (
            <p className="text-center text-ink-400 py-10">Couldn’t load the books. Check your connection and refresh.</p>
          ) : !books ? (
            <p className="text-center text-ink-400 py-10" aria-live="polite">Loading books…</p>
          ) : !books.length ? (
            <p className="text-center text-ink-400 py-10">No books listed yet.</p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {/* Book ID can repeat in the sheet, so key by position */}
              {books.map((b, i) => (
                // darshan card: scalloped ivory mat (see .darshan-mat), cover in a gold frame, details below
                <li key={i} className="drop-shadow-[0_14px_20px_rgba(16,43,61,.2)]">
                  <div className="darshan-mat h-full flex flex-col items-center gap-2 bg-[#fffdf8] px-6 pt-7 pb-6 text-center">
                    {/* natural aspect ratio, so a cover is never cropped; min-h holds space while it loads */}
                    <img src={b.image} alt="" loading="lazy" decoding="async" className="w-[64%] h-auto min-h-[180px] mb-4 rounded-sm bg-cream-100 outline outline-1 outline-gold outline-offset-[6px]" />
                    {b.category && <p className="text-[0.64rem] font-bold uppercase tracking-[0.12em] text-saffron-600">{b.category}</p>}
                    <h3 className="font-sanskrit text-[1.3rem] leading-snug text-ink-800 text-balance">{b.title}</h3>
                    {/* some rows repeat the title as the description */}
                    {b.description && b.description.trim() !== b.title.trim() && (
                      <p className="font-sanskrit text-[0.95rem] leading-relaxed text-ink-600">{b.description}</p>
                    )}
                    {/* a sheet formatted as currency already shows ₹ */}
                    {b.price && (
                      <p className="mt-auto pt-2">
                        <span className="inline-block rounded-full border border-gold px-4 py-1.5 font-serif-display text-[1.15rem] text-ink-800 tabular-nums">
                          ₹{b.price.replace(/^₹\s*/, '')}
                        </span>
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
