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
    <div className='overflow-hidden rounded-2xl'>
      <figure>
        <img src={image} alt={alt} className='max-h-[320px] max-w-full' />
      </figure>
      <div className='bg-showcase flex flex-col items-center space-y-4 p-8 text-center'>
        <Heading level='3' className='uppercase text-primary-peach'>
          {title}
        </Heading>
        <p className=''>{description}</p>
      </div>
    </div>
  );
}
