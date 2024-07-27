import DesignoValues from '@/components/DesignoValues';
import Hero from '@/components/Hero';
import ProjectsContainer from '@/components/ProjectsContainer';

export default function Home() {
  return (
    <main className='relative min-h-screen md:px-tablet-horizontal-spacing'>
      <img
        src='/images/shared/desktop/bg-pattern-leaf.svg'
        alt='pattern leaf'
        className='absolute left-0 top-[320px] -z-10 hidden lg:block'
      />
      <Hero />
      <ProjectsContainer className='my-30 lg:my-40' />
      <DesignoValues />
      <img
        src='/images/shared/desktop/bg-pattern-leaf.svg'
        alt='pattern leaf'
        className='absolute -bottom-[275px] right-0 -z-10 hidden rotate-180 lg:block'
      />
    </main>
  );
}
