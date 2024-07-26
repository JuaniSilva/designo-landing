'use client';
import { cn } from '@/lib/utils';
import ProjectCard from './ProjectCard';
import Container from './Container';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export default function ProjectsContainer({
  className,
}: {
  className?: string;
}) {
  const path = usePathname();

  const projects = useMemo(
    () => [
      {
        title: 'Web Design',
        key: 'web-design',
        to: '/projects/web-design',
        image: '/images/home/mobile/image-web-design.jpg',
      },
      {
        title: 'App Design',
        key: 'app-design',
        to: '/projects/app-design',
        image: '/images/home/mobile/image-app-design.jpg',
      },
      {
        title: 'Graphic Design',
        key: 'graphic-design',
        to: '/projects/graphic-design',
        image: '/images/home/mobile/image-graphic-design.jpg',
      },
    ],
    []
  );

  const filteredProjects = useMemo(
    () => projects.filter((project) => project.to !== path),
    [path, projects]
  );

  return (
    <Container
      className={cn('grid grid-flow-row gap-6 px-6 md:px-0', className)}
    >
      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          to={project.to}
          image={project.image}
        />
      ))}
    </Container>
  );
}
