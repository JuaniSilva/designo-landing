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
    <section className='relative overflow-hidden bg-primary-peach bg-intro-web bg-intro-web-position bg-no-repeat py-[105px] text-white md:rounded-2xl'>
      <Container className='px-6 text-center'>
        <Heading level='1'>{title}</Heading>
        <p className='mx-auto mb-5 mt-4 max-w-[327px] text-body-small md:max-w-[375px] lg:text-body'>
          {description}
        </p>
      </Container>
    </section>
  );
}
