import FormSection from '@/components/forms/AppointmentForm/FormSection';
import HeroSection from '@/components/forms/AppointmentForm/HeroSection';
import { getAppointmentPage } from '@/lib/wordpress/data-fetching/queries';
import { Cossette_Texte } from 'next/font/google';
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

export default async function page() {
  const appointment = await getAppointmentPage();

  if (!appointment) return notFound();
  console.log(appointment);
  return (
    <main>
      <HeroSection hero={appointment.hero} />
      <FormSection info={appointment.info} />
    </main>
  );
}
