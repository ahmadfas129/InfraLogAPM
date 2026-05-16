import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'secondary';
}

export function Button({ className, variant = 'default', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60',
        variant === 'default' && 'bg-primary text-white shadow-glow hover:bg-violet-600',
        variant === 'secondary' && 'border border-white/10 bg-white/5 text-white hover:bg-white/10',
        variant === 'ghost' && 'bg-transparent text-white/90 hover:bg-white/10',
        className
      )}
      {...props}
    />
  );
}
