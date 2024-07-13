import Link from 'next/link';
import Heading from './Heading';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  to: string;
  image: string;
}
export default function ProjectCard({ title, to, image }: ProjectCardProps) {
  return (
    <Link href={to}>
      <div
        className='flex h-[250px] w-full flex-col items-center justify-center gap-3 rounded-2xl bg-primary-black/50 bg-cover bg-center bg-no-repeat uppercase text-white bg-blend-multiply'
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
