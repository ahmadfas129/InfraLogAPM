'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const billingItems = [
  { label: 'Current plan', value: 'Professional' },
  { label: 'Next invoice', value: '$79.00 on June 1' },
  { label: 'Payment method', value: 'Visa ending 4242' }
];

function BillingContent() {
  const params = useSearchParams();
  const status = params.get('status');

  return (
    <>
      {status === 'success' ? (
        <div className="mt-10 rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-6 text-emerald-200">
          <p className="font-semibold">Billing update successful.</p>
          <p className="mt-2 text-slate-200">Your subscription has been updated.</p>
        </div>
      ) : status === 'canceled' ? (
        <div className="mt-10 rounded-3xl border border-amber-500/20 bg-amber-500/10 p-6 text-amber-200">
          <p className="font-semibold">Payment canceled.</p>
          <p className="mt-2 text-slate-200">No changes were made to your subscription.</p>
        </div>
      ) : null}
    </>
  );
}

export default function BillingPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading title="Billing" description="Manage your subscription, invoices, and payment methods." />
      <Suspense fallback={null}>
        <BillingContent />
      </Suspense>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {billingItems.map((item) => (
          <Card key={item.label} className="space-y-3 bg-slate-950/90">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
            <p className="text-xl font-semibold text-white">{item.value}</p>
          </Card>
        ))}
      </div>
      <div className="mt-10 rounded-3xl border border-white/10 bg-slate-950/80 p-8">
        <h2 className="text-xl font-semibold text-white">Update subscription</h2>
        <p className="mt-3 text-slate-400">Choose a plan to upgrade your observability capacity and team access.</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button type="button">Open Stripe checkout</Button>
          <Button variant="secondary" type="button">View invoices</Button>
        </div>
      </div>
    </div>
  );
}
