import Paragraph from '../sections/ImpactSection/Paragraph';
import Chip from '../ui/chip';

export default function ImpactSection({ impact }) {
  if (!impact) return null;
  const { firstPart, secondPart, thirdPart, insight = {} } = impact;
  return (
    <section>
      <div className="py-64 px-80 max-w-1680 flex flex-col gap-48 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16 max-sm:gap-32">
        <Paragraph parag={firstPart} />
        <Chip className="px-48 py-32 flex gap-24 items-center bg-card max-sm:flex-col max-sm:px-24 max-[390px]:px-16!">
          <p className="text-[3.6rem] font-black text-primary">{insight?.value || '00.00'}</p>
          <p className="text-[1.6rem] text-muted-foreground max-[390px]:text-">
            {insight?.description || 'No Insight Found'}
          </p>
        </Chip>
        <Paragraph parag={secondPart} />
        <Paragraph parag={thirdPart} />
      </div>
    </section>
  );
}
