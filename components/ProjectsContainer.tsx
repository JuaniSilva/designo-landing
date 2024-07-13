import { cn } from '@/lib/utils';
import ProjectCard from './ProjectCard';
import Container from './Container';

export default function ProjectsContainer({
  className,
}: {
  className?: string;
}) {
  const projects = [
    {
      title: 'Web Design',
      key: 'web-design',
      to: '/web-design',
      image: '/images/home/mobile/image-web-design.jpg',
    },
    {
      title: 'App Design',
      key: 'app-design',
      to: '/app-design',
      image: '/images/home/mobile/image-app-design.jpg',
    },
    {
      title: 'Graphic Design',
      key: 'graphic-design',
      to: '/graphic-design',
      image: '/images/home/mobile/image-graphic-design.jpg',
    },
  ];
  return (
    <Container className={cn('grid grid-flow-row gap-5 px-5', className)}>
      {projects.map((project) => (
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
