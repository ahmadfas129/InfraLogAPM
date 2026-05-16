'use client';

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';

interface LineChartProps {
  data: { name: string; value: number }[];
  title: string;
  color: string;
}

export function AnalyticsLineChart({ data, title, color }: LineChartProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-xl">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{title}</p>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="rgba(148,163,184,0.15)" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} />
            <Tooltip contentStyle={{ backgroundColor: '#0F172A', border: '1px solid #334155', borderRadius: 16, color: '#fff' }} />
            <Line type="monotone" dataKey="value" stroke={color} strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
