'use client';
import { cn } from '@/lib/utils';
import ProjectCard from './ProjectCard';
import Container from './Container';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import useWindowSize from '@/hooks/useWindowSize';

export default function ProjectsContainer({
  className,
}: {
  className?: string;
}) {
  const path = usePathname();

  const { device } = useWindowSize();

  const projects = useMemo(
    () => [
      {
        title: 'Web Design',
        key: 'web-design',
        to: '/projects/web-design',
        image: `/images/home/${device}/image-web-design${device === 'desktop' ? (path.includes('projects') ? '-small' : '-large') : ''}.jpg`,
        className: path.includes('projects')
          ? ''
          : 'lg:col-start-1 lg:row-span-2',
      },
      {
        title: 'App Design',
        key: 'app-design',
        to: '/projects/app-design',
        image: `/images/home/${device}/image-app-design.jpg`,
        className: path.includes('projects')
          ? 'lg:col-start-1'
          : 'lg:col-start-2 lg:row-span-1',
      },
      {
        title: 'Graphic Design',
        key: 'graphic-design',
        to: '/projects/graphic-design',
        image: `/images/home/${device}/image-graphic-design.jpg`,
        className: path.includes('projects')
          ? 'lg:col-start-2'
          : 'lg:col-start-2 lg:row-start-2',
      },
    ],
    [path, device]
  );

  const filteredProjects = useMemo(
    () => projects.filter((project) => project.to !== path),
    [path, projects]
  );

  return (
    <Container
      className={cn(
        'grid grid-flow-row gap-6 px-mobile-horizontal-spacing md:px-0 lg:grid-flow-col lg:grid-cols-2',
        filteredProjects.length < 3 ? 'lg:grid-rows-1' : 'lg:grid-rows-2',
        className
      )}
    >
      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          to={project.to}
          image={project.image}
          className={project.className}
        />
      ))}
    </Container>
  );
}
