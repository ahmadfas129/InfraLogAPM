import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';

const services = ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Postgres', 'Redis', 'Slack'];

export default function IntegrationsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading title="Integrations" description="Connect InfraLogAPM with your infrastructure and toolchain." />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Card key={service} className="rounded-3xl bg-slate-950/90 p-8 text-center">
            <p className="text-lg font-semibold text-white">{service}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
