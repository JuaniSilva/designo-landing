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
    <section className='bg-intro-web bg-intro-web-position relative overflow-hidden bg-primary-peach bg-no-repeat py-[105px] text-white'>
      <Container className='px-6 text-center'>
        <Heading level='1'>{title}</Heading>
        <p className='mb-5 mt-4 max-w-[327px] text-body-small lg:text-body'>
          {description}
        </p>
      </Container>
    </section>
  );
}
