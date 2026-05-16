import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/footer';
import { Nav } from '@/components/nav';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'InfraLogAPM — Modern Observability Platform',
  description: 'Enterprise infrastructure monitoring, logs, APM, and analytics for modern teams.',
  metadataBase: new URL('https://InfraLogAPM.com'),
  openGraph: {
    title: 'InfraLogAPM',
    description: 'Enterprise infrastructure monitoring, logs, APM, and analytics for modern teams.',
    type: 'website',
    url: 'https://InfraLogAPM.com'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-slate-950 text-white`}> 
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(99,44,166,0.24),transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.16),transparent_25%)]">
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
