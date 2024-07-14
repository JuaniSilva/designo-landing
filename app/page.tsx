import DesignoValues from '@/components/DesignoValues';
import Hero from '@/components/Hero';
import ProjectsContainer from '@/components/ProjectsContainer';

export default function Home() {
  return (
    <main className='relative min-h-screen'>
      <Hero />
      <ProjectsContainer className='py-30' />
      <DesignoValues />
    </main>
  );
}
