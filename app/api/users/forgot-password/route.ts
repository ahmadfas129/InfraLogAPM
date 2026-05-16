import { NextResponse } from 'next/server';
import { z } from 'zod';

const forgotSchema = z.object({ email: z.string().email() });

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = forgotSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: 'Invalid email' }, { status: 422 });
  }

  // Simulate password reset flow. Integrate email provider for production.
  return NextResponse.json({ success: true, message: 'Password reset requested' });
}
