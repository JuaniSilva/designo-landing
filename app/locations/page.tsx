import LocationInfo, { ResponsiveImage } from './LocationInfo';

export default function Home() {
  const canadaImages: ResponsiveImage[] = [
    {
      media: '(min-width: 768px) and (max-width: 1023px)',
      src: '/images/locations/tablet/image-map-canada.png',
    },
    {
      src: '/images/locations/desktop/image-map-canada.png',
      isDefault: true,
      alt: 'Canada map',
    },
  ];

  const australiaImages: ResponsiveImage[] = [
    {
      media: '(min-width: 768px) and (max-width: 1023px)',
      src: '/images/locations/tablet/image-map-australia.png',
    },
    {
      src: '/images/locations/desktop/image-map-australia.png',
      isDefault: true,
      alt: 'Australia map',
    },
  ];

  const ukImages: ResponsiveImage[] = [
    {
      media: '(min-width: 768px) and (max-width: 1023px)',
      src: '/images/locations/tablet/image-map-uk.png',
    },
    {
      src: '/images/locations/desktop/image-map-uk.png',
      isDefault: true,
      alt: 'UK map',
    },
  ];

  return (
    <main className='relative min-h-screen md:px-tablet-horizontal-spacing'>
      <div className='space-y-10'>
        <LocationInfo title='Canada' images={canadaImages}>
          <p className='flex flex-1 flex-col text-center md:text-left'>
            <span className='font-bold'> Designo Central Office</span>
            3886 Wellington Street
            <br />
            Toronto, Ontario M9C 3J5
          </p>
          <p className='flex flex-1 flex-col text-center md:text-left'>
            <span className='font-bold'> Contact</span>
            P : +1 253-863-8967 <br />M : contact@designo.co
          </p>
        </LocationInfo>
        <LocationInfo title='Australia' images={australiaImages}>
          <p className='flex flex-1 flex-col text-center md:text-left'>
            <span className='font-bold'> Designo AU Office</span>
            19 Balonne Street
            <br />
            New South Wales 2443
          </p>
          <p className='flex flex-1 flex-col text-center md:text-left'>
            <span className='font-bold'> Contact</span>
            P : (02) 6720 9092 <br />M : contact@designo.au
          </p>
        </LocationInfo>
        <LocationInfo title='United Kingdom' images={ukImages}>
          <p className='flex flex-1 flex-col text-center md:text-left'>
            <span className='font-bold'> Designo UK Office</span>
            13 Colorado Way
            <br />
            Rhyd-y-fro SA8 9GA
          </p>
          <p className='flex flex-1 flex-col text-center md:text-left'>
            <span className='font-bold'> Contact</span>
            P : 078 3115 1400 <br /> M : contact@designo.uk
          </p>
        </LocationInfo>
      </div>
    </main>
  );
}
