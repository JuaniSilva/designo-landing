/* eslint-disable @next/next/no-img-element */
import Container from '@/components/Container';
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
}

export default function LocationInfo({
  title,
  children,
  images,
  className,
}: LocationInfoProps) {
  return (
    <Container tag='section' className={cn(className)}>
      <figure className='overflow-hidden md:mb-8 md:rounded-2xl'>
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
                className='h-auto w-full'
                alt={image.alt}
              />
            );
          })}
        </picture>
      </figure>
      <div
        className={`overflow-hidden bg-showcase bg-pattern-three-circles bg-left-top bg-no-repeat px-6 py-20 text-center md:rounded-2xl md:text-left`}
      >
        <div className='mx-auto md:max-w-[572px]'>
          <span className='mb-6 inline-block text-CTA text-primary-peach'>
            {title}
          </span>
          <div className='flex w-full flex-col md:mx-auto md:flex-row md:gap-6'>
            {children}
          </div>
        </div>
      </div>
    </Container>
  );
}
