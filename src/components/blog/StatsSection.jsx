import Image from 'next/image';
import Stat from '../sections/BlogStatsSection/Stat';

export default function StatsSection({ stats }) {
  if (!stats) return null;

  const { blogImage, description, isStats, statsGrid } = stats;

  const descriptionParts = description.split('\r\n');

  const statItems = [
    { value: '73%', label: 'of plateaued accounts had a listing issue, not an ad issue' },
    { value: '73%', label: 'of plateaued accounts had a listing issue, not an ad issue' },
    { value: '73%', label: 'of plateaued accounts had a listing issue, not an ad issue' },
  ];

  return (
    <section>
      <div className="py-64 px-80 max-w-1680 flex flex-col gap-32 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16">
        <Image
          src={blogImage?.url}
          alt={blogImage?.alt || 'Blog Image'}
          width={1238}
          height={399}
          loading="eager"
          className="relative! h-auto w-1360 mx-auto [clip-path:polygon(8%_0%,100%_0%,100%_30%,100%_90%,92%_100%,30%_100%,0%_100%,0%_12%)]"
        />

        <div className="max-w-1024 mx-auto">
          {descriptionParts?.map((d, i) => (
            <p
              key={`description-${i}`}
              className={`max-w-600 text-[1.8rem] max-[350px]:text-[1.6rem]! ${i != descriptionParts?.length - 1 ? 'mb-16' : ''}`}
            >
              {d}
            </p>
          ))}

          <div className="border w-full px-48 py-32 mt-64 justify-center grid grid-cols-3 gap-48 max-lg:grid-cols-1 max-[400px]:px-24!">
            {statItems.map((s, i) => (
              <Stat
                key={`stat-${i}`}
                stat={s}
                className={`${
                  i != statItems.length - 1
                    ? 'after:absolute after:w-2 after:h-full after:bg-border after:top-0 after:-right-24 max-lg:after:w-full max-lg:after:h-2 max-lg:after:right-0 max-lg:after:-bottom-24 max-lg:after:top-[unset]'
                    : ''
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
