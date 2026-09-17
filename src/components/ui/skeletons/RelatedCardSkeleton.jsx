import { Skeleton } from '../skeleton';

export default function RelatedCardSkeleton() {
  return (
    <article className="bg-card border border-border w-fit hover:border-accent transition-all duration-300 px-[4.8rem] py-32 inline-flex flex-col gap-16">
      <Skeleton className="mb-2 h-12 w-50 rounded" />
      <div>
        <Skeleton className="my-2 h-20 w-140 rounded mb-12" />
        <Skeleton className="mt-2 h-8 w-65 rounded" />
      </div>
    </article>
  );
}
