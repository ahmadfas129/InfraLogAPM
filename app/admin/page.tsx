import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { MetricsAreaChart } from '@/components/charts/area-chart';
import { AnalyticsLineChart } from '@/components/charts/line-chart';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    redirect('/login');
  }

  if (session.user?.role !== 'ADMIN') {
    redirect('/dashboard');
  }

  const revenue = [
    { name: 'Jan', value: 42 },
    { name: 'Feb', value: 55 },
    { name: 'Mar', value: 68 },
    { name: 'Apr', value: 88 },
    { name: 'May', value: 125 }
  ];

  const uptime = [
    { name: '00:00', value: 99.91 },
    { name: '04:00', value: 99.94 },
    { name: '08:00', value: 99.97 },
    { name: '12:00', value: 99.96 },
    { name: '16:00', value: 99.99 }
  ];

  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[280px_1fr]">
      <DashboardSidebar />
      <div className="space-y-8">
        <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Admin console</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">Enterprise analytics and user management</h1>
          <p className="mt-4 text-slate-300">Manage users, review revenue, and monitor system health from a central admin view.</p>
        </div>
        <div className="grid gap-8 xl:grid-cols-2">
          <MetricsAreaChart data={revenue} title="Revenue trend" color="#22c55e" />
          <AnalyticsLineChart data={uptime} title="Uptime stability" color="#38bdf8" />
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Active sessions</p>
            <p className="mt-3 text-3xl font-semibold text-white">172</p>
            <p className="mt-2 text-sm text-slate-400">Users currently signed in.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">New users</p>
            <p className="mt-3 text-3xl font-semibold text-white">24</p>
            <p className="mt-2 text-sm text-slate-400">Signups in the last 24 hours.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Open issues</p>
            <p className="mt-3 text-3xl font-semibold text-white">8</p>
            <p className="mt-2 text-sm text-slate-400">Alerts and investigation items.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
