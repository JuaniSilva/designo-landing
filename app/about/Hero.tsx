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
    <div className='overflow-hidden md:rounded-2xl'>
      <figure>
        <picture>
          <source
            media='(min-width: 768px) and (max-width: 1023px)'
            srcSet='/images/about/tablet/image-about-hero.jpg'
          />
          <img
            src='/images/about/mobile/image-about-hero.jpg'
            alt='desk with a computer and a plant'
            className='w-full'
          />
        </picture>
      </figure>
      <section className='md:bg-about-hero-desktop-position relative overflow-hidden bg-primary-peach bg-about-hero bg-about-hero-position bg-no-repeat py-20 text-white md:bg-about-hero-desktop'>
        <Container className='px-6 text-center'>
          <Heading level='1' className='mb-8'>
            {title}
          </Heading>
          <p className='mx-auto max-w-[327px] text-body-small md:max-w-[570px] md:text-body'>
            {description}
          </p>
        </Container>
      </section>
    </div>
  );
}
