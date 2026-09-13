import TestimonialCard from '@/components/sections/Testimonials/TestimonialCard';
import { getHomePage } from '@/lib/wordpress/data-fetching/queries';

export default async function Home() {
  const data = await getHomePage();

  console.log(data);
  return (
    <main>
      <h1>Home</h1>

      <TestimonialCard testimonial={data?.testimonials?.global?.testimonials[3]} />
    </main>
  );
}
