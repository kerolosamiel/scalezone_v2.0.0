import { Skeleton } from '../skeleton';
import BaseSkeleton from './BaseSkeleton';

export default function ProofSkeleton() {
  return (
    <BaseSkeleton>
      <article className="py-32 px-48 bg-card flex flex-col gap-18 w-[70%] max-md:w-full!">
        <Skeleton className="mb-2 h-20 w-[60%]" />

        <div>
          <Skeleton className="mb-8 h-10 w-[90%]" />
          <Skeleton className="mb-8 h-10 w-[80%]" />
          <Skeleton className="mb-8 h-10 w-[70%]" />
        </div>

        <div>
          <Skeleton className="mb-12 h-20 w-[60%]" />

          <Skeleton className="mb-2 h-10 w-[50%]" />
        </div>
      </article>
    </BaseSkeleton>
  );
}
