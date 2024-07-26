import Container from './Container';
import Value, { ValueProps } from './Value';

export default function DesignoValues() {
  const values: ValueProps[] = [
    {
      src: '/images/home/desktop/illustration-passionate.svg',
      alt: 'passionate icon',
      title: 'Passionate',
      bgRotation: 0,
      description:
        'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
    },
    {
      src: '/images/home/desktop/illustration-resourceful.svg',
      alt: 'resourceful icon',
      title: 'Resourceful',
      bgRotation: -90,
      description:
        'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
    },
    {
      src: '/images/home/desktop/illustration-friendly.svg',
      alt: 'friendly icon',
      title: 'Friendly',
      bgRotation: 90,
      description:
        'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
    },
  ];
  return (
    <Container className='px-mobile-horizontal-spacing md:px-0'>
      <div className='mt-14 grid grid-cols-1 gap-20 md:gap-8 lg:grid-cols-2 lg:grid-rows-2'>
        {values.map((value) => (
          <Value key={value.title} {...value} />
        ))}
      </div>
    </Container>
  );
}
