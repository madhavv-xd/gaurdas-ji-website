// Reads the start time out of the sheet's free-text Timings, e.g. "सायं 7 बजे से 9 बजे", "रात्रि 8:30 बजे…", "7:00 PM – 9:00 PM".

export const PERIODS = [
  { id: 'full', label: 'Full day' },
  { id: 'morning', label: 'Morning (before 12 PM)' },
  { id: 'afternoon', label: 'Afternoon (12–4 PM)' },
  { id: 'evening', label: 'Evening (4–8 PM)' },
  { id: 'night', label: 'Night (after 8 PM)' },
] as const;
export type Period = (typeof PERIODS)[number]['id'];

const WORDS: [RegExp, 'am' | 'noon' | 'pm' | 'night'][] = [
  [/सुबह|प्रातः?|morning|\bam\b|a\.m/i, 'am'],
  [/दोपहर|noon|afternoon/i, 'noon'],
  [/सायं|साँय|सांय|शाम|संध्या|evening|\bpm\b|p\.m/i, 'pm'],
  [/रात्रि|रात|night/i, 'night'],
];

// Minutes after midnight the kirtan starts; -1 = full day; null = couldn't read it.
export function startMinutes(timings: string): number | null {
  const t = timings.replace(/[०-९]/g, (d) => String(d.charCodeAt(0) - 0x966)).trim();
  if (/full\s*day|पूरा\s*दिन|पूरे\s*दिन|दिन\s*भर|24\s*(hours|घंटे)/i.test(t)) return -1;
  const m = t.match(/(\d{1,2})(?:\s*[:.]\s*(\d{2}))?/);
  if (!m) return null;
  let h = Number(m[1]);
  const min = Number(m[2] ?? 0);
  if (h > 23 || min > 59) return null;
  // the period word sits before the number ("सायं 7") or right after it ("7 PM")
  const around = t.slice(0, m.index) + ' ' + t.slice(m.index! + m[0].length).split(/\d/)[0];
  const period = WORDS.find(([re]) => re.test(around))?.[1];
  if (h < 12 && period !== 'am') {
    if (period === 'noon') h = h === 11 ? 11 : h + 12;
    else if (period === 'pm' || period === 'night') h += 12;
    // ponytail: no period word → assume 1–7 is PM (kirtans are rarely before 8 AM); add a period word in the sheet if wrong
    else if (h >= 1 && h <= 7) h += 12;
  } else if (h === 12 && (period === 'am' || period === 'night')) h = 24;
  return h * 60 + min;
}

export function periodOf(mins: number | null): Period | null {
  if (mins === null) return null;
  if (mins < 0) return 'full';
  const h = (mins / 60) % 24;
  if (h >= 4 && h < 12) return 'morning';
  if (h >= 12 && h < 16) return 'afternoon';
  if (h >= 16 && h < 20) return 'evening';
  return 'night';
}
