'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '@/lib/validators';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type SignupFormValues = {
  name: string;
  email: string;
  password: string;
};

export default function SignupPage() {
  const router = useRouter();
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { register, handleSubmit } = useForm<SignupFormValues>({ resolver: zodResolver(signupSchema) });

  async function onSubmit(values: SignupFormValues) {
    setIsLoading(true);
    setFeedback(null);
    setHasError(false);

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });

      if (response.ok) {
        setFeedback('Account created successfully! Redirecting to sign in...');
        setTimeout(() => {
          router.push('/login');
        }, 1500);
        return;
      }

      const body = await response.json();
      setFeedback(body?.message || 'Unable to create account.');
      setHasError(true);
      setIsLoading(false);
    } catch (error) {
      setFeedback('An error occurred. Please try again.');
      setHasError(true);
      setIsLoading(false);
    }
  }

  return (
    <div className="mx-auto flex min-h-[calc(100vh-120px)] max-w-3xl items-center justify-center px-6 py-20">
      <div className="w-full rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-xl">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Create account</p>
          <h1 className="text-4xl font-semibold text-white">Join InfraLogAPM</h1>
          <p className="max-w-xl mx-auto text-sm leading-7 text-slate-400">Start monitoring your infrastructure with enterprise-grade dashboards and alerts.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
          <Input label="Full name" {...register('name')} />
          <Input label="Email" type="email" {...register('email')} />
          <Input label="Password" type="password" {...register('password')} />
          {feedback ? (
            <p className={`text-sm ${hasError ? 'text-rose-400' : 'text-emerald-400'}`}>
              {feedback}
            </p>
          ) : null}
          <Button type="submit" disabled={isLoading}>{isLoading ? 'Creating account...' : 'Create account'}</Button>
        </form>
        <p className="mt-8 text-center text-sm text-slate-400">
          Already have an account?{' '}
          <Link href="/login" className="text-white underline decoration-slate-500/40">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
