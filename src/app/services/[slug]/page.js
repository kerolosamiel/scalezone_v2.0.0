import FaqsSection from '@/components/sections/FaqsSection/Faqs';
import GrowthSection from '@/components/sections/GrowthCalcSection/GrowthSection';
import ProofSection from '@/components/sections/ProofSection/ProofSection';
import ImpactSection from '@/components/services/ImpactSection';
import ServProcessSection from '@/components/services/ProcessSection';
import ServiceHeroSection from '@/components/services/ServiceHeroSection';
import { getServicePage } from '@/lib/wordpress/data-fetching/queries';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getServicePage(slug);

  if (!service?.seo) {
    return {
      title: 'Service | Scalezone',
      description: 'Explore the Service',
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    openGraph: {
      title: service.seo.ogTitle,
      description: service.seo.ogDescription,
      images: service.seo.ogImage ? [service.seo.ogImage] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function page({ params }) {
  const { slug } = await params;
  const service = await getServicePage(slug);

  if (!service) notFound();
  console.log(service);

  return (
    <main>
      <ServiceHeroSection slug={slug} hero={service.hero} />
      <ImpactSection impact={service.impact} />
      <ServProcessSection process={service.process} />
      <ProofSection proof={service.result} />
      <GrowthSection growth={service.calculator} />
      <FaqsSection faqs={service.faqs} />
    </main>
  );
}
