import { Skeleton } from '../skeleton';

export default function ServiceCardSkeleton() {
  return (
    <article className="p-32 bg-card border w-fit min-w-400 max-sm:min-w-[unset] max-sm:w-full">
      <div className="content flex flex-col gap-[2.4rem]">
        <Skeleton className="mb-2 size-40" />
        <Skeleton className="my-2 h-25 w-140" />
      </div>

      <div className="space-y-3 pt-4">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-5/6" />
        <Skeleton className="h-10 w-4/6" />
      </div>

      <Skeleton className="h-10 w-4/6 mt-16" />
    </article>
  );
}
