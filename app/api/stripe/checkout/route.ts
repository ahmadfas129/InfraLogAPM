import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { billingSchema } from '@/lib/validators';

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = billingSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ message: 'Invalid request', errors: parsed.error.format() }, { status: 422 });
  }

  const plan = parsed.data.planId === 'enterprise'
    ? { name: 'Enterprise', price: 199 }
    : parsed.data.planId === 'professional'
    ? { name: 'Professional', price: 79 }
    : { name: 'Starter', price: 19 };

  const url = process.env.NEXTAUTH_URL ?? 'http://localhost:3000';

  if (!stripe) {
    return NextResponse.json({ message: 'Stripe is not configured' }, { status: 500 });
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'subscription',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: plan.name,
            description: `${plan.name} plan for InfraLogAPM`
          },
          unit_amount: plan.price * 100,
          recurring: { interval: 'month' }
        },
        quantity: 1
      }
    ],
    success_url: `${url}/billing?status=success`,
    cancel_url: `${url}/billing?status=canceled`
  });

  return NextResponse.json({ url: session.url });
}
