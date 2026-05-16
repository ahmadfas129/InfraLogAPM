import { z } from 'zod';

export const signupSchema = z.object({
  name: z.string().min(2, 'Enter a valid name'),
  email: z.string().email('Enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters')
});

export const loginSchema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(8, 'Enter your password')
});

export const billingSchema = z.object({
  planId: z.string().min(1)
});
