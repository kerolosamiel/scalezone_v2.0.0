import BaseSections from '../sections/Common/BaseSections';
import RelatedCard from '../sections/ServicesSection/RelatedCard';
import EmptyState from '../ui/EmptyState';

export default function RecommendationsSection({ recommendations }) {
  if (!recommendations) return null;

  const { title, subtitle, services } = recommendations;

  return (
    <BaseSections title={title} subtitle={subtitle}>
      {!services || services.length === 0 ? (
        <EmptyState
          className="py-64"
          title="NO RELATED SERVICES FOUND"
          description="There are no additional services available in this zone right now. Check back soon!"
        />
      ) : (
        <ul className="grid grid-cols-3 gap-32 max-lg:grid-cols-2 max-md:grid-cols-1! max-md:[&_article]:w-full">
          {services.map((service, i) => (
            <li key={`service-${service.id || i}`}>
              <RelatedCard service={service} />
            </li>
          ))}
        </ul>
      )}
    </BaseSections>
  );
}
