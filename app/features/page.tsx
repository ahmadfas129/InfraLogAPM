import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';

const features = [
  {
    title: 'Infrastructure monitoring',
    description: 'Track infrastructure health across cloud, containers, and server fleets with precision.'
  },
  {
    title: 'Advanced dashboards',
    description: 'Build executive dashboards with real-time metrics, alerts, and logs in one view.'
  },
  {
    title: 'Error tracking',
    description: 'Identify, group, and resolve application errors before they impact customers.'
  },
  {
    title: 'Notifications',
    description: 'Route alerts through email, Slack, PagerDuty, and custom webhooks.'
  }
];

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading title="Features" description="Built for modern DevOps and SRE teams." />
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {features.map((feature) => (
          <Card key={feature.title} className="space-y-4 bg-slate-950/90">
            <h2 className="text-2xl font-semibold text-white">{feature.title}</h2>
            <p className="text-sm leading-7 text-slate-300">{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
