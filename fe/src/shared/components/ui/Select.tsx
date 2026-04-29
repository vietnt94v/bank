import type { SelectHTMLAttributes } from 'react';
import { useId } from 'react';

import type { SelectOption } from '@/shared/types';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  hint?: string;
  options: SelectOption[];
};

export function Select({
  className,
  hint,
  id,
  label,
  options,
  ...props
}: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;

  return (
    <label className="flex w-full flex-col gap-2 text-sm text-slate-700">
      {label ? (
        <span className="font-medium text-slate-900">{label}</span>
      ) : null}
      <select
        id={selectId}
        className={[
          'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
      {hint ? <span className="text-xs text-slate-500">{hint}</span> : null}
    </label>
  );
}
