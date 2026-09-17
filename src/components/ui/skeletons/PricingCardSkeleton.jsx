import { Skeleton } from '../skeleton';

export default function PricingCardSkeleton() {
  return (
    <article className="p-32 bg-card border w-fit hover:border-accent transition-all min-w-400">
      <div className="text-center flex flex-col mb-[2.4rem] items-center">
        <Skeleton className="mb-2 h-18 w-50 rounded" />
        <Skeleton className="my-2 h-25 w-140 rounded" />
        <Skeleton className="mt-2 h-8 w-65 rounded" />
      </div>

      <div className="space-y-3 pt-4">
        <Skeleton className="h-9 w-full rounded" />
        <Skeleton className="h-9 w-5/6 rounded" />
        <Skeleton className="h-9 w-4/6 rounded" />
      </div>
    </article>
  );
}
