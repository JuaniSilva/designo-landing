'use client';

import { MobileMenuContext } from '@/context/useMobileMenuContext';
import { useContext } from 'react';

const Path = (props: any) => (
  <path
    fill='#1D1C1E'
    strokeWidth='3'
    stroke='#1D1C1E'
    strokeLinecap='round'
    {...props}
  />
);

export const MenuToggle = ({ className }: { className?: string }) => {
  const { setIsOpen } = useContext(MobileMenuContext);

  return (
    <button onClick={() => setIsOpen((val) => !val)} className={className}>
      <svg width='23' height='18' viewBox='0 0 23 18' className='hamburguer'>
        <Path
          d='M 2 2.5 L 20 2.5'
          className='top'
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path d='M 2 9.423 L 20 9.423' opacity='1' className='middle' />
        <Path
          d='M 2 16.346 L 20 16.346'
          className='bottom'
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  );
};
