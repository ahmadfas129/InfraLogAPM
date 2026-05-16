import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';

const posts = [
  { title: 'How observability powers modern SRE teams', description: 'Best practices for logs, metrics, and traces.' },
  { title: 'Reducing incident response time with dashboards', description: 'Designing dashboards that help teams move faster.' }
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading title="Blog" description="Insights from observability leaders and engineering teams." />
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {posts.map((post) => (
          <Card key={post.title} className="space-y-4 bg-slate-950/90">
            <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
            <p className="text-sm leading-7 text-slate-300">{post.description}</p>
            <div className="text-sm font-semibold text-primary">Read article →</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
