import Button from './Button';

export default function CTA() {
  return (
    <div className='-mt-10 translate-y-1/2 px-5'>
      <section className='lg:tex-left flex flex-col items-center rounded-2xl bg-primary-peach bg-cta-pattern bg-cta-position px-5 py-16'>
        <span className='mb-8 text-center text-white'>
          <span className='text-CTA'>Let’s talk about your project</span>
          <p className='mt-[6px]'>
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
