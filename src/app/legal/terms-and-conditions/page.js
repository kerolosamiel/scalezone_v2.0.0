import ContentSection from '@/components/legal/ContentSection';
import HeroSection from '@/components/legal/HeroSection';
import { getLagalPages } from '@/lib/wordpress/data-fetching/queries';
import { notFound } from 'next/navigation';

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

  if (!data) return notFound();

  return (
    <main>
      <HeroSection slug="terms-and-conditions" lastUpdate={data.lastUpdate} hero={data.hero} />
      <ContentSection contentData={data.content} />
    </main>
  );
}
