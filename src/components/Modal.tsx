import { useEffect, useRef, useState, type ReactNode } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
  className?: string;
}

// Native <dialog>: focus trap, Escape and focus return come from the browser.
export default function Modal({ open, onClose, label, children, className = '' }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  // While the close animation plays, keep showing what was last on screen (callers often clear their data on close).
  const [closing, setClosing] = useState(false);
  const last = useRef(children);
  if (open) last.current = children;

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open) {
      setClosing(false);
      if (!d.open) d.showModal();
    } else if (d.open) {
      setClosing(true);
      const t = setTimeout(() => {
        d.close();
        setClosing(false);
      }, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 180);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-label={label}
      onClose={onClose}
      // Escape fires "cancel", and Chrome doesn't always follow it with "close"; let state do the closing
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => e.target === ref.current && onClose()}
      className={`${closing ? 'closing ' : ''}bg-transparent p-0 m-auto w-[min(960px,calc(100vw-2rem))] max-h-[calc(100dvh-2rem)] overflow-visible ${className}`}
    >
      {(open || closing) && (
        <div className="relative">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {open ? children : last.current}
        </div>
      )}
    </dialog>
  );
}
