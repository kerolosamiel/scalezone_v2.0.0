import HeroSection from '@/components/sections/Hero/HeroSection';
import { getAboutPage } from '@/lib/wordpress/data-fetching/queries';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const aboutData = await getAboutPage();

  if (!aboutData?.seo) {
    return {
      title: 'About Us | Scalezone',
      description: 'Know more about scalezone',
    };
  }

  return {
    title: aboutData.seo.title,
    description: aboutData.seo.description,
    keywords: aboutData.seo.keywords,
    openGraph: {
      title: aboutData.seo.ogTitle,
      description: aboutData.seo.ogDescription,
      images: aboutData.seo.ogImage ? [aboutData.seo.ogImage] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function page() {
  const aboutData = await getAboutPage();

  if (!aboutData) notFound();

  console.log(aboutData);

  return (
    <main>
      <HeroSection
        hero={aboutData.hero}
        firstHref="/appointment"
        secondHref="/case-studies"
        className="gap-64"
      />
    </main>
  );
}
