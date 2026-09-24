import Member from '../sections/Team/Member';
import EmptyState from '../ui/EmptyState';

export default function TeamSection({ teamData = {} }) {
  const { title = '', subtitle = '', description = '', team } = teamData;
  return (
    <section>
      <div className="py-64 px-80 max-w-1680 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16">
        <div className="text-center flex flex-col gap-32 mb-48 max-sm:gap-24">
          <h3 className="text-[1.4rem] tracking-[6%] text-primary">{subtitle}</h3>
          <h2 className="text-[4.4rem] tracking-[1%] leading-[115%] max-sm:text-[3rem] max-[360px]:text-[2.4rem]!">
            {title}
          </h2>
          <p className="text-[1.6rem] text-muted-foreground max-[360px]:text-[1.4rem]">
            {description}
          </p>
        </div>

        {!team || team?.length === 0 ? (
          <EmptyState
            className="py-64"
            title="No Members Found"
            description="Our experts list is currently being updated. Check back soon!"
          />
        ) : (
          <ul className="grid grid-cols-3 gap-24 justify-center max-lg:grid-cols-2 max-sm:grid-cols-1">
            {team?.map((t, i) => (
              <li key={`member-${i}`} className="flex justify-center items-center w-full">
                <Member member={t} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
