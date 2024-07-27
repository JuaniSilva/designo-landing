import Link from 'next/link';
import Heading from './Heading';

export interface ShowcaseProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}
export default function Showcase({
  title,
  description,
  image,
  alt,
}: ShowcaseProps) {
  return (
    <Link
      href='#'
      className='group flex flex-col overflow-hidden rounded-2xl md:flex-row md:items-center lg:flex-col'
    >
      <figure className='md:flex-1'>
        <img
          src={image}
          alt={alt}
          className='max-h-[320px] w-full max-w-full'
        />
      </figure>
      <div className='flex h-full flex-col items-center justify-center space-y-4 bg-showcase p-8 text-center transition-colors group-hover:bg-primary-peach md:flex-1'>
        <Heading
          level='3'
          className='uppercase text-primary-peach transition-colors group-hover:text-white'
        >
          {title}
        </Heading>
        <p className='transition-colors group-hover:text-white'>
          {description}
        </p>
      </div>
    </Link>
  );
}
