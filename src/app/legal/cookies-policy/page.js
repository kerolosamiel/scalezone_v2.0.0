import ContentSection from '@/components/legal/ContentSection';
import HeroSection from '@/components/legal/HeroSection';
import { getLagalPages } from '@/lib/wordpress/data-fetching/queries';

export const metadata = {
  title: 'Cookies Policy | Scalezone',
  description:
    'Understand how Scalezone uses cookies and similar tracking technologies on our website.',
  robots: {
    index: false,
    follow: true,
  },
};

export default async function page() {
  const data = await getLagalPages('cookies-policy');

  if (!data) return notFound();

  return (
    <main>
      <HeroSection slug="cookies-policy" lastUpdate={data.lastUpdate} hero={data.hero} />
      <ContentSection contentData={data.content} />
    </main>
  );
}
