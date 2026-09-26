import BaseSections from '../sections/Common/BaseSections';
import ReasonCard from '../sections/WhyZone/ReasonCard';
import EmptyState from '../ui/EmptyState';

export default function WhyZoneSection({ data = {} }) {
  const {
    title = 'Why This Zone',
    subtitle = 'Not generic agency copy — the real difference.',
    firstReason,
    secondReason,
    thirdReason,
  } = data;

  const reasons = [firstReason, secondReason, thirdReason].filter(Boolean);
  return (
    <BaseSections title={title} subtitle={subtitle}>
      {!reasons || reasons?.length == 0 ? (
        <EmptyState
          className="py-64"
          title="No Reasons Found"
          description="Zone features and reasons are currently being updated. Check back soon!"
        />
      ) : (
        <ul className="p-64 bg-card grid grid-cols-3 gap-48 max-lg:grid-cols-2 max-[470px]:grid-cols-1! max-sm:px-32">
          {reasons.map((r, i) => (
            <li key={`reason-${i}`} className="flex justify-center items-center w-full">
              <ReasonCard reasonNumber={`0${i + 1}`} reason={r} />
            </li>
          ))}
        </ul>
      )}
    </BaseSections>
  );
}
