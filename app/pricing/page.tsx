'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';
import { Badge } from '@/components/ui/badge';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 19,
    description: 'Basic monitoring and alerts for smaller teams.',
    features: ['5 servers', 'Email alerts', 'Basic dashboards']
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 79,
    description: 'Advanced observability, API monitoring, and collaboration.',
    features: ['25 servers', 'API monitoring', 'Team collaboration']
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 199,
    description: 'Unlimited infrastructure monitoring with dedicated support.',
    features: ['Unlimited monitoring', 'Dedicated support', 'Custom integrations']
  }
];

export default function PricingPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function checkout(planId: string) {
    setStatus('Creating checkout session...');
    const response = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ planId })
    });

    const data = await response.json();
    if (response.ok && data.url) {
      window.location.href = data.url;
      return;
    }

    setStatus(data.message || 'Unable to start checkout.');
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading title="Pricing" description="Choose the plan that fits your infrastructure and growth." />
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.id} className="space-y-6 bg-slate-950/90">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge label={plan.name} />
              </div>
              <p className="text-5xl font-semibold text-white">${plan.price}</p>
              <p className="text-sm text-slate-400">per month</p>
              <p className="text-sm leading-6 text-slate-300">{plan.description}</p>
            </div>
            <div className="space-y-3">
              {plan.features.map((feature) => (
                <p key={feature} className="text-sm text-slate-300">• {feature}</p>
              ))}
            </div>
            <Button type="button" onClick={() => checkout(plan.id)}>
              Start {plan.name}
            </Button>
          </Card>
        ))}
      </div>
      {status ? <p className="mt-6 text-center text-sm text-slate-300">{status}</p> : null}
    </div>
  );
}
