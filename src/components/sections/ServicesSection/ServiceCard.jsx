import Link from 'next/link';
import FeatureCard from '@/components/shared/FeatureCard';
import { MoveRight } from 'lucide-react';

export default function ServiceCard({ service }) {
  const altTextValue =
    typeof service?.iconAlt === 'string' && service.iconAlt.trim() !== ''
      ? altText
      : 'service Icon';

  return (
    <FeatureCard
      icon={service.iconSrc}
      alt={altTextValue}
      name={service.zoneName}
      description={service.zoneDescription}
    >
      <Link
        href="/about"
        className="inline-flex items-center text-primary gap-16 transition-all text-[1.6rem] font-bold hover:gap-[2.4rem]!"
      >
        Learn More
        <MoveRight />
      </Link>
    </FeatureCard>
  );
}
