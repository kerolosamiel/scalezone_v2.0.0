import BaseSections from '../sections/Common/BaseSections';
import TestimonialCard from '../sections/Testimonials/TestimonialCard';
import EmptyState from '../ui/EmptyState';

export default function TestimonialsSection({ testimonials }) {
  if (!testimonials) return null;

  const { title, subtitle, testimonialItems } = testimonials;

  return (
    <BaseSections title={title} subtitle={subtitle}>
      <div className="grid grid-cols-3 gap-24 max-sm:gap-16 max-lg:grid-cols-2 max-sm:grid-cols-1 ">
        {!testimonialItems || testimonialItems?.length === 0 ? (
          <EmptyState
            className="py-64"
            title="No Testimonials Yet"
            description="Collecting international client reviews. Check back soon!"
          />
        ) : (
          testimonialItems?.map((t, i) => (
            <TestimonialCard key={`testimonial-${t.id || i}`} testimonial={t} />
          ))
        )}
      </div>
    </BaseSections>
  );
}
