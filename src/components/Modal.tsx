import { useEffect, useRef, type ReactNode } from 'react';
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

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
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
      onClick={(e) => e.target === ref.current && onClose()}
      className={`bg-transparent p-0 m-auto w-[min(960px,calc(100vw-2rem))] max-h-[calc(100dvh-2rem)] overflow-visible ${className}`}
    >
      {open && (
        <div className="relative">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {children}
        </div>
      )}
    </dialog>
  );
}
