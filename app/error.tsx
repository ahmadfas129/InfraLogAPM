'use client';

import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Something went wrong</p>
      <h1 className="mt-6 text-5xl font-semibold text-white">Application error</h1>
      <p className="mt-4 max-w-xl text-slate-300">An unexpected error occurred while loading this page. Refresh or return to the homepage.</p>
      <Link href="/" className="mt-8 inline-flex rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow hover:bg-violet-600">
        Return home
      </Link>
    </div>
  );
}
