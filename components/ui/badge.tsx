import { cn } from '@/lib/utils';

export function Badge({ label, className }: { label: string; className?: string }) {
  return <span className={cn('rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-100', className)}>{label}</span>;
}
