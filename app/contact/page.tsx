import LocationsContainer from '@/components/LocationsContainer';
import ContactForm from './ContactForm';

export default function Home() {
  return (
    <main className='relative min-h-screen md:px-10'>
      <ContactForm />
      <LocationsContainer />
    </main>
  );
}
