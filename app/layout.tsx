import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import { MobileMenuContextProvider } from '@/context/useMobileMenuContext';
import MobileMenu from '@/components/MobileMenu';
import Footer from '@/components/Footer';

const inter = Jost({ subsets: ['latin'], variable: '--font-jost' });

export const metadata: Metadata = {
  title: { default: 'Designo ', template: '%s | Designo' },
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
      <body className={cn(inter.variable, 'font-jost text-body')}>
        <MobileMenuContextProvider>
          <Header />
          <div className='pt-24' />
          {children}
          <MobileMenu />
          <Footer />
        </MobileMenuContextProvider>
      </body>
    </html>
  );
}
