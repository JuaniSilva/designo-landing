'use client';

import { useEffect, useState } from 'react';
import HamburguerIcon from './icons/HamburgerIcon';
import { CloseIcon } from './icons/CloseIcon';
import { cn } from '@/lib/utils';
import { MotionValueSegment, stagger, useAnimate } from 'framer-motion';
import { MenuToggle } from './MenuToggle';

const menuItems = [
  { label: 'Our Company', key: 'ourCompany', href: '/about' },
  { label: 'Locations', key: 'locations', href: '/locations' },
  { label: 'Contact', key: 'contact', href: '/contact' },
];

export default function NavbarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            'ul',
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
        ]
      : [
          [
            'li',
            { transform: 'scale(0.5)', opacity: 0, filter: 'blur(10px)' },
            { delay: stagger(0.05, { from: 'last' }), at: '<' },
          ],
          [
            'ul',
            {
              transform: 'translateY(-100%)',
            },
            { at: '-0.1' },
          ],
        ];

    animate([
      [
        'path.top',
        { d: isOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5' },
        { at: '<' },
      ],
      ['path.middle', { opacity: isOpen ? 0 : 1 }, { at: '<' }],
      [
        'path.bottom',
        { d: isOpen ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346' },
        { at: '<' },
      ],
      ...(menuAnimations as MotionValueSegment[]),
    ]);
  }, [isOpen]);

  return (
    <div ref={scope}>
      <MenuToggle toggle={() => setIsOpen(!isOpen)} className='md:hidden' />
      <ul className='absolute left-0 top-24 -z-10 flex w-full -translate-y-full flex-col gap-8 overflow-hidden bg-primary-black px-6 py-12 md:static'>
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
  );
}
