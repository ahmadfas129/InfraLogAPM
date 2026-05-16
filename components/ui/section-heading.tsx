export function SectionHeading({ title, description }: { title: string; description?: string }) {
  return (
    <div className="space-y-3 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{title}</p>
      {description ? <p className="mx-auto max-w-2xl text-3xl font-semibold text-white sm:text-4xl">{description}</p> : null}
    </div>
  );
}
