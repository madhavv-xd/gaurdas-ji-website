import { useState, type FormEvent } from 'react';
import { Plus, Pencil, Trash2, Loader2, X } from 'lucide-react';
import { usePageTitle } from '@/lib/usePageTitle';
import { SEVA_HISAB_URL } from '@/data/content';

// Admin-only view of the Seva Hisab sheet (apps-script/seva-hisab.gs). Not linked from the site.

type Creds = { id: string; password: string };
type Row = Record<string, string | number> & { _row: number };
type Data = { expenses: Row[]; donations: Row[]; previousPending: number };
type Kind = 'expense' | 'donation';

// [sheet column (spaces removed), label, input type]
const FIELDS: Record<Kind, [string, string, string][]> = {
  expense: [
    ['Date', 'Date', 'date'],
    ['Thali', 'Thali', 'number'],
    ['Amount', 'Amount (₹)', 'number'],
    ['Disposable', 'Disposable (₹)', 'number'],
    ['Chach', 'Chach (₹)', 'number'],
    ['Persons', 'Persons', 'number'],
  ],
  donation: [
    ['Date', 'Date', 'date'],
    ['DonorName', 'Donor name', 'text'],
    ['Amount', 'Amount (₹)', 'number'],
    ['Mode', 'Mode', 'text'],
    ['Note', 'Note', 'text'],
  ],
};
const REQUIRED = new Set(['Date', 'DonorName']);
const MONEY = new Set(['Amount', 'Disposable', 'Chach', 'Total']);

// same formula as the Apps Script, so the page doesn't depend on the sheet's Total cells
const expenseTotal = (r: Record<string, unknown>) => ['Amount', 'Disposable', 'Chach'].reduce((s, k) => s + (Number(r[k]) || 0), 0);
const sum = (rows: Row[], f: (r: Row) => number) => rows.reduce((s, r) => s + f(r), 0);
const inr = (n: number) => `₹${n.toLocaleString('en-IN')}`;
const showDate = (d: unknown) => (/^\d{4}-\d{2}-\d{2}$/.test(String(d)) ? String(d).split('-').reverse().join('/') : String(d ?? ''));

// POST to the Apps Script; returns its reply, throws with its message when it refuses.
async function post(body: Record<string, unknown>) {
  let j;
  try {
    // text/plain keeps this a "simple" request, so Apps Script needs no CORS preflight.
    const res = await fetch(SEVA_HISAB_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(body) });
    j = await res.json();
  } catch {
    throw new Error('Could not reach the sheet. Check your connection and try again.');
  }
  if (!j.ok) throw new Error(j.error || 'The sheet did not accept this.');
  return j as Data;
}

export default function SevaHisab() {
  usePageTitle('Seva Hisab');
  // Kept in memory only: a reload logs the admin out.
  const [creds, setCreds] = useState<Creds | null>(null);
  const [data, setData] = useState<Data | null>(null);

  return (
    <section className="py-[52px] sm:py-[76px] bg-cream-50 min-h-[70vh]">
      <div className="max-w-[1200px] mx-auto px-[22px]">
        <h1 className="font-serif-display text-[clamp(2rem,4vw,3rem)] text-ink-800 mb-6">Seva Hisab</h1>
        {creds && data ? (
          <Dashboard creds={creds} data={data} setData={setData} />
        ) : (
          <Login
            onLogin={(c, d) => {
              setCreds(c);
              setData(d);
            }}
          />
        )}
      </div>
    </section>
  );
}

function Login({ onLogin }: { onLogin: (c: Creds, d: Data) => void }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const c = { id: String(f.get('id')), password: String(f.get('password')) };
    setBusy(true);
    setError('');
    try {
      onLogin(c, await post({ action: 'list', ...c }));
    } catch (err) {
      setError((err as Error).message);
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="max-w-[420px] p-6 rounded-xl bg-white ring-1 ring-gold/25 space-y-4">
      <p className="text-sm text-ink-500">Log in with the id and password given by the ashram.</p>
      <label className="block">
        <span className="block text-sm font-semibold text-ink-700 mb-1.5">Id</span>
        <input name="id" required autoComplete="username" className="field" />
      </label>
      <label className="block">
        <span className="block text-sm font-semibold text-ink-700 mb-1.5">Password</span>
        <input name="password" type="password" required autoComplete="current-password" className="field" />
      </label>
      {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
      <button type="submit" disabled={busy} className="btn-saffron w-full disabled:opacity-60">
        {busy && <Loader2 className="w-4 h-4 animate-spin" aria-hidden />}
        {busy ? 'Checking…' : 'Log in'}
      </button>
    </form>
  );
}

function Dashboard({ creds, data, setData }: { creds: Creds; data: Data; setData: (d: Data) => void }) {
  const [kind, setKind] = useState<Kind>('expense');
  // 'new' = adding, a Row = editing that row
  const [editing, setEditing] = useState<Row | 'new' | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');

  // every write returns the fresh sheet, so there's no separate reload
  async function run(body: Record<string, unknown>, done: string) {
    setBusy(true);
    setError('');
    setStatus('');
    try {
      setData(await post({ ...body, ...creds }));
      setEditing(null);
      setStatus(done);
      return true;
    } catch (err) {
      setError((err as Error).message);
      return false;
    } finally {
      setBusy(false);
    }
  }

  const totalDonation = sum(data.donations, (r) => Number(r.Amount) || 0);
  const totalExpense = sum(data.expenses, expenseTotal);
  const balance = totalDonation - totalExpense - data.previousPending;
  const rows = [...(kind === 'expense' ? data.expenses : data.donations)].sort(
    (a, b) => String(b.Date).localeCompare(String(a.Date)) || b._row - a._row,
  );
  const cols: [string, string][] = [...FIELDS[kind].map(([k, l]) => [k, l.replace(' (₹)', '')] as [string, string]), ...(kind === 'expense' ? [['Total', 'Total'] as [string, string]] : [])];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <Stat label="Total donation" value={inr(totalDonation)} sub={`${data.donations.length} entries`} />
        <Stat label="Total expense" value={inr(totalExpense)} sub={`${data.expenses.length} days`} />
        <PendingStat value={data.previousPending} busy={busy} onSave={(v) => run({ action: 'setPending', value: v }, 'Previous pending balance saved.')} />
        <Stat
          label={balance < 0 ? 'Pending payment' : 'Amount in hand'}
          value={inr(Math.abs(balance))}
          sub="Donation − expense − previous pending"
          tone={balance < 0 ? 'text-red-700' : 'text-forest-600'}
        />
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div role="tablist" className="inline-flex rounded-full bg-white ring-1 ring-gold/25 p-1">
            {(['expense', 'donation'] as Kind[]).map((k) => (
              <button
                key={k}
                role="tab"
                aria-selected={kind === k}
                onClick={() => {
                  setKind(k);
                  setEditing(null);
                  setError('');
                }}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${kind === k ? 'bg-saffron-500 text-white' : 'text-ink-600 hover:text-ink-800'}`}
              >
                {k === 'expense' ? 'Expenses' : 'Donations'}
              </button>
            ))}
          </div>
          <button onClick={() => setEditing('new')} className="btn-saffron !py-2.5">
            <Plus className="w-4 h-4" aria-hidden /> Add {kind}
          </button>
        </div>

        {status && <p role="status" className="mb-4 text-sm text-forest-600">{status}</p>}
        {error && <p role="alert" className="mb-4 text-sm text-red-700">{error}</p>}

        {editing && (
          <EntryForm
            key={editing === 'new' ? `new-${kind}` : `${kind}-${editing._row}`}
            kind={kind}
            row={editing === 'new' ? undefined : editing}
            busy={busy}
            onCancel={() => setEditing(null)}
            onSave={(entry) =>
              run(
                editing === 'new'
                  ? { action: 'add', kind, entry }
                  : { action: 'update', kind, row: editing._row, original: editing, entry },
                editing === 'new' ? `${kind === 'expense' ? 'Expense' : 'Donation'} added.` : `Sheet row ${editing._row} updated.`,
              )
            }
          />
        )}

        <div className="overflow-x-auto rounded-xl ring-1 ring-gold/25 bg-white">
          <table className="w-full min-w-[720px] text-sm text-left">
            <thead className="bg-saffron-50 text-ink-700">
              <tr>
                {cols.map(([k, l]) => (
                  <th key={k} scope="col" className={`px-3 py-2 font-semibold ${MONEY.has(k) || k === 'Thali' || k === 'Persons' ? 'text-right' : ''}`}>{l}</th>
                ))}
                <th scope="col" className="px-3 py-2 w-[150px]"><span className="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cream-200 text-ink-600">
              {rows.length === 0 && (
                <tr>
                  <td colSpan={cols.length + 1} className="px-3 py-8 text-center text-ink-500">No {kind === 'expense' ? 'expenses' : 'donations'} yet.</td>
                </tr>
              )}
              {rows.map((r) => (
                <tr key={r._row}>
                  {cols.map(([k]) => (
                    <td key={k} className={`px-3 py-2 ${MONEY.has(k) || k === 'Thali' || k === 'Persons' ? 'text-right tabular-nums' : ''} ${k === 'Total' ? 'font-semibold text-ink-800' : ''}`}>
                      {k === 'Date' ? showDate(r.Date) : k === 'Total' ? inr(expenseTotal(r)) : MONEY.has(k) ? inr(Number(r[k]) || 0) : r[k]}
                    </td>
                  ))}
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-3">
                      <button onClick={() => setEditing(r)} disabled={busy} className="inline-flex items-center gap-1 text-brand font-semibold hover:underline disabled:opacity-50">
                        <Pencil className="w-3.5 h-3.5" aria-hidden /> Edit
                      </button>
                      <button
                        onClick={() =>
                          window.confirm(`Delete the ${kind} of ${showDate(r.Date)} (sheet row ${r._row})? This can't be undone.`) &&
                          run({ action: 'delete', kind, row: r._row, original: r }, `Sheet row ${r._row} deleted.`)
                        }
                        disabled={busy}
                        className="inline-flex items-center gap-1 text-red-700 font-semibold hover:underline disabled:opacity-50"
                      >
                        <Trash2 className="w-3.5 h-3.5" aria-hidden /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, sub, tone = 'text-ink-800' }: { label: string; value: string; sub: string; tone?: string }) {
  return (
    <div className="rounded-xl bg-white ring-1 ring-gold/25 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">{label}</p>
      <p className={`font-serif-display text-[1.7rem] leading-tight mt-1 tabular-nums ${tone}`}>{value}</p>
      <p className="text-xs text-ink-400 mt-1">{sub}</p>
    </div>
  );
}

function PendingStat({ value, busy, onSave }: { value: number; busy: boolean; onSave: (v: string) => Promise<boolean> }) {
  const [edit, setEdit] = useState(false);
  if (!edit) {
    return (
      <div className="rounded-xl bg-white ring-1 ring-gold/25 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Previous pending</p>
        <p className="font-serif-display text-[1.7rem] leading-tight mt-1 tabular-nums text-ink-800">{inr(value)}</p>
        <button onClick={() => setEdit(true)} className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline">
          <Pencil className="w-3 h-3" aria-hidden /> Change
        </button>
      </div>
    );
  }
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (await onSave(String(new FormData(e.currentTarget).get('value')))) setEdit(false);
      }}
      className="rounded-xl bg-white ring-1 ring-gold/25 p-4"
    >
      <label className="block text-xs font-semibold uppercase tracking-wide text-ink-500 mb-1.5" htmlFor="pending">Previous pending (₹)</label>
      <input id="pending" name="value" type="number" step="any" required defaultValue={value} className="field py-2" autoFocus />
      <div className="flex gap-3 mt-2">
        <button type="submit" disabled={busy} className="text-sm font-semibold text-brand hover:underline disabled:opacity-50">
          {busy ? 'Saving…' : 'Save'}
        </button>
        <button type="button" onClick={() => setEdit(false)} className="text-sm text-ink-500 hover:underline">Cancel</button>
      </div>
    </form>
  );
}

function EntryForm({ kind, row, busy, onCancel, onSave }: { kind: Kind; row?: Row; busy: boolean; onCancel: () => void; onSave: (entry: Record<string, string>) => void }) {
  const [total, setTotal] = useState(row ? expenseTotal(row) : 0);
  const today = new Date().toLocaleDateString('en-CA'); // yyyy-MM-dd, local time

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>);
      }}
      onInput={(e) => setTotal(expenseTotal(Object.fromEntries(new FormData(e.currentTarget))))}
      className="mb-6 p-5 rounded-xl bg-white ring-1 ring-gold/25"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-serif-display text-2xl text-brand-deep">
          {row ? `Edit sheet row ${row._row}` : kind === 'expense' ? 'Add an expense' : 'Add a donation'}
        </h2>
        <button type="button" onClick={onCancel} aria-label="Close" className="text-ink-400 hover:text-ink-700">
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FIELDS[kind].map(([k, label, type]) => (
          <label key={k} className="block">
            <span className="block text-sm font-semibold text-ink-700 mb-1.5">
              {label} {!REQUIRED.has(k) && !(kind === 'donation' && k === 'Amount') && <span className="font-normal text-ink-400">(optional)</span>}
            </span>
            <input
              name={k}
              type={type}
              required={REQUIRED.has(k) || (kind === 'donation' && k === 'Amount')}
              min={type === 'number' ? 0 : undefined}
              step={type === 'number' ? 'any' : undefined}
              maxLength={type === 'text' ? 300 : undefined}
              defaultValue={row ? String(row[k] ?? '') : k === 'Date' ? today : ''}
              list={k === 'Mode' ? 'seva-modes' : undefined}
              className="field"
            />
          </label>
        ))}
      </div>
      <datalist id="seva-modes">
        {['Cash', 'Online', 'UPI', 'Bank transfer', 'Cheque'].map((m) => <option key={m} value={m} />)}
      </datalist>
      {kind === 'expense' && (
        <p className="mt-4 text-sm text-ink-600">
          Total (Amount + Disposable + Chach): <b className="text-ink-800 tabular-nums">{inr(total)}</b>
        </p>
      )}
      <div className="flex gap-3 mt-5">
        <button type="submit" disabled={busy} className="btn-saffron disabled:opacity-60">
          {busy && <Loader2 className="w-4 h-4 animate-spin" aria-hidden />}
          {busy ? 'Saving…' : row ? 'Save changes' : 'Add'}
        </button>
        <button type="button" onClick={onCancel} className="btn-outline">Cancel</button>
      </div>
    </form>
  );
}
