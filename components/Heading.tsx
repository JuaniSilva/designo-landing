import { cva, VariantProps } from 'class-variance-authority';

const heading = cva('font-medium', {
  variants: {
    level: {
      '1': 'text-h1-mobile lg:text-h1 ',
      '2': 'text-h2-mobile tracking-[1.4px] lg:text-h2 lg:tracking-[2px]',
      '3': 'text-h3 tracking-[5px]',
      '4': 'text-h4 tracking-[5px]',
    },
  },
  defaultVariants: {
    level: '1',
  },
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heading> {}

export default function Heading({
  children,
  level,
  className,
  ...props
}: HeadingProps) {
  const Tag: React.ElementType = `h${level || '1'}`;

  return (
    <Tag className={heading({ level, className })} {...props}>
      {children}
    </Tag>
  );
}
