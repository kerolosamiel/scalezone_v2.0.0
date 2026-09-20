import FormSection from '@/components/forms/EventForm/FormSection';
import HeroSection from '@/components/forms/EventForm/HeroSection';
import FaqsSection from '@/components/sections/FaqsSection/Faqs';

export async function generateMetadata() {
  return {
    title: 'Event Form - Scalezone',
    description: 'Welcome to Scalezone Event',
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function page() {
  const faqs = [
    {
      question: 'Which platforms do you work with besides Amazon?',
      answer:
        'Amazon is where we started, but the Other Platforms Zone covers marketplaces like Noon and Shopify under the same managed approach — one team, one strategy, across every channel you sell on.',
    },
    {
      question: 'Which platforms do you work with besides Amazon?',
      answer:
        'Amazon is where we started, but the Other Platforms Zone covers marketplaces like Noon and Shopify under the same managed approach — one team, one strategy, across every channel you sell on.',
    },
    {
      question: 'Which platforms do you work with besides Amazon?',
      answer:
        'Amazon is where we started, but the Other Platforms Zone covers marketplaces like Noon and Shopify under the same managed approach — one team, one strategy, across every channel you sell on.',
    },
  ];

  return (
    <main>
      <HeroSection />

      <FormSection />

      <FaqsSection title="Quick answers." subtitle="Before You Reach Out" faqs={faqs} />
    </main>
  );
}
