import Link from 'next/link';
import Chip from '../ui/chip';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { get } from 'react-hook-form';

export default function FeaturedSection({ story }) {
  if (!story) return null;

  const durationFrom = story.duration?.from ? new Date(story.duration.from) : null;
  const durationTo = story.duration?.to ? new Date(story.duration.to) : null;

  const getMonthDifference = (date1, date2) => {
    const months = (date2.getFullYear() - date1.getFullYear()) * 12;
    return months - date1.getMonth() + date2.getMonth();
  };

  return (
    <section>
      <div className="py-64 px-80 max-w-1680 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16">
        <div className="flex flex-col gap-32 bg-card border border-accent border-t-8 py-32 px-80 max-[830px]:px-32">
          <div className="flex gap-32 flex-wrap items-center justify-between">
            <h3 className="text-[1.4rem] tracking-[6%] text-primary">FEATURED STORY</h3>
            <Chip>{story.zoneName}</Chip>
          </div>

          <div className="text-center w-full flex items-center justify-center flex-col">
            <h2 className="text-[6.2rem] font-bold leading-[1.2] max-w-[80%] mb-32 max-[830px]:max-w-[unset]! max-sm:text-[4.4rem] max-[460px]:text-[3rem]!">
              {story.title} <span className="text-primary">{story.stat}</span> In{' '}
              {getMonthDifference(durationFrom, durationTo)} Months.
            </h2>
            <p className="text-[1.6rem] mt-16 max-w-[80%] text-muted-foreground max-sm:max-w-[unset] max-[460px]:text-[1.4rem]!">
              {story.description}
            </p>
          </div>

          <Separator className="h-2" />

          <div className="flex gap-32 justify-between flex-wrap">
            <div className="flex gap-32 flex-wrap items-center">
              <h3 className="text-[1.4rem] tracking-[6%] text-muted-foreground">Services:</h3>
              <ul className="flex gap-12 flex-wrap">
                {story.usedServices?.length > 0 &&
                  story.usedServices.map((service, i) => (
                    <li key={`Story-Service-${i}`} className="max-[460px]:w-full!">
                      <Link href={`/services/${service.slug}`}>
                        <Chip className="max-[460px]:w-full! max-[460px]:text-[1.4rem] max-[340px]:text-[1.2rem]!">
                          {service.name}
                        </Chip>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <Button className="h-[unset] py-16 px-32 text-[1.6rem] hover:scale-[1.05]">
              Read the full story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
