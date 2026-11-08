import BaseSections from '../sections/Common/BaseSections';
import PricingCard from '../sections/PricingSection/PricingCard';
import EmptyState from '../ui/EmptyState';

export default function PricingSection({ pricing }) {
  if (!pricing) return null;

  const { title, subtitle, packages } = pricing;
  const plans = [packages.basic, packages.standard, packages.premium];

  return (
    <BaseSections title={title} subtitle={subtitle}>
      {plans.length === 0 ? (
        <EmptyState
          className="py-64"
          title="No Pricing Plans Found"
          description="Our pricing packages and service tiers are currently being updated. Check back soon!"
        />
      ) : (
        <ul className="grid grid-cols-3 gap-32 max-md:grid-cols-2 max-[570px]:grid-cols-1!">
          {plans?.map((plan, i) => (
            <li key={`plan-${i}`} className="flex justify-center items-stretch w-full">
              <PricingCard data={plan} />
            </li>
          ))}
        </ul>
      )}
    </BaseSections>
  );
}
