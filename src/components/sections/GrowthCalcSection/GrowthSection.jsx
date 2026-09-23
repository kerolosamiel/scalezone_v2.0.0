import Link from 'next/link';
import GrowthSteps from '../../shared/GrowthSteps';
import { Button } from '../../ui/button';

export default function GrowthSection({ growth }) {
  return (
    <section className="relative py-32">
      <div className="relative grid grid-cols-2 mx-auto items-center justify-between gap-96 py-80 px-80 max-w-1440 max-xl:px-48 max-sm:px-32 max-[390px]:px-16! max-xl:gap-48 max-md:flex max-md:flex-col-reverse max-md:gap-24 bg-growth-gradient after:absolute after:w-full after:h-full after:bg-[url(/images/patterns.webp)] after:left-0 after:top-0 after:bg-cover after:opacity-5 after:z-10">
        <div className="flex flex-col gap-24 z-20 relative">
          <h2 className="text-[4.4rem] tracking-[1%] max-lg:text-[3.6rem] max-[390px]:text-[3rem]!">
            {growth?.title || 'Not Sure Where to Start?'}
          </h2>
          <p className="text-[1.6rem] text-muted-foreground">
            {growth?.description ||
              'Answer 3 quick questions and get matched to the right service in under 60 seconds.'}
          </p>

          <GrowthSteps className="hidden max-md:flex my-24 sm:mx-0" />
          <Button asChild className="h-[unset] px-30 py-15 text-[1.6rem] w-fit hover:scale-[1.05]">
            <Link href="/get-started">{growth?.button || 'Get My Growth Score'}</Link>
          </Button>
        </div>

        <GrowthSteps className="max-md:hidden" />
      </div>
    </section>
  );
}
