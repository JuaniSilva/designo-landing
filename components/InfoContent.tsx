import { cn } from '@/lib/utils';
import Container from './Container';

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

interface InfoContentProps {
  title: string;
  children: React.ReactNode;
  images: ResponsiveImage[];
  className?: string;
  reverse?: boolean;
}

export default function InfoContent({
  title,
  children,
  images,
  className,
  reverse = false,
}: InfoContentProps) {
  return (
    <Container
      tag='section'
      className={cn(
        'overflow-hidden md:rounded-2xl lg:grid',
        reverse ? 'lg:grid-cols-[1fr_475px]' : 'lg:grid-cols-[475px_1fr]',
        className
      )}
    >
      <figure
        className={cn(reverse ? 'col-start-2' : 'col-start-1', 'row-start-1')}
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
                className='h-auto w-full'
                alt={image.alt}
              />
            );
          })}
        </picture>
      </figure>
      <div
        className={`row-start-1 flex flex-col bg-showcase bg-pattern-three-circles bg-left-top bg-no-repeat px-6 py-20 text-center lg:justify-center lg:px-24 lg:py-[154px] lg:text-left ${reverse ? 'col-start-1' : 'col-start-2'}`}
      >
        <span className='mb-6 block text-CTA text-primary-peach'>{title}</span>
        <div className='md:mx-auto md:max-w-[572px]'>{children}</div>
      </div>
    </Container>
  );
}
