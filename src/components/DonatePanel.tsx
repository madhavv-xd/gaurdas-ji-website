import { useEffect, useState } from 'react';
import { Landmark, User, CreditCard, Barcode, Copy, Check } from 'lucide-react';
import { BANK, IMAGES, SITE } from '@/data/content';

function CopyRow({ icon: Icon, label, value }: { icon: typeof Landmark; label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(id);
  }, [copied]);

  return (
    <div className="flex items-center gap-3.5 py-[14px] border-b border-ink-800/10 last:border-0">
      <span className="w-10 h-10 flex-none rounded-[11px] bg-brand-soft flex items-center justify-center">
        <Icon className="w-5 h-5 text-brand" />
      </span>
      <span className="min-w-0 flex-1">
        <small className="block text-ink-400 text-[0.8rem]">{label}</small>
        <b className="text-ink-800 font-semibold break-words">{value}</b>
      </span>
      <button
        onClick={() => navigator.clipboard?.writeText(value).then(() => setCopied(true))}
        aria-label={`Copy ${label}`}
        className={`flex-none inline-flex items-center gap-1.5 h-9 px-3 rounded-full text-xs font-semibold transition-colors ${
          copied ? 'bg-forest-500 text-white' : 'text-brand hover:bg-brand-soft'
        }`}
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
      </button>
    </div>
  );
}

export default function DonatePanel() {
  return (
    <div className="grid md:grid-cols-[auto_1fr] gap-10 items-start">
      <div className="text-center">
        <img src={IMAGES.qr} alt="UPI QR code for donations" className="w-64 mx-auto rounded-[18px] bg-white p-3 shadow-lift border-2 border-saffron-400" />
        <p className="text-sm text-ink-400 mt-3">Scan with any UPI app</p>
      </div>

      <div className="bg-white rounded-[22px] p-6 sm:p-8 shadow-soft">
        <h2 className="text-[1.7rem] text-ink-800 mb-3">Bank Details</h2>
        <CopyRow icon={Landmark} label="Branch" value={BANK.branch} />
        <CopyRow icon={User} label="Banking Name" value={BANK.name} />
        <CopyRow icon={CreditCard} label="Account Number" value={BANK.account} />
        <CopyRow icon={Barcode} label="IFSC Code" value={BANK.ifsc} />
        <p className="text-sm text-ink-400 mt-5">
          For donation receipts or questions, call {SITE.phones[0]} or email {SITE.email}.
        </p>
      </div>
    </div>
  );
}
