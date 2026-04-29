import { useEffect, useRef, useState } from 'react';

import type { DropdownItem } from '@/shared/types';

type DropdownProps = {
  label: string;
  items: DropdownItem[];
};

export function Dropdown({ items, label }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener('mousedown', handlePointerDown);

    return () => {
      window.removeEventListener('mousedown', handlePointerDown);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative inline-flex">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
      >
        {label}
        <span className="text-xs text-slate-400">{open ? '▲' : '▼'}</span>
      </button>

      {open ? (
        <div className="absolute right-0 top-[calc(100%+0.5rem)] z-20 min-w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-900/10">
          {items.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                item.onSelect?.();
                setOpen(false);
              }}
              className="flex w-full flex-col rounded-xl px-3 py-2 text-left transition hover:bg-slate-50"
            >
              <span className="text-sm font-medium text-slate-900">
                {item.label}
              </span>
              {item.description ? (
                <span className="text-xs text-slate-500">
                  {item.description}
                </span>
              ) : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
