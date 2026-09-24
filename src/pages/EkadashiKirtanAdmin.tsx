import { useEffect, useState, type FormEvent } from 'react';
import { Plus, Pencil, Trash2, ArrowLeft, Loader2, LogOut } from 'lucide-react';
import { usePageTitle } from '@/lib/usePageTitle';
import { KirtanTables, EntryFields, fetchKirtans, postSheet, clean, type Row } from '@/components/EkadashiKirtan';

type Creds = { id: string; password: string };

export default function EkadashiKirtanAdmin() {
  usePageTitle('Ekadashi Kirtan Admin');
  // Kept in memory only: a reload logs the admin out.
  const [creds, setCreds] = useState<Creds | null>(null);

  return (
    <section className="py-[52px] sm:py-[76px] bg-cream-50 min-h-[70vh]">
      <div className="max-w-[1200px] mx-auto px-[22px]">
        <h1 className="font-serif-display text-[clamp(2rem,4vw,3rem)] text-ink-800 mb-6">Ekadashi Kirtan Admin</h1>
        {creds ? <Editor creds={creds} onLogout={() => setCreds(null)} /> : <Login onLogin={setCreds} />}
      </div>
    </section>
  );
}

function Login({ onLogin }: { onLogin: (c: Creds) => void }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const c = { id: String(f.get('id')), password: String(f.get('password')) };
    setBusy(true);
    setError('');
    try {
      await postSheet({ action: 'login', ...c });
      onLogin(c);
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

function Editor({ creds, onLogout }: { creds: Creds; onLogout: () => void }) {
  const [rows, setRows] = useState<Row[] | null>(null);
  const [error, setError] = useState('');
  // 'new' = adding, a Row = editing that row
  const [editing, setEditing] = useState<Row | 'new' | null>(null);
  const [deleting, setDeleting] = useState<number | null>(null);
  const [actionError, setActionError] = useState('');

  const load = () => {
    setRows(null);
    setError('');
    fetchKirtans()
      .then(setRows)
      .catch(() => setError('Could not load the kirtan list. Check your connection and reload the page.'));
  };
  useEffect(load, []);

  async function remove(r: Row) {
    if (!window.confirm(`Delete “${r.Name}” (${r.City}) from the list? This can't be undone.`)) return;
    setDeleting(r._row);
    setActionError('');
    try {
      await postSheet({ action: 'delete', ...creds, row: r._row, original: clean(r) });
      load();
    } catch (err) {
      setActionError((err as Error).message);
    } finally {
      setDeleting(null);
    }
  }

  if (editing) {
    return (
      <EntryForm
        creds={creds}
        rows={rows ?? []}
        row={editing === 'new' ? undefined : editing}
        onBack={() => setEditing(null)}
        onSaved={() => {
          setEditing(null);
          load();
        }}
      />
    );
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <button onClick={() => setEditing('new')} className="btn-saffron py-2.5">
          <Plus className="w-4 h-4" aria-hidden /> Add kirtan
        </button>
        <button onClick={onLogout} className="btn-outline py-2.5">
          <LogOut className="w-4 h-4" aria-hidden /> Log out
        </button>
      </div>
      {actionError && <p role="alert" className="mb-6 text-sm text-red-700">{actionError}</p>}
      <KirtanTables
        rows={rows}
        error={error}
        action={(r) => (
          <div className="flex items-center gap-3">
            <button onClick={() => setEditing(r)} className="inline-flex items-center gap-1 text-brand font-semibold hover:underline">
              <Pencil className="w-3.5 h-3.5" aria-hidden /> Edit
            </button>
            <button
              onClick={() => remove(r)}
              disabled={deleting !== null}
              className="inline-flex items-center gap-1 text-red-700 font-semibold hover:underline disabled:opacity-50"
            >
              {deleting === r._row ? <Loader2 className="w-3.5 h-3.5 animate-spin" aria-hidden /> : <Trash2 className="w-3.5 h-3.5" aria-hidden />}
              Delete
            </button>
          </div>
        )}
      />
    </>
  );
}

function EntryForm({
  creds,
  rows,
  row,
  onBack,
  onSaved,
}: {
  creds: Creds;
  rows: Row[];
  row?: Row;
  onBack: () => void;
  onSaved: () => void;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const entry = clean(Object.fromEntries(new FormData(e.currentTarget)));
    setBusy(true);
    setError('');
    try {
      await postSheet(
        row
          ? { action: 'update', ...creds, row: row._row, original: clean(row), entry }
          : { action: 'add', ...creds, entry },
      );
      onSaved();
    } catch (err) {
      setError((err as Error).message);
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="max-w-[760px]">
      <button type="button" onClick={onBack} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand mb-4">
        <ArrowLeft className="w-4 h-4" aria-hidden /> Back to list
      </button>
      <h2 className="font-serif-display text-2xl text-brand-deep mb-4">{row ? `Edit “${row.Name}”` : 'Add a kirtan'}</h2>
      <EntryFields rows={rows} initial={row} />
      {error && <p role="alert" className="mt-4 text-sm text-red-700">{error}</p>}
      <button type="submit" disabled={busy} className="btn-saffron mt-5 w-full sm:w-auto disabled:opacity-60">
        {busy && <Loader2 className="w-4 h-4 animate-spin" aria-hidden />}
        {busy ? 'Saving…' : row ? 'Save changes' : 'Add kirtan'}
      </button>
    </form>
  );
}
