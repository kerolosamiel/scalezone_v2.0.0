import BaseSections from '@/components/sections/Common/BaseSections';
import ReasonCard from '@/components/sections/WhyGrowthSection/ReasonCard';

export default function WhyGrowthSection({ whyGrowth }) {
  if (!whyGrowth) return null;

  const { title, subtitle, cards } = whyGrowth;

  const reasons = [cards.first, cards.second, cards.third, cards.fourth];

  return (
    <BaseSections title={title} subtitle={subtitle}>
      <ul className="grid grid-cols-4 justify-center items-center gap-24 max-xl:grid-cols-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-[560px]:grid-cols-1!">
        {reasons.map((r, i) => (
          <li key={`reason-${i}`} className="w-fit mx-auto">
            <ReasonCard card={r} className="max-w-300 max-[560px]:max-w-[unset]" />
          </li>
        ))}
      </ul>
    </BaseSections>
  );
}
