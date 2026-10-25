import HeroSection from '@/components/legal/HeroSection';
import { getLagalPages } from '@/lib/wordpress/data-fetching/queries';

export const metadata = {
  title: 'Terms and Conditions | Scalezone',
  description: 'Read the terms and conditions governing the use of Scalezone services and website.',
  robots: {
    index: false,
    follow: true,
  },
};

export default async function page() {
  const data = await getLagalPages('terms-and-conditions');

  console.log(data);
  return (
    <main>
      <HeroSection
        slug="terms-and-conditions"
        title="Terms & Conditions"
        description="By accessing or using our website and services, you agree to be bound by these Terms and Conditions. Please read them carefully."
      />
    </main>
  );
}
