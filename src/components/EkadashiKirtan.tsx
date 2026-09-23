import { useEffect, useState, type FormEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Music2, Search, Plus, ArrowLeft, Loader2 } from 'lucide-react';
import Modal from '@/components/Modal';
import { EKADASHI_SHEET_URL } from '@/data/content';

// Column names match the sheet's header row.
const COLUMNS = ['Name', 'Address', 'PhoneNumber', 'City', 'State', 'Country', 'Timings'] as const;
type Entry = Record<(typeof COLUMNS)[number], string>;

const LABELS: Record<(typeof COLUMNS)[number], string> = {
  Name: 'Name',
  Address: 'Address',
  PhoneNumber: 'Phone',
  City: 'City',
  State: 'State',
  Country: 'Country',
  Timings: 'Timings',
};
const REQUIRED = new Set(['Name', 'City', 'State', 'Timings']);

const clean = (r: Partial<Record<string, unknown>>): Entry =>
  Object.fromEntries(COLUMNS.map((c) => [c, String(r[c] ?? '').trim()])) as Entry;

// Any link to this hash opens the panel (home floating button, Events menu), on any page.
export const EKADASHI_HASH = '#ekadashi-kirtan';

export function EkadashiKirtanButton() {
  return (
    <Link
      to={{ hash: EKADASHI_HASH }}
      className="fixed left-4 bottom-20 sm:bottom-6 z-[120] inline-flex items-center gap-2 pl-3 pr-4 py-2.5 rounded-full bg-gradient-warm text-white font-semibold text-[0.9rem] shadow-[0_10px_24px_-10px_rgba(232,137,43,.9)] ring-2 ring-white/70 hover:-translate-y-0.5 transition-transform focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-saffron-300"
    >
      <Music2 className="w-5 h-5" aria-hidden />
      Ekadashi Kirtan
    </Link>
  );
}

export default function EkadashiKirtan() {
  const { hash, search } = useLocation();
  const navigate = useNavigate();
  const open = hash === EKADASHI_HASH;
  const close = () => navigate({ search }, { replace: true });
  const [rows, setRows] = useState<Entry[] | null>(null);
  const [error, setError] = useState('');
  const [q, setQ] = useState('');
  const [adding, setAdding] = useState(false);

  // Fetch only when first opened, so the home page doesn't wait on Apps Script.
  useEffect(() => {
    if (!open || rows) return;
    fetch(EKADASHI_SHEET_URL)
      .then((r) => r.json())
      .then((j) => setRows((j.data ?? j).map(clean)))
      .catch(() => setError('Could not load the kirtan list. Check your connection and reopen this panel.'));
  }, [open, rows]);

  const needle = q.trim().toLowerCase();
  const shown = (rows ?? [])
    .filter((r) => !needle || [r.Name, r.City, r.State, r.Country].some((v) => v.toLowerCase().includes(needle)))
    .sort((a, b) => a.State.localeCompare(b.State) || a.City.localeCompare(b.City));
  const byState = shown.reduce<Record<string, Entry[]>>((acc, r) => {
    (acc[r.State || 'Other'] ??= []).push(r);
    return acc;
  }, {});

  return (
      <Modal open={open} onClose={close} label="Ekadashi kirtan list">
        <div className="bg-cream-50 rounded-[22px] shadow-lift overflow-hidden flex flex-col max-h-[calc(100dvh-5rem)]">
          <header className="bg-ink-800 text-white px-5 sm:px-7 py-5">
            <h2 className="font-serif-display text-2xl sm:text-3xl">Ekadashi Kirtan List</h2>
            <p className="text-cream-200 text-sm mt-1">
              {adding ? 'Add the kirtan held at your place on Ekadashi.' : 'Find an Ekadashi kirtan near you.'}
            </p>
          </header>

          {adding ? (
            <AddForm
              rows={rows ?? []}
              onBack={() => setAdding(false)}
              onAdded={(e) => {
                setRows((r) => [...(r ?? []), e]);
                setAdding(false);
              }}
            />
          ) : (
            <>
              <div className="px-5 sm:px-7 py-4 flex flex-col sm:flex-row gap-3 border-b border-cream-200">
                <label className="relative flex-1">
                  <span className="sr-only">Search by name, city or state</span>
                  <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-saffron-500" aria-hidden />
                  <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name, city or state" className="field pl-10 py-2.5" />
                </label>
                <button onClick={() => setAdding(true)} className="btn-saffron py-2.5">
                  <Plus className="w-4 h-4" aria-hidden /> Add your kirtan
                </button>
              </div>

              <div className="overflow-y-auto px-5 sm:px-7 py-5 space-y-6" aria-live="polite">
                {error ? (
                  <p className="text-center text-ink-500 py-8">{error}</p>
                ) : !rows ? (
                  <p className="flex items-center justify-center gap-2 text-ink-500 py-8">
                    <Loader2 className="w-5 h-5 animate-spin text-saffron-500" aria-hidden /> Loading the list…
                  </p>
                ) : shown.length === 0 ? (
                  <p className="text-center text-ink-500 py-8">{needle ? `No kirtans match “${q}”.` : 'No kirtans listed yet. Add the first one.'}</p>
                ) : (
                  Object.entries(byState).map(([state, list]) => (
                    <section key={state}>
                      <h3 className="font-serif-display text-xl text-brand-deep mb-2">
                        {state} <span className="text-sm font-sans text-ink-400">({list.length})</span>
                      </h3>
                      <div className="overflow-x-auto rounded-xl ring-1 ring-gold/25 bg-white">
                        {/* fixed layout + shared widths so every state's table lines up */}
                        <table className="w-full min-w-[760px] table-fixed text-sm text-left">
                          <thead className="bg-saffron-50 text-ink-700">
                            <tr>
                              {[
                                ['Name', 'w-[20%]'],
                                ['Address', 'w-[32%]'],
                                ['Phone', 'w-[12%]'],
                                ['City', 'w-[12%]'],
                                ['Country', 'w-[9%]'],
                                ['Timings', 'w-[15%]'],
                              ].map(([h, w]) => (
                                <th key={h} scope="col" className={`px-3 py-2 font-semibold ${w}`}>{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-cream-200 text-ink-600">
                            {list.map((r, i) => (
                              <tr key={i}>
                                <td className="px-3 py-2 font-medium text-ink-800">{r.Name}</td>
                                <td className="px-3 py-2">{r.Address}</td>
                                <td className="px-3 py-2 whitespace-nowrap">
                                  {r.PhoneNumber && <a href={`tel:${r.PhoneNumber.replace(/\s/g, '')}`} className="text-brand hover:underline">{r.PhoneNumber}</a>}
                                </td>
                                <td className="px-3 py-2">{r.City}</td>
                                <td className="px-3 py-2">{r.Country}</td>
                                <td className="px-3 py-2">{r.Timings}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </section>
                  ))
                )}
              </div>
            </>
          )}
        </div>
      </Modal>
  );
}

// State and Country are dropdowns in the sheet, so suggest the values it already uses.
const SUGGEST = ['State', 'Country'] as const;

function AddForm({ rows, onBack, onAdded }: { rows: Entry[]; onBack: () => void; onAdded: (e: Entry) => void }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const entry = clean(Object.fromEntries(f));
    setBusy(true);
    setError('');
    try {
      // text/plain keeps this a "simple" request, so Apps Script needs no CORS preflight.
      const res = await fetch(EKADASHI_SHEET_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'add', id: f.get('id'), password: f.get('password'), entry }),
      });
      const j = await res.json();
      if (!j.ok) throw new Error(j.error || 'The sheet did not accept this entry.');
      onAdded(entry);
    } catch (err) {
      setError(err instanceof Error && err.message !== 'Failed to fetch' ? err.message : 'Could not reach the sheet. Check your connection and try again.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="overflow-y-auto px-5 sm:px-7 py-5">
      <button type="button" onClick={onBack} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand mb-4">
        <ArrowLeft className="w-4 h-4" aria-hidden /> Back to list
      </button>

      <fieldset className="grid sm:grid-cols-2 gap-4 p-4 rounded-xl bg-white ring-1 ring-gold/25 mb-5">
        <legend className="px-1 text-sm font-semibold text-ink-700">Your login (given by the ashram)</legend>
        <label className="block">
          <span className="block text-sm font-semibold text-ink-700 mb-1.5">Id</span>
          <input name="id" required autoComplete="username" className="field" />
        </label>
        <label className="block">
          <span className="block text-sm font-semibold text-ink-700 mb-1.5">Password</span>
          <input name="password" type="password" required autoComplete="current-password" className="field" />
        </label>
      </fieldset>

      <div className="grid sm:grid-cols-2 gap-4">
        {COLUMNS.map((c) => (
          <label key={c} className={`block ${c === 'Address' ? 'sm:col-span-2' : ''}`}>
            <span className="block text-sm font-semibold text-ink-700 mb-1.5">
              {LABELS[c]} {!REQUIRED.has(c) && <span className="font-normal text-ink-400">(optional)</span>}
            </span>
            <input
              name={c}
              required={REQUIRED.has(c)}
              maxLength={300}
              type={c === 'PhoneNumber' ? 'tel' : 'text'}
              placeholder={c === 'Timings' ? 'e.g. 7:00 PM – 9:00 PM' : undefined}
              list={(SUGGEST as readonly string[]).includes(c) ? `ek-${c}` : undefined}
              className="field"
            />
          </label>
        ))}
      </div>
      {SUGGEST.map((c) => (
        <datalist key={c} id={`ek-${c}`}>
          {[...new Set(rows.map((r) => r[c]).filter(Boolean))].sort().map((v) => <option key={v} value={v} />)}
        </datalist>
      ))}

      {error && <p role="alert" className="mt-4 text-sm text-red-700">{error}</p>}

      <button type="submit" disabled={busy} className="btn-saffron mt-5 w-full sm:w-auto disabled:opacity-60">
        {busy ? <Loader2 className="w-4 h-4 animate-spin" aria-hidden /> : <Plus className="w-4 h-4" aria-hidden />}
        {busy ? 'Adding…' : 'Add kirtan'}
      </button>
    </form>
  );
}
