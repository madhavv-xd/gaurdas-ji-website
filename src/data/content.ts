import logo from '@/assets/logo-160.png';
import wordmark from '@/assets/finalLogo.png';
import qr from '@/assets/scanner.png';
import nitaiDas from '@/assets/nitaidas-ji.jpg';
import heroGaurdasji from '@/assets/hero-gaurdasji.jpg';
import heroKatha from '@/assets/hero-katha.jpg';
import heroKathaBanner from '@/assets/hero-katha-banner.jpg';
import heroBhajanBanner from '@/assets/hero-bhajan-banner.jpg';
import gaurdasji1 from '@/assets/gaurDasji1.jpeg';
import aboutBanner from '@/assets/about-banner.webp';
import bhajanBanner from '@/assets/bhajan-banner.webp';
import kathaBanner from '@/assets/katha-banner.webp';
import paramparaBanner from '@/assets/parampara-banner.webp';
import galleryBanner from '@/assets/gallery-banner.webp';
import eventsBanner from '@/assets/events-banner.webp';
import ekadashiBanner from '@/assets/ekadashi-banner.webp';
import contactBanner from '@/assets/contact-banner.webp';
import gaurdasji3 from '@/assets/gaurDasji3.jpeg';
import kathaPortrait from '@/assets/katha-portrait.webp';
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

import { KATHAS } from './live';
export * from './live';

// Upcoming until the katha's last day is over. The snapshot's status only changes on the next sync,
// so the end date ("07 October 2026 - 13 October 2026") decides too. An unreadable date counts as upcoming.
export const isUpcoming = (k: { status: string; dates: string }) =>
  k.status === 'upcoming' && !(new Date(`${k.dates.split(/\s+-\s+/).pop()} 23:59:59`) < new Date());

// soonest first (the API lists them newest-added first)
const start = (k: { dates: string }) => +new Date(k.dates.split(/\s+-\s+/)[0]);
export const UPCOMING_KATHAS = KATHAS.filter(isUpcoming).sort((a, b) => start(a) - start(b));

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
  nitaiDas,
  heroGaurdasji,
  heroKatha,
  heroKathaBanner,
  heroBhajanBanner,
  gaurdasji1,
  aboutBanner,
  bhajanBanner,
  kathaBanner,
  paramparaBanner,
  galleryBanner,
  eventsBanner,
  ekadashiBanner,
  contactBanner,
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
  { label: 'Bhajans', path: '/bhajan' },
  { label: 'Books', path: '/books' },
  { label: 'Gallery', path: '/photos' },
  { label: 'Contact Us', path: '/contact-us' },
];

export const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const ytEmbed = (id: string) => `https://www.youtube.com/embed/${id}?autoplay=1`;
// YouTube redirects this to whatever is live now, or the next scheduled stream
export const YT_LIVE_URL = 'https://www.youtube.com/channel/UCQwolHStEkxLkDcm1xvLdAw/live';
export const ytWatch = (id: string) => `https://www.youtube.com/watch?v=${id}`;
export const mapsDir = (place: string) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place)}`;

// Web app URL of apps-script/ekadashi-kirtan.gs deployed on the ashram's own Google Sheet (…/exec).
// GET returns the list; POST {action:'login'|'add'|'update'|'delete', id, password, …} is checked against the Users tab.
// POST {action:'contact', name, email, phone, message} (no password) emails the Contact form.
export const EKADASHI_SHEET_URL =
  'https://script.google.com/macros/s/AKfycbxvt4wQJOZhuQ4hi5uMDYEmvpKkALRPfMcJXBGa9x-ij1ewHYFOVq9Tn27mvCiMu5NvGA/exec';

// Web app URL of apps-script/seva-hisab.gs (…/exec). Every call needs an admin id + password.
export const SEVA_HISAB_URL =
  'https://script.google.com/macros/s/AKfycbxwN0szgLW7QFG_IzIoQ4ZOWhgw7i2KnDzlptwy8Ngm2beYIvoXOvKEPDQ4AC4fmY5-/exec';
// "Follow" band on /shri-nitai-das-ji-maharaj
export const NITAI_SOCIAL = [
  { label: 'YouTube', handle: '@nitaidas9756', action: 'Subscribe', href: 'https://www.youtube.com/@nitaidas9756/streams' },
  { label: 'Instagram', handle: '@shrinitaidasji', action: 'Follow', href: 'https://www.instagram.com/shrinitaidasji' },
  { label: 'Facebook', handle: 'Shri Nitai Das Ji', action: 'Follow', href: 'https://www.facebook.com/profile.php?id=61559301771645' },
] as const;

export const NITAI_ABOUT = [
  'श्री निताई दास जी महाराज का जन्म आश्विन कृष्ण अष्टमी, 1 अक्टूबर 2010 को श्री धाम वृंदावन में सेवा कुंज के निकट हुआ। आप परम पूज्य गुरुदेव श्री गौर दास जी महाराज एवं गुरु माँ श्रीमती विष्णु प्रिया दासी जी के सुपुत्र हैं। गर्भकाल में ही गुरु माँ को अनेक दिव्य अनुभूतियाँ हुईं और उन्हें श्री बाँके बिहारी जी के मंदिर के गर्भगृह के मार्जन का सौभाग्य प्राप्त हुआ।',
  'मात्र 3-4 वर्ष की आयु से ही आपका रुझान सत्संग और कथा श्रवण की ओर रहा। 5 वर्ष की आयु में आपने बिना सिखाए स्वयं ही ‘भक्त चरित्र’ कहना प्रारंभ कर दिया। कथा, श्लोक और पद आपको एक बार सुनकर ही कंठस्थ हो जाते थे, और आप हारमोनियम बजाकर सुंदर पदों का गायन भी करने लगे।',
  'वेद, संस्कृत और श्रीमद्भागवत की विधिवत शिक्षा के साथ आप उस महान श्रीमद्भागवत परंपरा से जुड़े हैं, जो गदाधर भट्ट गोस्वामी जी से होते हुए परम पूज्य श्री अच्युत लाल भट्ट जी महाराज तक आई है। उन्हीं की कृपा से आपका तिलक हुआ और आप भागवत आसन पर विराजमान हुए। आपकी प्रथम श्रीमद्भागवत कथा 9 से 15 जनवरी 2026 तक हिंदी भवन, लोहिया नगर, गाज़ियाबाद में आयोजित हुई।',
];
