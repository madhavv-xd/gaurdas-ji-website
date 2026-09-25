import logo from '@/assets/logo-160.png';
import wordmark from '@/assets/finalLogo.png';
import qr from '@/assets/scanner.png';
import heroGaurdasji from '@/assets/hero-gaurdasji.jpg';
import heroKatha from '@/assets/hero-katha.jpg';
import gaurdasji1 from '@/assets/gaurDasji1.jpeg';
import gaurdasji3 from '@/assets/gaurDasji3.jpeg';
import kathaPortrait from '@/assets/aboutkathagaurdasji.jpeg';
import about1 from '@/assets/About1.jpeg';
import about2 from '@/assets/About2.jpeg';
import about3 from '@/assets/About3.jpeg';
import parampara2 from '@/assets/Image2.jpeg';
import parampara3 from '@/assets/Image3.jpeg';
import parampara4 from '@/assets/Image4.jpeg';
import parampara5 from '@/assets/Image5.jpeg';
import guru1 from '@/assets/guru1_radharaman_3d.webp';
import guru2 from '@/assets/guru2_navdweep_chandra_das_3d.webp';
import guru3 from '@/assets/guru3_lalitadasi_3d.webp';
import guru4 from '@/assets/guru4_ramdas_babaji_3d.webp';
import guru5 from '@/assets/guru5_gaurangdas_babaji_3d.webp';
import guru6 from '@/assets/guru6_chandrashekhardas_babaji_3d.webp';

export * from './live';

export const SITE = {
  name: 'Shri Gaurdas Ji Maharaj',
  tagline: 'Param Pujya Shri Gaurdas Ji Maharaj',
  ashram: 'Shri Gaur Kripa Dham Ashram',
  email: 'shrigaurdass11@gmail.com',
  phones: ['+91 98375 33244', '+91 99581 63312', '+91 95409 17385'],
  address: 'Shri Gaur Kripa Dham Ashram, Atalla Chungi, Banke Bihari Road near Agrawal satsang bhawan Vrindavan, Mathura - 281121',
  whatsappChannel: 'https://www.whatsapp.com/channel/0029VafO5ny5Ejy34apHuo15',
  social: {
    facebook: 'https://www.facebook.com/GaurdasJi',
    instagram: 'https://www.instagram.com/shrigaurdasjimaharaj',
    twitter: 'https://www.twitter.com/GaurdasJi',
    youtube: 'https://youtube.com/@ShriGaurdasJiMaharaj/',
    dailymotion: 'https://www.dailymotion.com/shrigaurdasjimaharaj',
  },
};

export const BANK = {
  branch: 'PNB Rajpur Vrindavan branch',
  name: 'SHREE NITAI GAUR HARI SANKIRTAN MANDAL TRUST',
  account: '0180002100107440',
  ifsc: 'PUNB0037810',
};

export const IMAGES = {
  logo,
  wordmark,
  qr,
  heroGaurdasji,
  heroKatha,
  gaurdasji1,
  gaurdasji3,
  kathaPortrait,
  about: [about1, about2, about3],
};

// Guru parampara charts, in the live site's order (Image5, Image4, Image3); Image2 is the teaser art.
// The live site's gurus chart (Image1, between the 2nd and 3rd) is replaced by GURUS, shown as its own card there.
export const PARAMPARA_IMAGES = [parampara5, parampara4, parampara3];

// श्री गुरुवर्ग, in order: shown two per row (1–2, 3–4, 5–6). Each image already carries its caption.
export const GURUS = [
  { image: guru1, name: 'परमेष्ठी गुरुदेव श्रीमद् राधारमण चरणदासदेव (बड़े बाबा जी)' },
  { image: guru2, name: 'बड़े बाबाजी के प्रथम शिष्य श्री नवद्वीप चंद्र दास बाबा जी' },
  { image: guru3, name: 'श्रीमती ललितादासी (सखी माँ जी)' },
  { image: guru4, name: 'परात्पर गुरुदेव नामाचार्य श्रीपाद रामदास बाबाजी महाराज' },
  { image: guru5, name: 'परम गुरुदेव रसिकाचार्य श्रीपाद गौरांगदास बाबाजी महाराज' },
  { image: guru6, name: 'सदगुरुदेव श्रीपाद चन्द्रशेखरदास बाबाजी महाराज' },
];
export const PARAMPARA_TEASER = parampara2;

// Paths match gaurdasjimaharaj.in so existing links keep working
export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about-shri-gaurdasji' },
  { label: 'Guru Parampara', path: '/about-guru-ji' },
  { label: 'Kathas', path: '/all-kathas' },
  { label: 'Events', path: '/events' },
  { label: 'Bhajan', path: '/bhajan' },
  { label: 'Gallery', path: '/photos' },
  { label: 'Shri Nitai Das Ji Maharaj', path: '/shri-nitai-das-ji-maharaj' },
  { label: 'Contact Us', path: '/contact-us' },
];

export const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const ytEmbed = (id: string) => `https://www.youtube.com/embed/${id}?autoplay=1`;
export const ytWatch = (id: string) => `https://www.youtube.com/watch?v=${id}`;
export const mapsDir = (place: string) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place)}`;

// Web app URL of apps-script/ekadashi-kirtan.gs deployed on the ashram's own Google Sheet (…/exec).
// GET returns the list; POST {action:'login'|'add'|'update'|'delete', id, password, …} is checked against the Users tab.
export const EKADASHI_SHEET_URL =
  'https://script.google.com/macros/s/AKfycbxvt4wQJOZhuQ4hi5uMDYEmvpKkALRPfMcJXBGa9x-ij1ewHYFOVq9Tn27mvCiMu5NvGA/exec';

// Apps Script web app behind gaurkripadham.netlify.app/ShriNitaiDasJiMaharaj_Playlist; GET returns { kathas, videos }.
export const NITAI_DAS_SHEET_URL =
  'https://script.google.com/macros/s/AKfycbzewZ_kCtIFbmkA5N2-_X2B1uyCgs_f7cn0f1VNLoS0c7f5e9gDnIgzrJ9rl3I_039LFw/exec';
