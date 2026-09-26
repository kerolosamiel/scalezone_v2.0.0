import BaseFormHero from '@/components/forms/shared/BaseFormHero';
import { getContactPage } from '@/lib/wordpress/data-fetching/queries';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const contact = await getContactPage();

  if (!contact?.seo) {
    return {
      title: 'Contact | Scalezone',
      description: 'Contact scalezone',
    };
  }

  return {
    title: contact.seo.title,
    description: contact.seo.description,
    keywords: contact.seo.keywords,
    openGraph: {
      title: contact.seo.ogTitle,
      description: contact.seo.ogDescription,
      images: contact.seo.ogImage ? [contact.seo.ogImage] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function page() {
  const contact = await getContactPage();

  if (!contact) notFound();

  return (
    <main>
      <BaseFormHero hero={contact.hero} />
    </main>
  );
}
