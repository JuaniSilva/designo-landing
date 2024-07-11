import type { Metadata } from 'next';
import { Inter, Jost } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';

const inter = Jost({ subsets: ['latin'], variable: '--font-jost' });

export const metadata: Metadata = {
  title: 'Designo ',
  description:
    'Designo is a multi-page marketing website template for a design agency.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(inter.variable, 'relative font-jost text-body')}>
        <Header />
        {children}
      </body>
    </html>
  );
}
