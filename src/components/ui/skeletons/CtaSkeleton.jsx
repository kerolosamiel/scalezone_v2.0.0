import { Skeleton } from '../skeleton';

export default function CtaSkeleton() {
  return (
    <section className="relative bg-card">
      <div className="relative z-20 py-64 px-80 max-w-1680 flex flex-col gap-32 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16 text-center">
        <div className="w-fit mx-auto">
          <Skeleton className="mb-32 h-50 w-450 max-sm:w-300 max-[350px]:w-250!" />
          <Skeleton className="mb-2 h-20 w-250 mx-auto" />
        </div>

        <div className="text-start py-64 bg-accent/20 animate-pulse flex justify-between items-center px-128 max-xl:px-18 max-xl:py-48 flex-wrap gap-32 max-[870px]:text-center max-lg:justify-center">
          <div>
            <Skeleton className="mb-2 h-40 w-400 max-sm:w-300 max-[350px]:w-250!" />
            <Skeleton className="mb-3 h-40 w-350 max-sm:w-250 max-[350px]:w-xs!" />
          </div>
          <Skeleton className="mb-2 h-50 w-xs" />
        </div>
      </div>
    </section>
  );
}
