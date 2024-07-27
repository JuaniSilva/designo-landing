import { ShowcaseProps } from '@/components/Showcase';
import Hero from '../Hero';
import ShowcaseContainer from '@/components/ShowcaseContainer';
import ProjectsContainer from '@/components/ProjectsContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design',
};

export default function Home() {
  const projects: ShowcaseProps[] = [
    {
      title: 'Express',
      description: 'A multi-carrier shipping website for ecommerce businesses',
      image: '/images/web-design/desktop/image-express.jpg',
      alt: 'Express website',
    },
    {
      title: 'Transfer',
      description:
        'Site for low-cost money transfers and sending money within seconds',
      image: '/images/web-design/desktop/image-transfer.jpg',
      alt: 'Transfer website',
    },
    {
      title: 'Photon',
      description:
        'A state-of-the-art music player with high-resolution audio and DSP effects',
      image: '/images/web-design/desktop/image-photon.jpg',
      alt: 'Photon website',
    },
    {
      title: 'Builder',
      description:
        'Connects users with local contractors based on their location',
      image: '/images/web-design/desktop/image-builder.jpg',
      alt: 'Builder website',
    },
    {
      title: 'Blogr',
      description:
        'Blogr is a platform for creating an online blog or publication',
      image: '/images/web-design/desktop/image-blogr.jpg',
      alt: 'Blogr website',
    },
    {
      title: 'Camp',
      description:
        'Get expert training in coding, data, design, and digital marketing',
      image: '/images/web-design/desktop/image-camp.jpg',
      alt: 'Camp website',
    },
  ];
  return (
    <main className='relative min-h-screen md:px-tablet-horizontal-spacing'>
      <Hero
        title='Web Design'
        description='We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
      />
      <img
        src='/images/shared/desktop/bg-pattern-leaf.svg'
        alt='pattern leaf'
        className='absolute left-0 top-[100px] -z-10 hidden lg:block'
      />
      <ShowcaseContainer showcaseItems={projects} />
      <ProjectsContainer className='mb-30 mt-3' />
    </main>
  );
}
