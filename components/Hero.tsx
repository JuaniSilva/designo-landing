import Button from './Button';
import Heading from './Heading';

export default function Hero() {
  return (
    <section className='relative h-[843px] overflow-hidden bg-primary-peach bg-hero-pattern bg-hero-pattern-position bg-no-repeat text-white md:rounded-2xl'>
      <div className='w-full px-6 pt-20 text-center'>
        <Heading level='1' className='mx-auto max-w-[573px]'>
          Award-winning custom designs and digital branding solutions
        </Heading>
        <p className='mx-auto mb-5 mt-4 max-w-[327px] text-body-small md:max-w-[410px] lg:text-body'>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button variant='primary'>Learn More</Button>
      </div>
      <figure className='translate-y-24 md:-translate-y-28'>
        <img
          src='/images/home/desktop/image-hero-phone.png'
          alt='phone with a design on the screen'
          className='mx-auto scale-[175%] md:scale-100'
        />
      </figure>
    </section>
  );
}
