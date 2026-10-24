import ContentSection from '@/components/blog/ContentSection';
import HeroSection from '@/components/blog/HeroSection';
import StatsSection from '@/components/blog/StatsSection';
import CtaSection from '@/components/sections/CTABand/CtaSection';
import { getBlogPage } from '@/lib/wordpress/data-fetching/queries';

export default async function page({ params }) {
  const { slug } = await params;
  const data = await getBlogPage(slug);

  console.log(data);

  const whatsappMessage = `${data.hero?.description}.. Read the full article`;

  return (
    <main>
      <HeroSection slug={slug} hero={data.hero} />
      <StatsSection stats={data.stats} />
      <ContentSection content={data.content} slug={slug} message={whatsappMessage} />
      <CtaSection cta={data.cta} />
    </main>
  );
}
