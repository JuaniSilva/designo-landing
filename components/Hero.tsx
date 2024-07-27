import Button from './Button';
import Heading from './Heading';

export default function Hero() {
  return (
    <section className='relative mx-auto h-[843px] w-full max-w-content overflow-hidden bg-primary-peach bg-hero-pattern bg-hero-pattern-position bg-no-repeat px-mobile-horizontal-spacing pt-20 text-white md:rounded-2xl lg:flex lg:max-h-[640px] lg:bg-right lg:px-24 lg:py-[145px]'>
      <div className='w-full text-center lg:flex-[2] lg:text-left'>
        <Heading level='1' className='mx-auto max-w-[573px] lg:mx-0'>
          Award-winning custom designs and digital branding solutions
        </Heading>
        <p className='mx-auto mb-5 mt-4 max-w-[327px] text-body-small md:max-w-[420px] lg:mx-0 lg:text-body'>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button variant='primary' className='mt-10'>
          Learn More
        </Button>
      </div>
      <figure className='w-full translate-y-24 md:-translate-y-28 lg:flex-1 lg:translate-x-10 lg:translate-y-[60px]'>
        <img
          src='/images/home/desktop/image-hero-phone.png'
          alt='phone with a design on the screen'
          className='mx-auto scale-[175%] md:scale-100 lg:scale-[200%]'
        />
      </figure>
    </section>
  );
}
