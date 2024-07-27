import Button from './Button';
import Container from './Container';

export default function CTA() {
  return (
    <Container className='-mt-20 translate-y-1/2 px-mobile-horizontal-spacing md:translate-y-1/4 md:px-tablet-horizontal-spacing lg:px-0'>
      <section className='md:bg-cta-position-tablet flex flex-col items-center rounded-2xl bg-primary-peach bg-cta-pattern bg-cta-position bg-no-repeat px-5 py-16 lg:flex-row lg:px-24'>
        <span className='mb-8 text-center text-white lg:w-fit lg:text-left'>
          <span className='max-w-[335px] text-CTA md:text-CTA-tablet'>
            Let’s talk about <br /> your project
          </span>
          <p className='mx-auto mt-[6px] max-w-[450px] lg:mx-0'>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </span>
        <Button variant='primary' className='mx-auto lg:mx-0 lg:ml-auto'>
          Get in touch
        </Button>
      </section>
    </Container>
  );
}
