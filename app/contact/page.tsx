import LocationsContainer from '@/components/LocationsContainer';
import ContactForm from './ContactForm';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Contact',
};

export default function Home() {
  return (
    <main className='relative min-h-screen md:px-10'>
      <ContactForm />
      <LocationsContainer />
    </main>
  );
}
