import Link from 'next/link';
import { ArrowRight, ServerCog, ShieldCheck, TrendingUp, Layers, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const stats = [
  { label: 'Infrastructure monitored', value: '12,400+' },
  { label: 'Trusted by teams', value: '450+' },
  { label: 'APM events processed', value: '18M+' }
];

const features = [
  { icon: ServerCog, title: 'Infrastructure monitoring', description: 'Track hosts, containers, Kubernetes, and cloud infrastructure in one dashboard.' },
  { icon: ShieldCheck, title: 'Security monitoring', description: 'Identify threats, vulnerabilities, and anomalous activity with smart alerts.' },
  { icon: TrendingUp, title: 'Application performance', description: 'Monitor latency, errors, and traces across every service.' },
  { icon: Layers, title: 'Log management', description: 'Aggregate logs from servers, applications, and pipelines with live filtering.' }
];

const testimonials = [
  { quote: 'InfraLogAPM transformed our observability stack with clarity and speed.', name: 'Maya Chen', role: 'VP of Engineering' },
  { quote: 'Our team lowered incident response times by 42% in the first month.', name: 'Jason Patel', role: 'SRE Lead' }
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_0.7fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200 ring-1 ring-white/10">
              <Zap className="h-4 w-4 text-primary" />
              Enterprise observability with unified log, APM, security, and team workflows.
            </div>
            <div className="space-y-6">
              <p className="max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-6xl">
                Modern observability for cloud-native enterprises.
              </p>
              <p className="max-w-2xl leading-8 text-slate-300">
                See metrics, traces, logs, and security insights from one powerful platform built for infrastructure teams.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button className="min-w-[160px]">Start free trial</Button>
              <Link href="/pricing" className="inline-flex items-center justify-center rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
                View pricing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-slate-950/90 p-5">
                  <p className="text-4xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6 rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm uppercase tracking-[0.34em] text-slate-400">Live preview</p>
                <Badge label="Beta" />
              </div>
              <div className="rounded-[2rem] bg-slate-900/90 p-6">
                <div className="mb-5 flex items-center justify-between text-slate-400">
                  <span>Server cluster status</span>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-300">Healthy</span>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-3xl bg-slate-950/90 p-4">
                    <p className="text-sm text-slate-400">CPU utilization</p>
                    <p className="mt-3 text-3xl font-semibold text-white">32.4%</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-slate-950/90 p-4">
                      <p className="text-sm text-slate-400">API latency</p>
                      <p className="mt-3 text-2xl font-semibold text-white">158ms</p>
                    </div>
                    <div className="rounded-3xl bg-slate-950/90 p-4">
                      <p className="text-sm text-slate-400">Error rate</p>
                      <p className="mt-3 text-2xl font-semibold text-white">0.12%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl bg-slate-950/90 p-4">
                  <p className="text-sm text-slate-400">Retention</p>
                  <p className="mt-3 text-xl font-semibold text-white">30 days</p>
                </div>
                <div className="rounded-3xl bg-slate-950/90 p-4">
                  <p className="text-sm text-slate-400">Alerts</p>
                  <p className="mt-3 text-xl font-semibold text-white">19 active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading title="Trusted by high-growth infrastructure teams" description="Deliver observability, performance, and security across every service." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="space-y-4 bg-slate-950/90">
              <feature.icon className="h-6 w-6 text-primary" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-sm leading-6 text-slate-400">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_0.7fr] lg:items-center">
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-400">APM and infrastructure</p>
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Real-time analytics with enterprise-grade dashboards.
            </h2>
            <p className="max-w-xl leading-8 text-slate-300">
              Drill into infrastructure metrics, request latency, error tracking, and cost efficiency with beautifully designed dashboards.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/90 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Monitoring</p>
                <p className="mt-3 text-3xl font-semibold text-white">11,200+</p>
                <p className="mt-2 text-sm text-slate-400">Active servers and hosts</p>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Alerts</p>
                <p className="mt-3 text-3xl font-semibold text-white">4,320</p>
                <p className="mt-2 text-sm text-slate-400">Triggered in the last 24 hours</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-xl shadow-slate-950/30">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-6">
              <div className="mb-6 flex items-center justify-between text-slate-300">
                <p className="text-sm uppercase tracking-[0.3em]">APM insights</p>
                <span className="rounded-full bg-primary/15 px-3 py-1 text-xs text-primary">Live</span>
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Top service latency</p>
                  <p className="mt-3 text-3xl font-semibold text-white">176ms</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/5 p-5">
                    <p className="text-sm text-slate-400">Errors</p>
                    <p className="mt-3 text-2xl font-semibold text-white">72</p>
                  </div>
                  <div className="rounded-3xl bg-white/5 p-5">
                    <p className="text-sm text-slate-400">Throughput</p>
                    <p className="mt-3 text-2xl font-semibold text-white">9.2k req/min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <SectionHeading title="Enterprise-grade observability" description="A single source of truth for logs, metrics, traces, and customer-facing reliability." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Card className="space-y-4 bg-slate-950/90">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Log management</p>
            <h3 className="text-2xl font-semibold text-white">Centralized log search</h3>
            <p className="text-sm leading-6 text-slate-400">Filter logs by service, environment, and severity with high-cardinality search.</p>
          </Card>
          <Card className="space-y-4 bg-slate-950/90">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Security</p>
            <h3 className="text-2xl font-semibold text-white">Threat and compliance</h3>
            <p className="text-sm leading-6 text-slate-400">Detect anomalies in real-time and preserve audit trails for compliance workflows.</p>
          </Card>
          <Card className="space-y-4 bg-slate-950/90">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Billing</p>
            <h3 className="text-2xl font-semibold text-white">Predictable plans</h3>
            <p className="text-sm leading-6 text-slate-400">Flexible subscription tiers designed for fast-growing cloud teams.</p>
          </Card>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <SectionHeading title="Customer stories" description="What modern engineering teams love about InfraLogAPM." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((item) => (
            <Card key={item.name} className="space-y-4 bg-slate-950/90">
              <p className="text-lg leading-8 text-slate-200">“{item.quote}”</p>
              <div>
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
