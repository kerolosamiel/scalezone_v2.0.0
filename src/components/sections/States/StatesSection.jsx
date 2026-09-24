import State from './State';

export default function StatesSection({ states }) {
  const { accountManaged, positiveFeedback, teamMembers, yearsExperience } = states;

  const statesList = [
    {
      title: 'Years of experience',
      state: yearsExperience || '00.0',
      symbol: '+',
    },
    {
      title: 'Accounts managed',
      state: accountManaged || '00.0',
      symbol: '+',
    },
    {
      title: 'Team members',
      state: teamMembers || '00.0',
      symbol: '+',
    },
    {
      title: 'Positive feedback',
      state: positiveFeedback || '00.0',
      symbol: '%',
    },
  ];

  return (
    <section className="border border-x-0">
      <div className="py-32 px-32 max-w-1680 mx-auto grid grid-cols-4 gap-8 max-xl:px-48 max-lg:px-16 max-md:px-12 justify-center max-md:grid-cols-2 max-[370px]:grid-cols-1!">
        {statesList?.map((s, i) => (
          <State
            key={`state-${i}`}
            state={s}
            className={`${i != statesList.length - 1 ? 'border-r max-md:border-0' : ''}`}
          />
        ))}
      </div>
    </section>
  );
}
