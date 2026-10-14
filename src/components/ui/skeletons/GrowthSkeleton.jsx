import { Skeleton } from '../skeleton';

export default function GrowthSkeleton() {
  return (
    <section className="relative py-32">
      <div className="relative grid grid-cols-2 mx-auto items-center justify-between gap-96 py-80 px-80 max-w-1560 max-xl:px-48 max-sm:px-32 max-[390px]:px-16! max-xl:gap-48 max-md:flex max-md:flex-col-reverse max-md:gap-24 bg-growth-gradient">
        <div className="flex flex-col gap-24 z-20 relative">
          <Skeleton className="mb-2 h-90 w-full" />
          <Skeleton className="mb-2 h-20 w-[90%]" />

          <Skeleton className="mb-2 h-50 w-[40%]" />
        </div>

        <div className="flex gap-64 items-center justify-center">
          <Skeleton className="mb-2 size-60 rounded-full" />
          <Skeleton className="mb-2 size-60 rounded-full" />
          <Skeleton className="mb-2 size-60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
