import { getResourcePage } from '@/lib/wordpress/data-fetching/queries';
import { notFound } from 'next/navigation';
import React from 'react';

export async function generateMetadata({ params }) {
  const [page, { slug }] = await Promise.all([getResourcePage(), params]);

  if (!page?.seo) {
    return {
      title: `${slug.charAt(0).toUpperCase()}${slug.slice(1)} | Scalezone`,
      description: `Explore our ${slug.charAt(0).toUpperCase()}${slug.slice(1)}`,
    };
  }

  return {
    title: page.seo.title,
    description: page.seo.description,
    keywords: page.seo.keywords,
    openGraph: {
      title: page.seo.ogTitle,
      description: page.seo.ogDescription,
      images: page.seo.ogImage ? [page.seo.ogImage] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function page({ params }) {
  const [{ slug }, page] = await Promise.all([params, getResourcePage()]);
  const media = page.mediaHub[`${slug}`];

  if (!media) return notFound();
  return <h1>{slug}</h1>;
}
