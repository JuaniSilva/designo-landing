'use client';
import Image from 'next/image';
import Separator from './Separator';
import NavMenu from './NavMenu';
import Link from 'next/link';
import CTA from './CTA';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Container from './Container';
import { FacebookLogo } from './icons/FacebookLogo';
import { YoutubeLogo } from './icons/YoutubeLogo';
import { TwitterLogo } from './icons/TwitterLogo';
import { PinterestLogo } from './icons/PinterestLogo';
import { InstagramLogo } from './icons/InstagramLogo';

export default function Footer() {
  const path = usePathname();
  const shouldIncludeCTA = path !== '/contact';
  return (
    <>
      {shouldIncludeCTA && <CTA />}
      <footer
        className={cn(
          'bg-primary-black px-mobile-horizontal-spacing md:px-tablet-horizontal-spacing lg:px-0',
          shouldIncludeCTA ? 'pb-16 pt-[253px] md:pt-32' : 'py-16'
        )}
      >
        <Container
          className={cn(
            'flex flex-col items-center gap-8 text-white md:items-start'
          )}
        >
          <div className='flex w-full flex-col items-center gap-8 md:mb-2 md:flex-row md:justify-between md:gap-0'>
            <Link href='/'>
              <Image
                width={197}
                height={27}
                src='/images/logo-light.png'
                alt='Designo Logo'
              />
            </Link>
            <Separator theme='light' className='md:hidden' />
            <NavMenu className='text-center' />
          </div>
          <Separator theme='light' className='hidden md:block' />
          <div className='flex w-full flex-col items-center gap-8 md:flex-row md:justify-between md:gap-0'>
            <p className='inline-flex flex-col text-center text-white/50'>
              <span className='font-bold'> Designo Central Office</span>
              3886 Wellington Street <br />
              Toronto, Ontario M9C 3J5
            </p>
            <p className='inline-flex flex-col text-center text-white/50'>
              <span className='font-bold'> Contact Us (Central Office)</span>
              P : +1 253-863-8967 <br />M : contact@designo.co
            </p>
            <nav className='md:self-end'>
              <ul className='flex items-center gap-4'>
                <li>
                  <Link href='/'>
                    <FacebookLogo className='transition-colors hover:fill-secondary-peach-light' />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <YoutubeLogo className='transition-colors hover:fill-secondary-peach-light' />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <TwitterLogo className='transition-colors hover:fill-secondary-peach-light' />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <PinterestLogo className='transition-colors hover:fill-secondary-peach-light' />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <InstagramLogo className='transition-colors hover:fill-secondary-peach-light' />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </footer>
    </>
  );
}
