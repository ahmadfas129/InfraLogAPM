'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const forgotSchema = z.object({ email: z.string().email('Enter a valid email') });

type ForgotFormValues = {
  email: string;
};

export default function ForgotPasswordPage() {
  const [status, setStatus] = useState<string | null>(null);
  const { register, handleSubmit } = useForm<ForgotFormValues>({ resolver: zodResolver(forgotSchema) });

  async function onSubmit(values: ForgotFormValues) {
    await fetch('/api/users/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    });
    setStatus('If an account exists, a password reset link has been sent to your email.');
  }

  return (
    <div className="mx-auto flex min-h-[calc(100vh-120px)] max-w-3xl items-center justify-center px-6 py-20">
      <div className="w-full rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-xl">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Reset password</p>
          <h1 className="text-4xl font-semibold text-white">Forgot your password?</h1>
          <p className="max-w-xl mx-auto text-sm leading-7 text-slate-400">Enter your email and we’ll send you a secure password reset link.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
          <Input label="Email" type="email" {...register('email')} />
          {status ? <p className="text-sm text-slate-300">{status}</p> : null}
          <Button type="submit">Send reset link</Button>
        </form>
      </div>
    </div>
  );
}
