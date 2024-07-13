import Image from 'next/image';
import Separator from './Separator';
import NavMenu from './NavMenu';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='flex flex-col items-center gap-8 bg-primary-black px-6 pb-16 pt-[253px] text-white'>
      <Image
        width={197}
        height={27}
        src='/images/logo-light.png'
        alt='Designo Logo'
      />
      <Separator theme='light' />
      <NavMenu className='text-center' />
      <p className='inline-flex flex-col text-center text-white/50'>
        <span className='font-bold'> Designo Central Office</span>
        3886 Wellington Street <br />
        Toronto, Ontario M9C 3J5
      </p>
      <p className='inline-flex flex-col text-center text-white/50'>
        <span className='font-bold'> Contact Us (Central Office)</span>
        P : +1 253-863-8967 <br />M : contact@designo.co
      </p>
      <nav>
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
    </footer>
  );
}
