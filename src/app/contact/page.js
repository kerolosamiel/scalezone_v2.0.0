import FormSection from '@/components/forms/ContactForm/FormSection';
import CompactHero from '@/components/sections/Hero/CompactHero';
import { getContactPage, getZonePage } from '@/lib/wordpress/data-fetching/queries';
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
  const [contact, zones] = await Promise.all([getContactPage(), getZonePage()]);
  const fZones = zones.map((z) => ({
    id: z?.id,
    slug: z?.slug,
    services: z?.services?.items,
  }));

  if (!contact) notFound();

  return (
    <main>
      <CompactHero hero={contact.hero} />
      <FormSection info={contact.info} zones={fZones} />
    </main>
  );
}
