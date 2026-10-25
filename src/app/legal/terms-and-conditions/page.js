import HeroSection from '@/components/legal/HeroSection';

export const metadata = {
  title: 'Terms and Conditions | Scalezone',
  description: 'Read the terms and conditions governing the use of Scalezone services and website.',
  robots: {
    index: false,
    follow: true,
  },
};

export default async function page() {
  return (
    <main>
      <HeroSection
        slug="terms-and-conditions"
        title="Terms & Conditions"
        description="These terms govern your use of the Scalezone website and the way we work with you. Please read them before booking a consultation or engaging our services.
"
      />
    </main>
  );
}
