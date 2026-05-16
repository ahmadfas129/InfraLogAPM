'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/lib/validators';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) });

  async function onSubmit(values: LoginFormValues) {
    setIsLoading(true);
    setErrorMessage(null);
    
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password
      });

      if (res?.error) {
        setErrorMessage('Invalid email or password');
        setIsLoading(false);
      } else if (res?.ok) {
        router.push('/dashboard');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      setIsLoading(false);
    }
  }

  return (
    <div className="mx-auto flex min-h-[calc(100vh-120px)] max-w-3xl items-center justify-center px-6 py-20">
      <div className="w-full rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-xl">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Welcome back</p>
          <h1 className="text-4xl font-semibold text-white">Sign in to InfraLogAPM</h1>
          <p className="max-w-xl mx-auto text-sm leading-7 text-slate-400">Access dashboards, logs, billing, and team collaboration tools for your infrastructure.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
          <Input label="Email" type="email" {...register('email')} />
          <Input label="Password" type="password" {...register('password')} />
          {errorMessage ? <p className="text-sm text-rose-400">{errorMessage}</p> : null}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit" disabled={isLoading}>{isLoading ? 'Signing in...' : 'Continue'}</Button>
            <Link href="/forgot-password" className="text-sm text-slate-300 hover:text-white">Forgot password?</Link>
          </div>
        </form>
        <p className="mt-8 text-center text-sm text-slate-400">
          New to InfraLogAPM?{' '}
          <Link href="/signup" className="text-white underline decoration-slate-500/40">Create an account</Link>
        </p>
      </div>
    </div>
  );
}
