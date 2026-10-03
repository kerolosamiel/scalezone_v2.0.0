import FeaturedItem from '@/components/resources/FeaturedItem';
import MediaItems from '@/components/resources/MediaItems';
import MediaSection from '@/components/resources/MediaSection';
import EmptyState from '@/components/ui/EmptyState';
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

  const featured = media.featured
    ? media.featured
    : media?.items.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  return (
    <div className="flex flex-col gap-64">
      {!media.featured || !media.items || media.items?.length === 0 ? (
        <EmptyState
          className="py-64"
          title={`No ${slug.charAt(0).toUpperCase()}${slug.slice(1)} Found`}
          description={`Our ${slug} list is currently being updated. Check back soon!`}
        />
      ) : (
        <>
          <FeaturedItem item={featured} />
          <MediaItems items={media.items} />
        </>
      )}
    </div>
  );
}
