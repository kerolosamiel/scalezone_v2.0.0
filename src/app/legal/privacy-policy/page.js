import ContentSection from '@/components/legal/ContentSection';
import HeroSection from '@/components/legal/HeroSection';
import { getLagalPages } from '@/lib/wordpress/data-fetching/queries';

export const metadata = {
  title: 'Privacy Policy | Scalezone',
  description: 'Learn how Scalezone collects, uses, and protects your personal data and privacy.',
  robots: {
    index: false,
    follow: true,
  },
};

export default async function page() {
  const data = await getLagalPages('privacy-policy');

  if (!data) return notFound();

  return (
    <main>
      <HeroSection slug="privacy-policy" lastUpdate={data.lastUpdate} hero={data.hero} />
      <ContentSection contentData={data.content} />
    </main>
  );
}
