import Button from './Button';

export default function CTA() {
  return (
    <div className='-mt-20 translate-y-1/2 px-mobile-horizontal-spacing md:px-tablet-horizontal-spacing'>
      <section className='lg:tex-left md:bg-cta-position-tablet flex flex-col items-center rounded-2xl bg-primary-peach bg-cta-pattern bg-cta-position bg-no-repeat px-5 py-16'>
        <span className='mb-8 text-center text-white'>
          <span className='max-w-[335px] text-CTA md:text-CTA-tablet'>
            Let’s talk about <br /> your project
          </span>
          <p className='mx-auto mt-[6px] max-w-[450px]'>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </span>
        <Button variant='primary' className='mx-auto'>
          Get in touch
        </Button>
      </section>
    </div>
  );
}
