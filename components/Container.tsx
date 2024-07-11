import { cn } from '@/lib/utils';

export default function Container({
  className,
  children,
  tag,
}: {
  className?: string;
  children?: React.ReactNode;
  tag?: React.ElementType;
}) {
  const Tag: React.ElementType = tag || 'div';
  return (
    <Tag className={cn('max-w-content mx-auto w-full', className)}>
      {children}
    </Tag>
  );
}
