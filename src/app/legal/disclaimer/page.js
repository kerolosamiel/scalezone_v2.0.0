import ContentSection from '@/components/legal/ContentSection';
import HeroSection from '@/components/legal/HeroSection';
import { getLagalPages } from '@/lib/wordpress/data-fetching/queries';

export const metadata = {
  title: 'Disclaimer | Scalezone',
  description:
    'Read the official disclaimer regarding the content, services, and business advice provided by Scalezone.',
  robots: {
    index: false,
    follow: true,
  },
};

export default async function page() {
  const data = await getLagalPages('disclaimer');

  if (!data) return notFound();

  return (
    <main>
      <HeroSection slug="disclaimer" lastUpdate={data.lastUpdate} hero={data.hero} />
      <ContentSection contentData={data.content} />
    </main>
  );
}
