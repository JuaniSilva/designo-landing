import Container from '@/components/Container';
import Heading from '@/components/Heading';

export default function Hero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Container className='overflow-hidden md:rounded-2xl lg:flex lg:flex-row-reverse'>
      <figure>
        <picture>
          <source
            media='(min-width: 768px) and (max-width: 1023px)'
            srcSet='/images/about/tablet/image-about-hero.jpg'
          />
          <img
            src='/images/about/mobile/image-about-hero.jpg'
            alt='desk with a computer and a plant'
            className='h-full w-full lg:aspect-square lg:w-[475px]'
          />
        </picture>
      </figure>
      <section className='md:bg-about-hero-tablet-position lg:bg-about-hero-desktop-position relative flex w-full flex-col justify-center overflow-hidden bg-primary-peach bg-about-hero bg-about-hero-position bg-no-repeat px-6 py-20 text-center text-white md:bg-about-hero-desktop lg:max-w-[640px] lg:pl-24 lg:text-left'>
        <Heading level='1' className='mb-8'>
          {title}
        </Heading>
        <p className='mx-auto max-w-[327px] text-body-small md:max-w-[570px] md:text-body lg:mx-0 lg:max-w-[458px]'>
          {description}
        </p>
      </section>
    </Container>
  );
}
