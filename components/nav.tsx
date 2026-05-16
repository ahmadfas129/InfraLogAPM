'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/integrations', label: 'Integrations' },
  { href: '/documentation', label: 'Docs' }
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 text-white">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-white">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-sky-500 text-xl shadow-glow">I</span>
          InfraLogAPM
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm transition hover:text-white',
                pathname === link.href ? 'text-white' : 'text-slate-400'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm text-slate-300 hover:text-white">
            Sign in
          </Link>
          <Link href="/signup" className="inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-violet-600">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
