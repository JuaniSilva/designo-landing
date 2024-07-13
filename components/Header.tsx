import Image from 'next/image';
import Container from './Container';
import Link from 'next/link';
import { MenuToggle } from './MenuToggle';

export default function Header() {
  return (
    <header className='absolute z-10 h-24 w-full bg-white'>
      <Container
        tag='nav'
        className='z-0 flex h-full items-center justify-between px-5'
      >
        <Link href='/'>
          <Image
            width={197}
            height={27}
            src='/images/logo-dark.png'
            alt='Designo Logo'
          />
        </Link>
        <MenuToggle className='md:hidden' />
      </Container>
    </header>
  );
}
