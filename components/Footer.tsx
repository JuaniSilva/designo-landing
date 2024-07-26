'use client';
import Image from 'next/image';
import Separator from './Separator';
import NavMenu from './NavMenu';
import Link from 'next/link';
import CTA from './CTA';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Footer() {
  const path = usePathname();
  const shouldIncludeCTA = path !== '/contact';
  return (
    <>
      {shouldIncludeCTA && <CTA />}
      <footer
        className={cn(
          'flex flex-col items-center gap-8 bg-primary-black px-mobile-horizontal-spacing pb-16 pt-[253px] text-white md:items-start md:px-tablet-horizontal-spacing',
          !shouldIncludeCTA && 'pt-16'
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
        <div className='flex w-full flex-col items-center gap-8 md:flex-row md:justify-evenly md:gap-0'>
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
            <ul className='flex gap-4'>
              <li>
                <Link href='/'>
                  <Image
                    width={24}
                    height={24}
                    src='/images/shared/desktop/icon-facebook.svg'
                    alt='Facebook'
                  />
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <Image
                    width={24}
                    height={24}
                    src='/images/shared/desktop/icon-youtube.svg'
                    alt='Youtube'
                  />
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <Image
                    width={24}
                    height={24}
                    src='/images/shared/desktop/icon-twitter.svg'
                    alt='Twitter'
                  />
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <Image
                    width={24}
                    height={24}
                    src='/images/shared/desktop/icon-pinterest.svg'
                    alt='Pinterest'
                  />
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <Image
                    width={24}
                    height={24}
                    src='/images/shared/desktop/icon-instagram.svg'
                    alt='Instagram'
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}
