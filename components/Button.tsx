import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const button = cva(
  'uppercase text-h4 px-5 py-4 rounded-lg tracking-[1px] transition-all font-medium',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-white text-secondary-dark-grey hover:bg-secondary-peach-light hover:text-primary-white',
        secondary:
          'bg-primary-peach text-primary-white hover:bg-secondary-peach-light',
      },
    },
  }
);

interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export default function Button({
  children,
  variant,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={button({ className, variant })} {...props}>
      {children}
    </button>
  );
}
