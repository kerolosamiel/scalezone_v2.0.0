import ZoneHeroSection from '@/components/zone/ZoneHeroSection';
import { getZonePage } from '@/lib/wordpress/data-fetching/queries';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const [{ slug }, zonesData] = await Promise.all([params, getZonePage()]);
  const targetZone = zonesData?.find((z) => z?.slug === slug);

  if (!targetZone?.seo) {
    return {
      title: 'Services Zone | Scalezone',
      description: 'Explore Services',
    };
  }

  return {
    title: targetZone.seo.title,
    description: targetZone.seo.description,
    keywords: targetZone.seo.keywords,
    openGraph: {
      title: targetZone.seo.ogTitle,
      description: targetZone.seo.ogDescription,
      images: targetZone.seo.ogImage ? [targetZone.seo.ogImage] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function page({ params }) {
  const [{ slug }, zonesData] = await Promise.all([params, getZonePage()]);
  const targetZone = zonesData?.find((z) => z?.slug === slug);

  if (!targetZone) notFound();

  console.log(targetZone);

  return (
    <>
      <ZoneHeroSection slug={targetZone.slug} hero={targetZone.hero} />
    </>
  );
}
