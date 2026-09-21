import { useEffect, useRef } from 'react';
import { Search } from 'lucide-react';

interface SearchFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  count?: number;
  noun?: string;
  // datalist suggestions
  suggestions?: string[];
}

export default function SearchField({ label, value, onChange, count, noun = 'results', suggestions }: SearchFieldProps) {
  const listId = suggestions ? `s-${label.replace(/\W/g, '')}` : undefined;
  const input = useRef<HTMLInputElement>(null);

  // "/" jumps to search, as on most content sites
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (e.key !== '/' || t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
      e.preventDefault();
      input.current?.focus();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="max-w-md mx-auto mb-10">
      <label className="relative block">
        <span className="sr-only">{label}</span>
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-saffron-500 pointer-events-none" />
        <input
          ref={input}
          type="search"
          value={value}
          list={listId}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === 'Escape' && onChange('')}
          placeholder={label}
          className="peer w-full rounded-full pl-11 pr-12 py-3 bg-white border border-ink-800/15 text-ink-800 placeholder:text-ink-400 shadow-[0_6px_18px_-14px_rgba(16,43,61,.5)] focus:outline-none focus:border-saffron-400 focus:ring-4 focus:ring-saffron-400/15 transition-shadow"
        />
        {!value && (
          <kbd className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 items-center justify-center rounded-md border border-ink-800/15 bg-cream-50 text-[0.7rem] font-sans text-ink-400 pointer-events-none peer-focus:opacity-0 transition-opacity">
            /
          </kbd>
        )}
        {suggestions && (
          <datalist id={listId}>
            {suggestions.slice(0, 50).map((s) => (
              <option key={s} value={s} />
            ))}
          </datalist>
        )}
      </label>
      {count !== undefined && (
        <p className="text-center text-xs text-ink-400 mt-2" aria-live="polite">
          {value ? `${count} ${noun} for “${value}”` : `${count} ${noun}`}
        </p>
      )}
    </div>
  );
}
