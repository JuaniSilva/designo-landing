import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import React, { ButtonHTMLAttributes } from 'react';

const button = cva(
  'uppercase text-h4 px-5 py-4 rounded-lg tracking-[1px] transition-colors duration-200 font-medium',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-white text-secondary-dark-grey hover:bg-secondary-peach-light hover:text-primary-white',
        secondary:
          'bg-primary-peach text-primary-white hover:bg-secondary-peach-light',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  asLink?: boolean;
  href?: string;
}

export default function Button({
  children,
  variant,
  asLink,
  href,
  className,
  ...props
}: ButtonProps) {
  if (asLink && href) {
    return (
      <Link href={href} className={cn(button({ variant }), className)}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cn(button({ variant }), className)} {...props}>
      {children}
    </button>
  );
}
