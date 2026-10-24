import HeroSection from '@/components/blog/HeroSection';
import StatsSection from '@/components/blog/StatsSection';
import CtaSection from '@/components/sections/CTABand/CtaSection';
import { getBlogPage } from '@/lib/wordpress/data-fetching/queries';

export default async function page({ params }) {
  const { slug } = await params;
  const data = await getBlogPage(slug);

  console.log(data);
  return (
    <main>
      <HeroSection slug={slug} hero={data.hero} />
      <StatsSection stats={data.stats} />
      <CtaSection cta={data.cta} />
    </main>
  );
}
