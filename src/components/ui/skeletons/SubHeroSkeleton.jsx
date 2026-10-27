import { Skeleton } from '../skeleton';

export default function SubHeroSkeleton() {
  return (
    <section className="bg-card-gradient pt-75">
      <div className="py-64 px-80 max-w-1680 flex flex-col gap-32 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16">
        <Skeleton className="mb-8 h-10 w-100" />
        <Skeleton className="mb-8 h-40 w-[50%] max-lg:w-[65%] max-sm:w-[75%]" />

        <div className="w-full">
          <Skeleton className="mb-8 h-10 w-[40%] max-lg:w-[65%] max-sm:w-[85%]" />
          <Skeleton className="mb-8 h-10 w-[35%] max-lg:w-[55%] max-sm:w-[75%]" />
          <Skeleton className="h-10 w-[25%] max-lg:w-[45%] max-sm:w-[65%]" />
        </div>
        <Skeleton className="h-50 w-150" />
      </div>
    </section>
  );
}
