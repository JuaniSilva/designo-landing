import { cn } from '@/lib/utils';
import Heading from './Heading';
import Button from './Button';

export interface LocationProps {
  location: string;
  to: string;
  locationId?: string;
  bgRotation?: 90 | 0 | -90;
  src: string;
  alt: string;
  className?: string;
}
export default function Location({
  location,
  locationId,
  bgRotation = 0,
  src,
  to,
  alt,
  className,
}: LocationProps) {
  return (
    <div
      id={locationId}
      className={cn('flex flex-col items-center', className)}
    >
      <figure
        className={cn(
          'relative mb-12 aspect-square w-full max-w-[202px]',
          'after:absolute after:left-1/2 after:top-1/2 after:h-full after:w-full after:-translate-x-1/2 after:-translate-y-1/2 after:bg-small-circle-pattern after:bg-cover after:bg-no-repeat',
          bgRotation === 90
            ? 'after:rotate-90'
            : bgRotation === -90
              ? 'after:-rotate-90'
              : ''
        )}
      >
        <img src={src} alt={alt} />
      </figure>
      <div className='flex flex-col items-center'>
        <Heading level='3' className='mb-8 uppercase'>
          {location}
        </Heading>
        <Button asLink href={to} variant='secondary'>
          See Location
        </Button>
      </div>
    </div>
  );
}
