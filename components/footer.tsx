import Link from 'next/link';

const columns = [
  { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Documentation'] },
  { title: 'Company', links: ['About', 'Careers', 'Blog', 'Contact'] },
  { title: 'Resources', links: ['Support', 'Security', 'Status', 'Privacy'] }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="text-2xl font-semibold text-white">InfraLogAPM</p>
          <p className="max-w-sm leading-7 text-slate-400">
            The modern observability platform for infrastructure, logs, APM, and teams.
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <p className="mb-4 font-semibold text-white">{column.title}</p>
            <div className="space-y-3 text-sm text-slate-400">
              {column.links.map((link) => (
                <Link key={link} href="/" className="block hover:text-white">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} InfraLogAPM. Built for enterprise observability.
      </div>
    </footer>
  );
}
