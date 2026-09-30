import Link from 'next/link';
import FeatureCard from '@/components/shared/FeatureCard';
import { MoveRight } from 'lucide-react';

export default function ServiceCard({ service }) {
  const altTextValue =
    typeof service?.iconAlt === 'string' && service.iconAlt.trim() !== ''
      ? altText
      : `${service.serviceName || 'Service'} Icon`;

  return (
    <FeatureCard
      icon={service.serviceIcon}
      alt={altTextValue}
      name={service.serviceName}
      description={service.serviceDescription}
      className="justify-between"
    >
      <Link
        href={`/services/${service.slug}`}
        className="inline-flex items-center text-primary gap-16 transition-all text-[1.6rem] font-bold hover:gap-[2.4rem]!"
      >
        Learn More
        <MoveRight />
      </Link>
    </FeatureCard>
  );
}
