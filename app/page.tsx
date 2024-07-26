import DesignoValues from '@/components/DesignoValues';
import Hero from '@/components/Hero';
import ProjectsContainer from '@/components/ProjectsContainer';

export default function Home() {
  return (
    <main className='relative min-h-screen md:px-tablet-horizontal-spacing'>
      <Hero />
      <ProjectsContainer className='my-30' />
      <DesignoValues />
    </main>
  );
}
