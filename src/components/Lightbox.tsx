import { useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Modal from '@/components/Modal';

interface LightboxProps {
  images: string[];
  index: number | null;
  onChange: (i: number | null) => void;
}

export default function Lightbox({ images, index, onChange }: LightboxProps) {
  const open = index !== null;
  const go = (step: number) => index !== null && onChange((index + step + images.length) % images.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  return (
    <Modal open={open} onClose={() => onChange(null)} label="Photo viewer">
      {open && (
        <figure className="flex flex-col items-center">
          <img key={index} src={images[index]} alt="" className="max-h-[78dvh] w-auto max-w-full rounded-xl shadow-2xl animate-fade-in" />
          <figcaption className="mt-4 flex items-center gap-4 text-white">
            <button onClick={() => go(-1)} aria-label="Previous photo" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm tabular-nums min-w-[4rem] text-center">
              {index + 1} of {images.length}
            </span>
            <button onClick={() => go(1)} aria-label="Next photo" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
              <ChevronRight className="w-5 h-5" />
            </button>
          </figcaption>
        </figure>
      )}
    </Modal>
  );
}
