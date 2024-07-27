import Link from 'next/link';
import Heading from './Heading';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  to: string;
  image: string;
  className?: string;
}
export default function ProjectCard({
  title,
  to,
  image,
  className,
}: ProjectCardProps) {
  return (
    <Link href={to} className={cn(className, 'overflow-hidden rounded-2xl')}>
      <div
        className='overlay flex h-[250px] w-full flex-col items-center justify-center gap-3 bg-primary-black/50 bg-cover bg-center bg-no-repeat uppercase text-white bg-blend-multiply md:h-[200px] lg:h-full lg:min-h-[300px]'
        style={{ backgroundImage: `url("${image}")` }}
      >
        <Heading level='2' className=''>
          {title}
        </Heading>
        <span className='inline-flex items-center gap-4'>
          <Heading level='4'>View Projects</Heading>
          <Image
            src='/images/shared/desktop/icon-right-arrow.svg'
            alt='right arrow'
            width={4}
            height={8}
            className='h-2 w-2'
          />
        </span>
      </div>
    </Link>
  );
}
