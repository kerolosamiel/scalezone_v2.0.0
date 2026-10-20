import StatesSection from '@/components/sections/States/StatesSection';
import { getGrowthPage } from '@/lib/wordpress/data-fetching/queries';
import { notFound } from 'next/navigation';
export async function generateMetadata() {
  const growthData = await getGrowthPage();

  if (!growthData?.seo) {
    return {
      title: 'Scalezone',
      description: 'Welcome to Scalezone',
    };
  }

  return {
    title: growthData.seo.title,
    description: growthData.seo.description,
    keywords: growthData.seo.keywords,
    openGraph: {
      title: growthData.seo.ogTitle,
      description: growthData.seo.ogDescription,
      images: growthData.seo.ogImage ? [growthData.seo.ogImage] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function page() {
  const growthData = await getGrowthPage();

  if (!growthData) notFound();

  console.log(growthData);
  return (
    <main>
      <StatesSection states={growthData.trust} />
    </main>
  );
}
