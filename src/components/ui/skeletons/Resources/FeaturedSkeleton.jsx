import { Skeleton } from '../../skeleton';

export default function FeaturedSkeleton() {
  return (
    <div className="bg-card grid grid-cols-2 gap-32 w-full max-lg:grid-cols-none max-sm:gap-0">
      <div className="relative w-full">
        <Skeleton className="w-full h-400" />
      </div>

      <div className="flex flex-col items-start gap-24 py-32 px-24 justify-between max-sm:gap-16 w-full">
        <div className="flex flex-col gap-32 max-sm:gap-16 w-full">
          <Skeleton className="mb-2 h-10 w-60" />

          <Skeleton className="mb-2 h-50 w-[85%]" />

          <div>
            <Skeleton className="mb-8 h-10 w-[90%]" />
            <Skeleton className="mb-8 h-10 w-[80%]" />
            <Skeleton className="h-10 w-[70%]" />
          </div>
        </div>

        <Skeleton className="mb-8 h-50 w-150" />
      </div>
    </div>
  );
}
