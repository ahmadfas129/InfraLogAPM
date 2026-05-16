import { stripe } from '@/lib/stripe';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const payload = await request.text();
  const signature = request.headers.get('stripe-signature') ?? '';
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!secret) {
    return NextResponse.json({ message: 'Webhook secret not configured' }, { status: 500 });
  }

  if (!stripe) {
    return NextResponse.json({ message: 'Stripe is not configured' }, { status: 500 });
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, signature, secret);
  } catch (error) {
    return NextResponse.json({ message: 'Webhook signature verification failed' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as any;
    console.log('Checkout completed for', session.customer_email);
  }

  return NextResponse.json({ received: true });
}
