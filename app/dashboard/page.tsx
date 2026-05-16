import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { MetricsAreaChart } from '@/components/charts/area-chart';
import { AnalyticsLineChart } from '@/components/charts/line-chart';

const metrics = [
  { name: '00:00', value: 82 },
  { name: '02:00', value: 74 },
  { name: '04:00', value: 69 },
  { name: '06:00', value: 72 },
  { name: '08:00', value: 88 },
  { name: '10:00', value: 96 },
  { name: '12:00', value: 84 }
];

const latency = [
  { name: 'Mon', value: 180 },
  { name: 'Tue', value: 170 },
  { name: 'Wed', value: 160 },
  { name: 'Thu', value: 170 },
  { name: 'Fri', value: 155 },
  { name: 'Sat', value: 145 },
  { name: 'Sun', value: 140 }
];

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    redirect('/login');
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[280px_1fr]">
      <DashboardSidebar />
      <div className="space-y-8">
        <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Welcome back</p>
              <h1 className="text-4xl font-semibold text-white">{session?.user?.name ?? 'InfraLogAPM user'}</h1>
            </div>
            <div className="rounded-3xl bg-gradient-to-r from-primary to-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-glow">Monitoring overview</div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Servers online', value: '128' },
              { label: 'Active alerts', value: '14' },
              { label: 'Error rate', value: '0.11%' },
              { label: 'Monthly cost', value: '$1,280' }
            ].map((item) => (
              <div key={item.label} className="rounded-3xl bg-slate-900/80 p-6">
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <MetricsAreaChart data={metrics} title="CPU usage" color="#8b5cf6" />
          <AnalyticsLineChart data={latency} title="API latency" color="#38bdf8" />
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Request logs</p>
            <p className="mt-3 text-3xl font-semibold text-white">4,320</p>
            <p className="mt-2 text-sm text-slate-400">Recent request volume across all clusters.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Database performance</p>
            <p className="mt-3 text-3xl font-semibold text-white">98.7%</p>
            <p className="mt-2 text-sm text-slate-400">Query success and throughput rate.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Notifications</p>
            <p className="mt-3 text-3xl font-semibold text-white">6 unread</p>
            <p className="mt-2 text-sm text-slate-400">Alerts and system updates pending review.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
