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
    <section className='relative mx-auto flex w-full max-w-content flex-col items-center overflow-hidden bg-primary-peach bg-intro-web bg-intro-web-position bg-no-repeat py-[105px] text-white md:rounded-2xl lg:py-[68px] lg:text-center'>
      <Heading level='1'>{title}</Heading>
      <p className='mx-auto mt-4 max-w-[327px] text-body-small md:max-w-[375px] lg:max-w-[400px] lg:text-body'>
        {description}
      </p>
    </section>
  );
}
