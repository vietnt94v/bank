import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

const baseClassName =
  'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60';

const variantClassNames = {
  primary: 'bg-slate-950 text-white hover:bg-slate-800',
  secondary:
    'border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50',
  ghost: 'bg-transparent text-slate-600 hover:bg-slate-100',
};

export function Button({
  children,
  className,
  endIcon,
  startIcon,
  type,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type ?? 'button'}
      className={[baseClassName, variantClassNames[variant], className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {startIcon}
      <span>{children}</span>
      {endIcon}
    </button>
  );
}
