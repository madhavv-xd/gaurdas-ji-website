import { Flower2 } from 'lucide-react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const center = align === 'center';
  return (
    <div className={`max-w-[660px] mb-11 ${center ? 'mx-auto text-center' : 'text-left'}`}>
      {eyebrow && <p className={`eyebrow ${light ? '!text-saffron-400' : ''}`}>{eyebrow}</p>}
      <h2
        className={`text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.15] my-[.35em] text-balance ${
          light ? 'text-white' : 'text-ink-800'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={light ? 'text-ink-300' : 'text-ink-400'}>{description}</p>
      )}
      <div className={`flex items-center gap-4 mt-3.5 ${center ? 'justify-center' : ''}`}>
        <span className="h-px w-14 bg-gradient-to-r from-transparent to-gold" />
        <Flower2 className="w-6 h-6 text-gold opacity-85" strokeWidth={1.4} />
        <span className="h-px w-14 bg-gradient-to-r from-gold to-transparent" />
      </div>
    </div>
  );
}
