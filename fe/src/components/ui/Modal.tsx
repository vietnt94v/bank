import type { ReactNode } from 'react';
import { useEffect } from 'react';

import { Button } from '@/components/ui/Button';
import { Portal } from '@/components/ui/Portal';

type ModalProps = {
  open: boolean;
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  onClose: () => void;
};

export function Modal({
  children,
  description,
  footer,
  onClose,
  open,
  title,
}: ModalProps) {
  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  return (
    <Portal>
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/45 p-4 backdrop-blur-sm">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          onClick={onClose}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="relative z-10 w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl shadow-slate-950/10"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <h3
                id="modal-title"
                className="text-xl font-semibold text-slate-950"
              >
                {title}
              </h3>
              {description ? (
                <p className="text-sm text-slate-500">{description}</p>
              ) : null}
            </div>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </div>

          <div className="mt-6">{children}</div>

          {footer ? <div className="mt-6">{footer}</div> : null}
        </div>
      </div>
    </Portal>
  );
}
