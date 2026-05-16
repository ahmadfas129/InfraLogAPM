'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';

export default function SettingsPage() {
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('Settings updated successfully.');
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading title="Settings" description="Configure your team, billing, and account preferences." />
      <div className="mt-12 rounded-3xl border border-white/10 bg-slate-950/80 p-10 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input label="Team name" defaultValue="InfraLog APM" />
          <Input label="Notification email" type="email" defaultValue="alerts@infralogapm.com" />
          <Input label="API key label" defaultValue="InfraLogAPM service key" />
          {message ? <p className="text-sm text-emerald-300">{message}</p> : null}
          <Button type="submit">Save settings</Button>
        </form>
      </div>
    </div>
  );
}
