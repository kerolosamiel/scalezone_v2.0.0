import { Skeleton } from '../skeleton';

export default function RelatedCardSkeleton() {
  return (
    <article className="bg-card px-[4.8rem] py-32 inline-flex flex-col gap-16 w-full">
      <Skeleton className="mb-2 h-12 w-50" />
      <div>
        <Skeleton className="my-12 h-20 w-[60%] mb-12" />
        <Skeleton className="mt-8 h-8 w-[90%]" />
        <Skeleton className="mt-8 h-8 w-[80%]" />
      </div>
    </article>
  );
}
