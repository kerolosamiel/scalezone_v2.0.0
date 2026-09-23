import CompaniesSection from '@/components/home/CompaniesSection';
import GrowthSection from '@/components/sections/GrowthCalcSection/GrowthSection';
import HeroSection from '@/components/home/HeroSection';
import PartnersSection from '@/components/home/PartnersSection';
import ZonesSection from '@/components/home/ZonesSection';
import { getHomePage } from '@/lib/wordpress/data-fetching/queries';
import { notFound } from 'next/navigation';
import HomeTestimonials from '@/components/home/HomeTestimonialsSec';

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

  console.log(homeData);

  return (
    <main>
      <HeroSection hero={homeData.hero} />
      <PartnersSection partners={homeData.partners} />
      <ZonesSection zoneData={homeData.zones} />
      <CompaniesSection logos={homeData.companies} />
      <GrowthSection growth={homeData.calculator} />
      <HomeTestimonials testimonials={homeData.testimonials} />
    </main>
  );
}
