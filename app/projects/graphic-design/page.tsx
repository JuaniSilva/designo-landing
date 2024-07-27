import { ShowcaseProps } from '@/components/Showcase';
import Hero from '../Hero';
import ShowcaseContainer from '@/components/ShowcaseContainer';
import ProjectsContainer from '@/components/ProjectsContainer';

export default function Home() {
  const projects: ShowcaseProps[] = [
    {
      title: 'Tim Brown',
      description:
        'A book cover designed for Tim Brown’s new release, titled Change',
      image: '/images/graphic-design/desktop/image-change.jpg',
      alt: 'Tim Brown book cover',
    },
    {
      title: 'Boxed Water',
      description: 'A simple packaging concept made for Boxed Water',
      image: '/images/graphic-design/desktop/image-boxed-water.jpg',
      alt: 'Boxed Water packaging',
    },
    {
      title: 'Science!',
      description:
        'A poster made in collaboration with the Federal Art Project',
      image: '/images/graphic-design/desktop/image-science.jpg',
      alt: 'Science! poster',
    },
  ];

  return (
    <main className='relative min-h-screen md:px-tablet-horizontal-spacing'>
      <Hero
        title='Graphic Design'
        description='We deliver eye-catching branding materials that are tailored to meet your business objectives.'
      />
      <ShowcaseContainer showcaseItems={projects} />
      <ProjectsContainer className='mb-30 mt-3' />
    </main>
  );
}
