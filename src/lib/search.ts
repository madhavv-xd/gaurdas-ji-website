// Search that ignores script and spelling: "radha" finds "राधा", "Brindaban" finds "वृंदावन", "meera" finds
// "Mira". Text and query are folded to a rough phonetic key; a missed spelling is fixed by one rule in
// fold(), never per title.

// Devanagari -> Latin. Consonants get no inherent "a" (fold drops every "a" anyway).
const DEVA: Record<string, string> = Object.fromEntries(
  (
    'क:k ख:kh ग:g घ:gh ङ:n च:ch छ:chh ज:j झ:jh ञ:n ट:t ठ:th ड:d ढ:dh ण:n त:t थ:th द:d ध:dh न:n ' +
    'प:p फ:ph ब:b भ:bh म:m य:y र:r ल:l व:v श:sh ष:sh स:s ह:h ' +
    'अ:a आ:a इ:i ई:i उ:u ऊ:u ऋ:ri ए:e ऐ:ai ओ:o औ:au ' +
    'ा:a ि:i ी:i ु:u ू:u ृ:ri े:e ै:ai ो:o ौ:au ं:n ँ:n ः:h ्: ़:'
  )
    .split(' ')
    .map((p) => p.split(':')),
);

const fold = (s: string) =>
  s
    .normalize('NFC')
    .replace(/[ऀ-ॿ]/g, (c) => DEVA[c] ?? c) // unknown chars (danda, digits) kept
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // Kṛṣṇa -> Krsna
    .toLowerCase()
    .replace(/[bw]/g, 'v') // Brindaban = Vrindavan, Bhagwat = भागवत
    .replace(/ee|ii/g, 'i')
    .replace(/oo/g, 'u')
    .replace(/sh/g, 's')
    .replace(/z/g, 'j')
    .replace(/(.)\1+/g, '$1') // doubled letters: chh, Radhaa
    .replace(/a|[\s\p{P}\p{S}]/gu, ''); // a/aa/schwa are spelt every which way; spaces: "Gaur Das" = Gaurdas

// Plain substring first, so nothing the old search found is lost.
export const matches = (text: string, query: string) => {
  const q = query.trim().toLowerCase();
  const f = fold(q);
  return text.toLowerCase().includes(q) || (!!f && fold(text).includes(f));
};
