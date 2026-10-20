import TestimonialsSection from '@/components/growth-calculator/TestimonialsSection';
import CtaSection from '@/components/sections/CTABand/CtaSection';
import FaqsSection from '@/components/sections/FaqsSection/Faqs';
import StatesSection from '@/components/sections/States/StatesSection';
import { getGrowthPage } from '@/lib/wordpress/data-fetching/queries';
import { notFound } from 'next/navigation';
import WhyGrowthSection from './WhyGrowthSection';
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

  return (
    <main className="mt-100">
      <WhyGrowthSection whyGrowth={growthData.whyGrowth} />
      <StatesSection states={growthData.trust} />
      <TestimonialsSection testimonials={growthData.testimonials} />
      <FaqsSection faqs={growthData.faqs} />
      <CtaSection cta={growthData.cta} />
    </main>
  );
}
