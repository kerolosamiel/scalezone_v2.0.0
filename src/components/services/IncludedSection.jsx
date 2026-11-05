import { Check } from 'lucide-react';
import BaseSections from '../sections/Common/BaseSections';
import Chip from '../ui/chip';
import EmptyState from '../ui/EmptyState';

export default function IncludedSection({ included }) {
  if (!included) return null;
  const { title, subtitle, features } = included;

  const featuresList = features ? [features.first, features.second, features.third] : [];

  return (
    <BaseSections title={title} subtitle={subtitle}>
      {featuresList.length === 0 ? (
        <EmptyState
          className="py-64"
          title="No Features Found"
          description="No features are currently listed in this category. Please check back later."
        />
      ) : (
        <ul className="flex flex-col gap-32">
          {featuresList?.map((feature, i) => (
            <li key={`feature-${i}`}>
              <Chip className="flex gap-12 min-w-[50%] py-16 items-center bg-card">
                <Check className="text-primary size-32!" /> {feature}
              </Chip>
            </li>
          ))}
        </ul>
      )}
    </BaseSections>
  );
}
