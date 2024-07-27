import { cn } from '@/lib/utils';
import { menuItems } from './MobileMenu';
import Link from 'next/link';

export default function NavMenu({ className }: { className?: string }) {
  return (
    <nav className={cn('text-white', className)}>
      <ul className='flex w-full flex-col gap-8 font-normal md:flex-row md:gap-[42px]'>
        {menuItems.map((item) => (
          <li
            key={item.key}
            className='text-nav uppercase tracking-2px hover:underline'
          >
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
