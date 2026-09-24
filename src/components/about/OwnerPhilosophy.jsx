import BaseCard from '../sections/OwnerPhilosophy/BaseCard';

export default function OwnerPhilosophy({ data = {} }) {
  const { owenrSide, philosophySide } = data;

  const owner = {
    title: owenrSide?.title || 'Built to Scale, Driven by Results.',
    subtitle: owenrSide?.subtitle || 'ABOUT THE OWNER',
    description:
      owenrSide?.description ||
      'Structured growth, real scale - the same philosophy behind every service Scalezone runs, from the first Discovery call to the plan you sign off on.',
  };

  const philosophy = {
    title: philosophySide?.title || 'Where Growth Becomes Scale.',
    subtitle: philosophySide?.subtitle || 'Our Philosophy',
    description:
      philosophySide?.description ||
      'Structured growth, real scale - the same philosophy behind every service Scalezone runs, from the first Discovery call to the plan you sign off on.',
  };

  return (
    <section>
      <div className="grid grid-cols-2 py-64 px-80 max-w-1680 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16 max-sm:grid-cols-1 max-sm:gap-24">
        <BaseCard data={owner} className="bg-card-gradient-l" />
        <BaseCard data={philosophy} className="bg-card-gradient" />
      </div>
    </section>
  );
}
