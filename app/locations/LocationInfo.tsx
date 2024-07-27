/* eslint-disable @next/next/no-img-element */
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import { cn } from '@/lib/utils';

type BaseImage = {
  src: string;
};

type DefaultImage = BaseImage & {
  isDefault: true;
  alt: string;
};

type NonDefaultImage = BaseImage & {
  isDefault?: false;
  alt?: string;
  media: string;
};

export type ResponsiveImage = DefaultImage | NonDefaultImage;

interface LocationInfoProps {
  title: string;
  children: React.ReactNode;
  images: ResponsiveImage[];
  className?: string;
  reverse?: boolean;
}

export default function LocationInfo({
  title,
  children,
  images,
  className,
  reverse = false,
}: LocationInfoProps) {
  return (
    <Container
      tag='section'
      className={cn('lg:grid lg:grid-cols-3 lg:gap-[30px]', className)}
    >
      <figure
        className={cn(
          'row-start-1 h-full overflow-hidden md:mb-8 md:rounded-2xl',
          reverse ? 'col-start-3' : 'col-start-1'
        )}
      >
        <picture>
          {images.map((image) => {
            if (!image.isDefault) {
              return (
                <source
                  key={image.src}
                  media={image.media}
                  srcSet={image.src}
                />
              );
            }
            return (
              <img
                key={image.src}
                src={image.src}
                className='h-full w-full object-cover'
                alt={image.alt}
              />
            );
          })}
        </picture>
      </figure>
      <div
        className={`row-start-1 overflow-hidden bg-showcase bg-pattern-three-circles bg-left-top bg-no-repeat px-6 py-20 text-center md:rounded-2xl md:text-left ${reverse ? 'col-start-1 col-end-3' : 'col-start-2 col-end-4'}`}
      >
        <div className='mx-auto md:max-w-[572px]'>
          <Heading className='mb-6 inline-block text-primary-peach' level='2'>
            {title}
          </Heading>
          <div className='flex w-full flex-col md:mx-auto md:flex-row md:gap-6'>
            {children}
          </div>
        </div>
      </div>
    </Container>
  );
}
