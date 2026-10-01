// npm test
import { existsSync, readFileSync } from 'node:fs';
import { matches } from './search.ts';

// the Apps Script keeps its own copy for the Bhajans page search; it must agree with this one
// (apps-script/ is gitignored, so it's only checked where the file exists)
const gsFile = new URL('../../apps-script/ekadashi-kirtan.gs', import.meta.url);
const impls: [string, typeof matches][] = [['search.ts', matches]];
if (existsSync(gsFile)) impls.push(['ekadashi-kirtan.gs', new Function(`${readFileSync(gsFile, 'utf8')}\nreturn searchMatches;`)()]);

const cases: [string, string, boolean][] = [
  ['श्री राधा माधव विवाह महोत्सव', 'radha', true],
  ['वृंदावन', 'Brindaban', true],
  ['बाई मीरा के वर गिरधारी', 'meera', true],
  ['Meera Bai Bhajan', 'mira', true],
  ['परम पूज्य श्री गौरदास जी महाराज', 'Gaur Das', true],
  ['कृष्ण गोविंद गोपाल', 'krishna', true],
  ['कृष्ण गोविंद गोपाल', 'gopall', true],
  ['Shrimad Bhagwat Katha', 'भागवत', true],
  ['श्री जन्माष्टमी', 'ashtami', true],
  ['Shri Ram Katha', 'krishna', false],
  ['Shri Ram Katha', '?', false],
];

for (const [text, query, want] of cases)
  for (const [name, fn] of impls)
    if (fn(text, query) !== want) throw new Error(`${name}: matches("${text}", "${query}") should be ${want}`);
console.log(`search: ${cases.length} checks passed (${impls.map(([n]) => n).join(', ')})`);
