import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading title="Contact" description="Talk to our sales and support teams." />
      <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_0.7fr]">
        <Card className="bg-slate-950/90 p-10">
          <h2 className="text-3xl font-semibold text-white">Let’s build reliable infrastructure together.</h2>
          <p className="mt-4 text-slate-300">Reach out for enterprise demos, custom integrations, or help with onboarding.</p>
          <div className="mt-8 space-y-4">
            <div className="rounded-3xl bg-slate-900/90 p-5">
              <p className="text-sm text-slate-400">Email</p>
              <p className="mt-2 text-white">support@infralogapm.com</p>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-5">
              <p className="text-sm text-slate-400">Phone</p>
              <p className="mt-2 text-white">+1 (555) 320-9614</p>
            </div>
          </div>
        </Card>
        <Card className="bg-slate-950/90 p-8">
          <form className="space-y-6">
            <div>
              <label className="text-sm text-slate-300">Name</label>
              <input className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Message</label>
              <textarea className="mt-2 h-36 w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none" />
            </div>
            <Button type="button">Submit request</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
