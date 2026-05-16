import Link from 'next/link';
import { Home, BarChart3, ShieldCheck, CreditCard, Settings, Users, Bell } from 'lucide-react';

const nav = [
  { href: '/dashboard', label: 'Overview', icon: Home },
  { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/dashboard/logs', label: 'Logs', icon: ShieldCheck },
  { href: '/billing', label: 'Billing', icon: CreditCard },
  { href: '/settings', label: 'Settings', icon: Settings },
  { href: '/admin', label: 'Admin', icon: Users }
];

export function DashboardSidebar() {
  return (
    <aside className="hidden w-72 flex-col gap-6 rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-slate-200 shadow-xl lg:flex">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Workspace</p>
        <p className="text-xl font-semibold text-white">InfraLogAPM</p>
      </div>
      <nav className="space-y-2">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition hover:bg-white/5 hover:text-white"
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto rounded-3xl bg-gradient-to-br from-primary/20 to-sky-500/10 p-4 text-sm text-slate-200">
        <p className="font-semibold text-white">Enterprise insights</p>
        <p className="mt-2 text-slate-400">Monitor infrastructure, logs, APM, and security in one place.</p>
      </div>
    </aside>
  );
}
