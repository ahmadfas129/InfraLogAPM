import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';

const docs = [
  { title: 'Getting started', description: 'Install agents, configure services, and connect your first host.' },
  { title: 'APM setup', description: 'Instrument services, collect traces, and measure request performance.' },
  { title: 'Billing & pricing', description: 'Manage subscriptions, invoices, and payment methods.' },
  { title: 'Security', description: 'Set policies, roles, and compliance monitoring for your team.' }
];

export default function DocumentationPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading title="Documentation" description="Complete guides for every InfraLogAPM workflow." />
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {docs.map((doc) => (
          <Card key={doc.title} className="space-y-4 bg-slate-950/90">
            <h2 className="text-2xl font-semibold text-white">{doc.title}</h2>
            <p className="text-sm leading-7 text-slate-300">{doc.description}</p>
            <div className="text-sm font-semibold text-primary">Read guide →</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
