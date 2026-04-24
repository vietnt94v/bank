import type { ToastTone } from '@/types';

type ToastProps = {
  title: string;
  message: string;
  tone?: ToastTone;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
};

const toneClassNames: Record<ToastTone, string> = {
  info: 'border-blue-200 bg-blue-50 text-blue-950',
  success: 'border-emerald-200 bg-emerald-50 text-emerald-950',
  warning: 'border-amber-200 bg-amber-50 text-amber-950',
  error: 'border-rose-200 bg-rose-50 text-rose-950',
};

export function Toast({
  actionLabel,
  className,
  message,
  onAction,
  title,
  tone = 'info',
}: ToastProps) {
  return (
    <div
      className={[
        'rounded-2xl border p-4 shadow-sm',
        toneClassNames[tone],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-sm opacity-80">{message}</p>
        </div>
        {actionLabel && onAction ? (
          <button
            type="button"
            onClick={onAction}
            className="rounded-lg border border-current/20 px-3 py-1 text-xs font-medium"
          >
            {actionLabel}
          </button>
        ) : null}
      </div>
    </div>
  );
}
