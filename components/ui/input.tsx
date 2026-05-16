import { cn } from '@/lib/utils';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ className, type = 'text', label, ...props }: InputProps) {
  return (
    <label className="space-y-2 text-sm text-slate-200">
      {label && <span className="font-medium text-slate-100">{label}</span>}
      <input
        type={type}
        className={cn(
          'w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20',
          className
        )}
        {...props}
      />
    </label>
  );
}
