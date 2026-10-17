import { getAppointmentPage } from '@/lib/wordpress/data-fetching/queries';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const appointment = await getAppointmentPage();

  if (!appointment?.seo) {
    return {
      title: 'Book an Appointment | Scalezone',
      description: 'Appointment scalezone',
    };
  }

  return {
    title: appointment.seo.title,
    description: appointment.seo.description,
    keywords: appointment.seo.keywords,
    openGraph: {
      title: appointment.seo.ogTitle,
      description: appointment.seo.ogDescription,
      images: appointment.seo.ogImage ? [appointment.seo.ogImage] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function page() {
  notFound();
  return <h1>Appointment</h1>;
}
