import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';

const roles = [
  { title: 'Site Reliability Engineer', location: 'Remote' },
  { title: 'Observability Product Manager', location: 'San Francisco' },
  { title: 'Customer Success Engineer', location: 'Remote' }
];

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading title="Careers" description="Join a fast-growing observability team." />
      <div className="mt-14 space-y-6">
        {roles.map((role) => (
          <Card key={role.title} className="flex items-center justify-between bg-slate-950/90 p-8">
            <div>
              <h2 className="text-2xl font-semibold text-white">{role.title}</h2>
              <p className="mt-2 text-sm text-slate-400">{role.location}</p>
            </div>
            <div className="rounded-2xl bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">Apply</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
