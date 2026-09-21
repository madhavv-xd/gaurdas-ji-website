import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Heart, Youtube, Facebook, Instagram, MessageCircle, Navigation } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { SITE, IMAGES, mapsDir } from '@/data/content';

type Form = { name: string; email: string; phone: string; message: string };
const EMPTY: Form = { name: '', email: '', phone: '', message: '' };

function validate(f: Form) {
  const e: Partial<Record<keyof Form, string>> = {};
  if (!f.name.trim()) e.name = 'Enter your name.';
  if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Enter an email address like name@example.com.';
  if (!/^[+\d][\d\s-]{6,14}$/.test(f.phone.trim())) e.phone = 'Enter a phone number using digits only.';
  if (f.message.trim().length < 5) e.message = 'Write a short message.';
  return e;
}

export default function Contact() {
  const [form, setForm] = useState<Form>(EMPTY);
  const [errors, setErrors] = useState<ReturnType<typeof validate>>({});
  const [sent, setSent] = useState(false);

  const field = (k: keyof Form) => ({
    id: `c-${k}`,
    value: form[k],
    'aria-invalid': !!errors[k],
    'aria-describedby': errors[k] ? `c-${k}-err` : undefined,
    onChange: (e: { target: { value: string } }) => {
      setForm({ ...form, [k]: e.target.value });
      if (errors[k]) setErrors({ ...errors, [k]: undefined });
    },
  });

  const err = (k: keyof Form) =>
    errors[k] && <p id={`c-${k}-err`} className="mt-1.5 text-sm text-red-700">{errors[k]}</p>;

  // ponytail: no backend in this build; hands off to the visitor's mail app. POST to api.gaurdasjimaharaj.in/api/v1/create to send server-side.
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`c-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    const body = `${form.message}\n\n${form.name}\n${form.email}\n${form.phone}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(`Website message from ${form.name}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div>
      <PageHero
        breadcrumb="Contact to our friendly team"
        title="Contact Us"
        subtitle="We’d love to hear from you. Fill out the form or reach us directly."
        image={IMAGES.gaurdasji1}
      />

      <section className="py-16 lg:py-24 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-cream-200">
                <div className="w-12 h-12 rounded-xl bg-saffron-100 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-saffron-600" />
                </div>
                <h3 className="font-serif-display text-lg text-ink-800 mb-1">Email</h3>
                <p className="text-sm text-ink-500 mb-2">Feel free to email us for your queries</p>
                <a href={`mailto:${SITE.email}`} className="text-sm font-semibold text-saffron-700 hover:text-saffron-800 transition-colors break-all">
                  {SITE.email}
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-cream-200">
                <div className="w-12 h-12 rounded-xl bg-saffron-100 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-saffron-600" />
                </div>
                <h3 className="font-serif-display text-lg text-ink-800 mb-1">Phone</h3>
                <p className="text-sm text-ink-500 mb-2">For donations or more info</p>
                {SITE.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-sm font-semibold text-saffron-700 hover:text-saffron-800 transition-colors">
                    {phone}
                  </a>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-6 border border-cream-200">
                <div className="w-12 h-12 rounded-xl bg-saffron-100 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-saffron-600" />
                </div>
                <h3 className="font-serif-display text-lg text-ink-800 mb-1">Address</h3>
                <p className="text-sm text-ink-500 mb-3">{SITE.address}</p>
                <a href={mapsDir(SITE.address)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-saffron-700 hover:text-saffron-800">
                  <Navigation className="w-4 h-4" /> Get Directions
                </a>
              </div>

              <div className="bg-gradient-warm rounded-2xl p-6 text-white">
                <Heart className="w-8 h-8 mb-3" fill="currentColor" />
                <h3 className="font-serif-display text-lg mb-1">Join our WhatsApp Channel</h3>
                <p className="text-sm text-white/90 mb-4">Stay connected for katha updates.</p>
                <div className="flex gap-3">
                  {[
                    { href: SITE.whatsappChannel, label: 'WhatsApp channel', Icon: MessageCircle },
                    { href: SITE.social.youtube, label: 'YouTube', Icon: Youtube },
                    { href: SITE.social.facebook, label: 'Facebook', Icon: Facebook },
                    { href: SITE.social.instagram, label: 'Instagram', Icon: Instagram },
                  ].map(({ href, label, Icon }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cream-200 h-full">
                <h2 className="font-serif-display text-2xl text-ink-800 mb-2">Get in touch</h2>
                <p className="text-sm text-ink-500 mb-6">Fill out the form or email us — we’ll get back to you soon.</p>

                <form onSubmit={submit} noValidate className="space-y-5">
                  <div>
                    <label htmlFor="c-name" className="block text-sm font-semibold text-ink-700 mb-2">Your Name</label>
                    <input type="text" autoComplete="name" className="field" placeholder="Enter your name" {...field('name')} />
                    {err('name')}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="c-email" className="block text-sm font-semibold text-ink-700 mb-2">Email Address</label>
                      <input type="email" autoComplete="email" className="field" placeholder="your@email.com" {...field('email')} />
                      {err('email')}
                    </div>
                    <div>
                      <label htmlFor="c-phone" className="block text-sm font-semibold text-ink-700 mb-2">Contact No.</label>
                      <input type="tel" autoComplete="tel" inputMode="tel" className="field" placeholder="Your phone number" {...field('phone')} />
                      {err('phone')}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="c-message" className="block text-sm font-semibold text-ink-700 mb-2">Message</label>
                    <textarea rows={5} className="field resize-none" placeholder="How can we help you?" {...field('message')} />
                    {err('message')}
                  </div>
                  <button type="submit" className="btn-saffron w-full">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                  <p className="text-xs text-ink-400 text-center" aria-live="polite">
                    {sent ? 'Your email app should open with the message ready. Press send there to deliver it.' : 'Opens your email app with the message ready to send.'}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
