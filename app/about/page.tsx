import InfoContent, { ResponsiveImage } from '@/components/InfoContent';
import Hero from './Hero';
import LocationsContainer from '@/components/LocationsContainer';

export default function Home() {
  const worldClassTalentImages: ResponsiveImage[] = [
    {
      src: '/images/about/tablet/image-world-class-talent.jpg',
      media: '(min-width: 768px) and (max-width: 1023px)',
    },
    {
      src: '/images/about/mobile/image-world-class-talent.jpg',
      alt: 'world class talent',
      isDefault: true,
    },
  ];

  const theRealDealImages: ResponsiveImage[] = [
    {
      src: '/images/about/tablet/image-real-deal.jpg',
      media: '(min-width: 768px) and (max-width: 1023px)',
    },
    {
      src: '/images/about/mobile/image-real-deal.jpg',
      alt: 'person placing pictures in a wall',
      isDefault: true,
    },
  ];

  return (
    <main className='relative min-h-screen md:px-tablet-horizontal-spacing'>
      <Hero
        title='About Us'
        description='Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.'
      />
      <InfoContent
        title='World-class talent'
        images={worldClassTalentImages}
        className='md:mt-30'
      >
        <p>
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
        </p>
        <br />
        <p>
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </p>
      </InfoContent>
      <LocationsContainer />
      <InfoContent title='The real deal' images={theRealDealImages}>
        <p>
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success.
        </p>
        <br />
        <p>
          We are visual storytellers in making brands more meaningful,
          memorable, and accessible. By understanding your customers at a deeper
          level — their wants, needs, and values — we can make your brand stand
          out in a crowded market.
        </p>
      </InfoContent>
    </main>
  );
}
