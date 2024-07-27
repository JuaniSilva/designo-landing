import Container from './Container';
import Location, { LocationProps } from './Location';

const locations: LocationProps[] = [
  {
    location: 'Canada',
    to: '/locations#canada',
    locationId: 'canada',
    src: '/images/shared/desktop/illustration-canada.svg',
    alt: 'canada',
    bgRotation: 90,
  },
  {
    location: 'Australia',
    to: '/locations#australia',
    locationId: 'australia',
    src: '/images/shared/desktop/illustration-australia.svg',
    alt: 'australia',
    bgRotation: 0,
  },
  {
    location: 'United Kingdom',
    to: '/locations#united-kingdom',
    locationId: 'united-kingdom',
    src: '/images/shared/desktop/illustration-united-kingdom.svg',
    alt: 'united kingdom',
    bgRotation: -90,
  },
];
export default function LocationsContainer() {
  return (
    <Container tag={'section'}>
      <div className='flex flex-col gap-12 py-30 lg:flex-row lg:justify-evenly'>
        {locations.map((location) => (
          <Location
            key={location.location}
            to={location.to}
            location={location.location}
            src={location.src}
            alt={location.alt}
            bgRotation={location.bgRotation}
          />
        ))}
      </div>
    </Container>
  );
}
