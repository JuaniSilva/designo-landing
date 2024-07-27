import { ShowcaseProps } from '@/components/Showcase';
import Hero from '../Hero';
import ShowcaseContainer from '@/components/ShowcaseContainer';
import ProjectsContainer from '@/components/ProjectsContainer';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'App Design',
};

export default function Home() {
  const projects: ShowcaseProps[] = [
    {
      title: 'Airfilter',
      description:
        'Solving the problem of poor indoor air quality by filtering the air',
      image: '/images/app-design/desktop/image-airfilter.jpg',
      alt: 'Airfilter website',
    },
    {
      title: 'Eyecam',
      description:
        'Product that lets you edit your favorite photos and videos at any time',
      image: '/images/app-design/desktop/image-eyecam.jpg',
      alt: 'Eyecam website',
    },
    {
      title: 'Faceit',
      description:
        'Get to meet your favorite internet superstar with the faceit app',
      image: '/images/app-design/desktop/image-faceit.jpg',
      alt: 'Faceit website',
    },
    {
      title: 'Todo',
      description:
        'A todo app that features cloud sync with light and dark mode',
      image: '/images/app-design/desktop/image-todo.jpg',
      alt: 'Todo website',
    },
    {
      title: 'Loopstudios',
      description: 'A VR experience app made for Loopstudios',
      image: '/images/app-design/desktop/image-loopstudios.jpg',
      alt: 'Loopstud',
    },
  ];
  return (
    <main className='relative min-h-screen md:px-tablet-horizontal-spacing'>
      <Hero
        title='App Design'
        description='Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'
      />
      <ShowcaseContainer showcaseItems={projects} />
      <ProjectsContainer className='mb-30 mt-3' />
    </main>
  );
}
