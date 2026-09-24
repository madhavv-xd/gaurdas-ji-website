import { useEffect, useState, type ReactNode } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CalendarDays, Loader2, Search, X, ArrowRight } from 'lucide-react';
import Modal from '@/components/Modal';
import { EKADASHI_SHEET_URL } from '@/data/content';
import { PERIODS, periodOf, startMinutes, type Period } from '@/lib/kirtanTime';

// Column names match the sheet's header row.
export const COLUMNS = ['Name', 'Address', 'PhoneNumber', 'City', 'State', 'Country', 'Timings'] as const;
export type Entry = Record<(typeof COLUMNS)[number], string>;
// _row = the entry's row number in the sheet, used by the admin page to edit it.
export type Row = Entry & { _row: number };

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

export const clean = (r: Partial<Record<string, unknown>>): Entry =>
  Object.fromEntries(COLUMNS.map((c) => [c, String(r[c] ?? '').trim()])) as Entry;

export const EKADASHI_PATH = '/ekadashi-kirtan-list';

type EkadashiDate = { date: string; name: string }; // date = 'yyyy-MM-dd'

// Local calendar date as 'yyyy-MM-dd', to compare with the sheet's dates as plain strings.
const ymd = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

// Floating home button: the next Ekadashi dates from the sheet's "Dates" tab.
export function EkadashiDatesButton() {
  const [open, setOpen] = useState(false);
  const [dates, setDates] = useState<EkadashiDate[] | null>(null);
  const [error, setError] = useState('');

  // Fetch only when first opened, so the home page doesn't wait on Apps Script.
  useEffect(() => {
    if (!open || dates) return;
    setError('');
    fetch(`${EKADASHI_SHEET_URL}?view=dates`)
      .then((r) => r.json())
      .then((j) => setDates(j.dates ?? []))
      .catch(() => setError('Could not load the dates. Check your connection and try again.'));
  }, [open, dates]);

  const now = new Date();
  const today = ymd(now);
  const tomorrow = ymd(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1));
  const upcoming = (dates ?? []).filter((d) => d.date >= today).slice(0, 6);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 bottom-20 sm:bottom-6 z-[120] inline-flex items-center gap-2 pl-3 pr-4 py-2.5 rounded-full bg-gradient-warm text-white font-semibold text-[0.9rem] shadow-[0_10px_24px_-10px_rgba(232,137,43,.9)] ring-2 ring-white/70 hover:-translate-y-0.5 transition-transform focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-saffron-300"
      >
        <CalendarDays className="w-5 h-5" aria-hidden />
        Upcoming Ekadashi Dates
      </button>

      <Modal open={open} onClose={() => setOpen(false)} label="Upcoming Ekadashi dates" className="!w-[min(480px,calc(100vw-2rem))]">
        <div className="bg-cream-50 rounded-[22px] shadow-lift overflow-hidden">
          <header className="bg-ink-800 text-white px-6 py-5">
            <h2 className="font-serif-display text-2xl sm:text-3xl">Upcoming Ekadashi Dates</h2>
          </header>
          <div className="px-6 py-5" aria-live="polite">
            {error ? (
              <p className="text-center text-ink-500 py-6">{error}</p>
            ) : !dates ? (
              <p className="flex items-center justify-center gap-2 text-ink-500 py-6">
                <Loader2 className="w-5 h-5 animate-spin text-saffron-500" aria-hidden /> Loading dates…
              </p>
            ) : upcoming.length === 0 ? (
              <p className="text-center text-ink-500 py-6">No upcoming dates have been added yet.</p>
            ) : (
              <ul className="divide-y divide-cream-200">
                {upcoming.map((d) => {
                  const [y, m, day] = d.date.split('-').map(Number);
                  const when = d.date === today ? 'Today' : d.date === tomorrow ? 'Tomorrow' : '';
                  return (
                    <li key={d.date + d.name} className="flex items-center gap-4 py-3">
                      <span className="w-14 shrink-0 text-center rounded-xl bg-white ring-1 ring-gold/25 py-1.5">
                        <span className="block text-xl font-semibold text-brand-deep leading-none">{day}</span>
                        <span className="block text-[0.7rem] uppercase tracking-wide text-ink-400 mt-1">
                          {new Date(y, m - 1, day).toLocaleDateString('en-IN', { month: 'short' })}
                        </span>
                      </span>
                      <span className="min-w-0">
                        <span className="block font-semibold text-ink-800">{d.name || 'Ekadashi'}</span>
                        <span className="block text-sm text-ink-500">
                          {new Date(y, m - 1, day).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric' })}
                          {when && <span className="ml-2 font-semibold text-saffron-600">{when}</span>}
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
            <Link
              to={EKADASHI_PATH}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
            >
              Find an Ekadashi kirtan near you <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
}

export async function fetchKirtans(): Promise<Row[]> {
  const j = await (await fetch(EKADASHI_SHEET_URL)).json();
  return (j.data ?? j).map((r: Record<string, unknown>) => ({ ...clean(r), _row: Number(r._row) }));
}

// POST to the Apps Script; throws with the script's message when it refuses.
export async function postSheet(body: Record<string, unknown>) {
  let j;
  try {
    // text/plain keeps this a "simple" request, so Apps Script needs no CORS preflight.
    const res = await fetch(EKADASHI_SHEET_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(body),
    });
    j = await res.json();
  } catch {
    throw new Error('Could not reach the sheet. Check your connection and try again.');
  }
  if (!j.ok) throw new Error(j.error || 'The sheet did not accept this.');
}

// Case/space-insensitive key, so "India" and "india " filter together.
const norm = (v: string) => v.trim().toLowerCase();
const nice = (v: string) => v.charAt(0).toUpperCase() + v.slice(1);

const SORTS = [
  { id: 'state', label: 'State, then city' },
  { id: 'time', label: 'Start time: earliest first' },
  { id: 'time-desc', label: 'Start time: latest first' },
  { id: 'newest', label: 'Recently added' },
  { id: 'oldest', label: 'First added' },
  { id: 'name', label: 'Name (A–Z)' },
  { id: 'city', label: 'City (A–Z)' },
  { id: 'country', label: 'Country (A–Z)' },
] as const;

const byText = (k: keyof Entry) => (a: Row, b: Row) => a[k].localeCompare(b[k]);
// unreadable timings go last whichever way time is sorted
const byTime = (dir: 1 | -1) => (a: Row, b: Row) => {
  const x = startMinutes(a.Timings);
  const y = startMinutes(b.Timings);
  return x === null ? (y === null ? 0 : 1) : y === null ? -1 : dir * (x - y);
};
const COMPARE: Record<string, (a: Row, b: Row) => number> = {
  state: (a, b) => byText('State')(a, b) || byText('City')(a, b),
  time: byTime(1),
  'time-desc': byTime(-1),
  newest: (a, b) => b._row - a._row, // new entries are appended, so row order = order added
  oldest: (a, b) => a._row - b._row,
  name: byText('Name'),
  city: (a, b) => byText('City')(a, b) || byText('Name')(a, b),
  country: (a, b) => byText('Country')(a, b) || byText('State')(a, b),
};

// Distinct values of `k` in `rows`, with counts, for a filter dropdown.
function options(rows: Row[], k: 'Country' | 'State') {
  const m = new Map<string, { label: string; n: number }>();
  rows.forEach((r) => {
    const key = norm(r[k]);
    if (!key) return;
    const o = m.get(key) ?? { label: nice(r[k].trim()), n: 0 };
    o.n++;
    m.set(key, o);
  });
  return [...m].sort((a, b) => a[1].label.localeCompare(b[1].label));
}

function Select({ label, value, onChange, children }: { label: string; value: string; onChange: (v: string) => void; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wide text-ink-500 mb-1.5">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="field py-2.5 bg-white">
        {children}
      </select>
    </label>
  );
}

const TH = [
  ['Name', 'w-[18%]'],
  ['Address', 'w-[28%]'],
  ['Phone', 'w-[12%]'],
  ['City', 'w-[11%]'],
  ['State', 'w-[11%]'],
  ['Country', 'w-[8%]'],
  ['Timings', 'w-[14%]'],
];

// Search, filters and sort (all kept in the URL), then the rows: one table per state when sorted
// by state, otherwise one table in the chosen order. `action` adds a trailing column (admin's Edit / Delete).
export function KirtanTables({ rows, error, action }: { rows: Row[] | null; error: string; action?: (r: Row) => ReactNode }) {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const country = params.get('country') ?? '';
  const state = params.get('state') ?? '';
  const time = params.get('time') ?? '';
  const sortParam = params.get('sort') ?? '';
  const sort = sortParam in COMPARE ? sortParam : 'state';
  // one setParams call per change: two back-to-back calls would overwrite each other
  const set = (patch: Record<string, string>) =>
    setParams(
      (p) => {
        Object.entries(patch).forEach(([k, v]) => (v ? p.set(k, v) : p.delete(k)));
        return p;
      },
      { replace: true },
    );

  const all = rows ?? [];
  const needle = norm(q);
  const inCountry = all.filter((r) => !country || norm(r.Country) === country);
  const inState = inCountry.filter((r) => !state || norm(r.State) === state);
  const periodCount = (id: Period) => inState.filter((r) => periodOf(startMinutes(r.Timings)) === id).length;
  const shown = inState
    .filter((r) => !time || periodOf(startMinutes(r.Timings)) === time)
    .filter((r) => !needle || [r.Name, r.Address, r.City, r.State, r.Country].some((v) => v.toLowerCase().includes(needle)))
    .sort(COMPARE[sort]);
  const filtered = !!(q || country || state || time);

  const grouped = sort === 'state';
  const groups: [string, Row[]][] = grouped
    ? Object.entries(
        shown.reduce<Record<string, Row[]>>((acc, r) => {
          (acc[nice(r.State.trim()) || 'Other'] ??= []).push(r);
          return acc;
        }, {}),
      )
    : [['', shown]];
  // the State column is redundant under a state heading
  const cols = grouped ? TH.filter(([h]) => h !== 'State') : TH;

  return (
    <div>
      <div className="mb-8 p-4 sm:p-5 rounded-xl bg-white ring-1 ring-gold/25 space-y-4">
        <label className="relative block">
          <span className="sr-only">Search by name, address, city or state</span>
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-saffron-500" aria-hidden />
          <input value={q} onChange={(e) => set({ q: e.target.value })} placeholder="Search by name, address, city or state" className="field pl-10 py-2.5" />
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Select label="Country" value={country} onChange={(v) => set({ country: v, state: '' })}>
            <option value="">All countries ({all.length})</option>
            {options(all, 'Country').map(([k, o]) => (
              <option key={k} value={k}>{o.label} ({o.n})</option>
            ))}
          </Select>
          <Select label="State" value={state} onChange={(v) => set({ state: v })}>
            <option value="">All states ({inCountry.length})</option>
            {options(inCountry, 'State').map(([k, o]) => (
              <option key={k} value={k}>{o.label} ({o.n})</option>
            ))}
          </Select>
          <Select label="Time of day" value={time} onChange={(v) => set({ time: v })}>
            <option value="">Any time ({inState.length})</option>
            {PERIODS.map((p) => (
              <option key={p.id} value={p.id}>{p.label} ({periodCount(p.id)})</option>
            ))}
          </Select>
          <Select label="Sort by" value={sort} onChange={(v) => set({ sort: v === 'state' ? '' : v })}>
            {SORTS.map((o) => (
              <option key={o.id} value={o.id}>{o.label}</option>
            ))}
          </Select>
        </div>
        {rows && (
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-500" aria-live="polite">
            Showing {shown.length} of {all.length} kirtans
            {filtered && (
              <button onClick={() => set({ q: '', country: '', state: '', time: '' })} className="inline-flex items-center gap-1 font-semibold text-brand hover:underline">
                <X className="w-3.5 h-3.5" aria-hidden /> Clear filters
              </button>
            )}
          </p>
        )}
      </div>

      <div className="space-y-8">
        {error ? (
          <p className="text-center text-ink-500 py-8">{error}</p>
        ) : !rows ? (
          <p className="flex items-center justify-center gap-2 text-ink-500 py-8">
            <Loader2 className="w-5 h-5 animate-spin text-saffron-500" aria-hidden /> Loading the list…
          </p>
        ) : shown.length === 0 ? (
          <p className="text-center text-ink-500 py-8">{filtered ? 'No kirtans match these filters.' : 'No kirtans listed yet.'}</p>
        ) : (
          groups.map(([heading, list]) => (
            <section key={heading}>
              {heading && (
                <h3 className="font-serif-display text-2xl text-brand-deep mb-3">
                  {heading} <span className="text-sm font-sans text-ink-400">({list.length})</span>
                </h3>
              )}
              <div className="overflow-x-auto rounded-xl ring-1 ring-gold/25 bg-white">
                {/* fixed layout + shared widths so every state's table lines up */}
                <table className="w-full min-w-[820px] table-fixed text-sm text-left">
                  <thead className="bg-saffron-50 text-ink-700">
                    <tr>
                      {cols.map(([h, w]) => (
                        <th key={h} scope="col" className={`px-3 py-2 font-semibold ${w}`}>{h}</th>
                      ))}
                      {action && <th scope="col" className="px-3 py-2 w-[150px]"><span className="sr-only">Actions</span></th>}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-cream-200 text-ink-600">
                    {list.map((r, i) => (
                      // _row is missing until the Apps Script is redeployed with row numbers
                      <tr key={r._row || i}>
                        <td className="px-3 py-2 font-medium text-ink-800">{r.Name}</td>
                        <td className="px-3 py-2">{r.Address}</td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          {r.PhoneNumber && <a href={`tel:${r.PhoneNumber.replace(/\s/g, '')}`} className="text-brand hover:underline">{r.PhoneNumber}</a>}
                        </td>
                        <td className="px-3 py-2">{r.City}</td>
                        {!grouped && <td className="px-3 py-2">{r.State}</td>}
                        <td className="px-3 py-2">{r.Country}</td>
                        <td className="px-3 py-2">{r.Timings}</td>
                        {action && <td className="px-3 py-2">{action(r)}</td>}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))
        )}
      </div>
    </div>
  );
}

// State and Country are dropdowns in the sheet, so suggest the values it already uses.
const SUGGEST = ['State', 'Country'] as const;

// Inputs for one entry; `initial` pre-fills them when editing.
export function EntryFields({ rows, initial }: { rows: Entry[]; initial?: Entry }) {
  return (
    <>
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
              defaultValue={initial?.[c]}
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
    </>
  );
}
