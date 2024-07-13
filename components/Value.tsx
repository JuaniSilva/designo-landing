import { cn } from '@/lib/utils';
import Heading from './Heading';

export interface ValueProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  className?: string;
  bgRotation?: 90 | 0 | -90;
}

export default function Value({
  src,
  alt,
  title,
  description,
  className,
  bgRotation = 0,
}: ValueProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center md:flex-row md:gap-12',
        className
      )}
    >
      <figure
        className={cn(
          'relative mb-12 aspect-square w-full max-w-[202px] md:mb-0',
          'after:bg-small-circle-pattern after:absolute after:left-1/2 after:top-1/2 after:h-full after:w-full after:-translate-x-1/2 after:-translate-y-1/2 after:bg-cover after:bg-no-repeat',
          bgRotation === 90
            ? 'after:rotate-90'
            : bgRotation === -90
              ? 'after:-rotate-90'
              : ''
        )}
      >
        <img src={src} alt={alt} />
      </figure>
      <div className='flex flex-col items-center md:items-start'>
        <Heading level='3' className='mb-8 uppercase md:mb-4 md:text-left'>
          {title}
        </Heading>
        <p className='text-center md:text-left'>{description}</p>
      </div>
    </div>
  );
}
