import { getCaseStudies } from '@/lib/wordpress/data-fetching/queries';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const data = await getCaseStudies();
  const url = process.env.NEXT_PUBLIC_SITE_URL;

  if (!data?.seo) {
    return {
      title: 'Case Studies | Scalezone',
      description: 'Success stories of scalezone',
      alternates: {
        canonical: `${url}/case-studies`,
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
      canonical: `${url}/case-studies`,
    },
  };
}

export default async function page() {
  const data = await getCaseStudies();

  if (!data) notFound();
  return <h1>Case Studies</h1>;
}
