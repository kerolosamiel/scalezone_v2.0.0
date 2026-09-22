import ZoneCard from '../sections/ZonesSection/ZoneCard';
import EmptyState from '../ui/EmptyState';

export default function ZonesSection({ zoneData }) {
  const zones = zoneData?.cards;

  return (
    <section>
      <div className="py-64 px-80 max-w-1440 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16">
        <h2 className="text-[4.4rem] tracking-[6%] max-w-450 leading-[115%] mb-48 max-sm:text-[3.6rem] max-[360px]:text-[3.2rem]!">
          {zoneData?.title || 'Every service lives in one of three zones.'}
        </h2>

        <div className="grid grid-cols-3 items-start gap-24 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {!zones || zones?.length === 0 ? (
            <EmptyState
              title="Failed to Load Zones"
              description="Please check your internet connection and reload the page"
              className="py-64 col-span-full"
            />
          ) : (
            zones.map((zone) => <ZoneCard key={zone?.id} zone={zone} />)
          )}
        </div>
      </div>
    </section>
  );
}
