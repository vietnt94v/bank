import type { ReactNode } from 'react';

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHeader({
  actions,
  description,
  eyebrow,
  title,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm shadow-slate-900/5 backdrop-blur sm:flex-row sm:items-end sm:justify-between">
      <div className="space-y-2">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
            {eyebrow}
          </p>
        ) : null}
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-950">
            {title}
          </h1>
          <p className="max-w-2xl text-sm text-slate-500">{description}</p>
        </div>
      </div>
      {actions ? (
        <div className="flex items-center gap-3">{actions}</div>
      ) : null}
    </div>
  );
}
