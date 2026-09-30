import BaseSections from '../sections/Common/BaseSections';
import ServiceCard from '../sections/ServicesSection/ServiceCard';
import EmptyState from '../ui/EmptyState';

export default function ServicesSection({ services = {} }) {
  const {
    title = 'Every Amazon Services offer, in one place.',
    subtitle = 'Services in This Zone',
    items = [],
  } = services;

  return (
    <BaseSections title={title} subtitle={subtitle}>
      {items.length === 0 ? (
        <EmptyState
          className="py-64"
          title="No Services Found"
          description="Our services list is currently being updated. Check back soon!"
        />
      ) : (
        <ul className="grid grid-cols-3 gap-32 max-md:grid-cols-2 max-[570px]:grid-cols-1!">
          {items?.map((service, i) => (
            <li key={`service-${i}`} className="flex items-stretch justify-between w-full">
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      )}
    </BaseSections>
  );
}
