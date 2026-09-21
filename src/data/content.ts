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
import parampara1 from '@/assets/Image1.jpeg';
import parampara2 from '@/assets/Image2.jpeg';
import parampara3 from '@/assets/Image3.jpeg';
import parampara4 from '@/assets/Image4.jpeg';
import parampara5 from '@/assets/Image5.jpeg';

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

// Guru parampara charts, in the order the live site shows them (Image5, Image4, Image1, Image3); Image2 is the teaser art
export const PARAMPARA_IMAGES = [parampara5, parampara4, parampara1, parampara3];
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
  { label: 'Contact Us', path: '/contact-us' },
];

export const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const ytEmbed = (id: string) => `https://www.youtube.com/embed/${id}?autoplay=1`;
export const ytWatch = (id: string) => `https://www.youtube.com/watch?v=${id}`;
export const mapsDir = (place: string) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place)}`;
