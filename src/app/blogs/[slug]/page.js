import ContentSection from '@/components/blog/ContentSection';
import HeroSection from '@/components/blog/HeroSection';
import StatsSection from '@/components/blog/StatsSection';
import CtaSection from '@/components/sections/CTABand/CtaSection';
import { getBlogPage } from '@/lib/wordpress/data-fetching/queries';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getBlogPage(slug);
  const url = process.env.NEXT_PUBLIC_SITE_URL;

  if (!data?.seo) {
    return {
      title: `${slug.charAt(0).toUpperCase()}${slug.slice(1)} | Scalezone`,
      description: `Explore our ${slug.charAt(0).toUpperCase()}${slug.slice(1)}`,
      alternates: {
        canonical: `${url}/blogs/${slug}`,
      },
    };
  }

  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    openGraph: {
      title: data.seo.ogTitle,
      description: data.seo.ogDescription,
      images: data.seo.ogImage ? [data.seo.ogImage] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${url}/blogs/${slug}`,
    },
  };
}

export default async function page({ params }) {
  const { slug } = await params;
  const data = await getBlogPage(slug);

  if (!data) return notFound();

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
