import { stripe } from '@/lib/stripe';

export async function createCheckoutSession(plan: { name: string; price: number }, email: string, successUrl: string, cancelUrl: string) {
  if (!stripe) {
    throw new Error('Stripe is not configured');
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'subscription',
    customer_email: email,
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: plan.name,
            description: plan.name + ' plan for InfraLogAPM'
          },
          unit_amount: plan.price * 100,
          recurring: { interval: 'month' }
        },
        quantity: 1
      }
    ],
    subscription_data: {
      metadata: { plan: plan.name }
    },
    success_url: successUrl,
    cancel_url: cancelUrl
  });

  return session;
}
