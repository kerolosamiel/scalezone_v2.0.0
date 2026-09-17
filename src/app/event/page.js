import HeroSection from '@/components/forms/EventForm/HeroSection';

export async function generateMetadata() {
  return {
    title: 'Event Form - Scalezone',
    description: 'Welcome to Scalezone Event',
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function page() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
