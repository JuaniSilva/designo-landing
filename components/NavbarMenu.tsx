'use client';

import { useEffect, useState } from 'react';
import HamburguerIcon from './icons/HamburgerIcon';
import { CloseIcon } from './icons/CloseIcon';
import { cn } from '@/lib/utils';
import { stagger, useAnimate } from 'framer-motion';

const menuItems = [
  { label: 'Our Company', key: 'ourCompany', href: '/about' },
  { label: 'Locations', key: 'locations', href: '/locations' },
  { label: 'Contact', key: 'contact', href: '/contact' },
];

export default function NavbarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (isOpen) {
      animate([
        [
          scope.current,
          {
            transform: 'translateY(0%)',
          },
          { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
        ],
        [
          'li',
          { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
          { delay: stagger(0.05), at: '-0.1' },
        ],
      ]);
    } else {
      animate([
        [
          'li',
          { transform: 'scale(0.5)', opacity: 0, filter: 'blur(10px)' },
          { delay: stagger(0.05) },
        ],
        [
          scope.current,
          {
            transform: 'translateY(-100%)',
          },
          { at: '-0.1' },
        ],
      ]);
    }
  }, [isOpen]);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
        {isOpen ? <CloseIcon /> : <HamburguerIcon />}
      </button>
      <div
        ref={scope}
        className={cn(
          'absolute left-0 top-24 -z-10 grid w-full bg-primary-black md:static'
        )}
      >
        <ul className='flex flex-col gap-8 overflow-hidden px-6 py-12'>
          {menuItems.map((item) => (
            <li
              key={item.key}
              className='origin-[-20px_50%] text-mobile-menu uppercase tracking-2px text-white'
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
