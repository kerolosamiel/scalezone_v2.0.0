import { Skeleton } from '@/components/ui/skeleton';
import { getHomePage } from '@/lib/wordpress/data-fetching/queries';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const homeData = await getHomePage();

  if (!homeData?.seo) {
    return {
      title: 'Scalezone',
      description: 'Welcome to Scalezone',
    };
  }

  return {
    title: homeData.seo.title,
    description: homeData.seo.description,
    keywords: homeData.seo.keywords,
    openGraph: {
      title: homeData.seo.ogTitle,
      description: homeData.seo.ogDescription,
      images: homeData.seo.ogImage ? [homeData.seo.ogImage] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Home() {
  const homeData = await getHomePage();

  if (!homeData) notFound();

  return (
    <main>
      <h1>Home</h1>
      <Skeleton className="mb-2 h-4 w-24 rounded" />
    </main>
  );
}
