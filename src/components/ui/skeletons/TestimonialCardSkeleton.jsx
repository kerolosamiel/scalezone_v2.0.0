import { Skeleton } from '../skeleton';
import { Star } from 'lucide-react';

export default function TestimonialCardSkeleton() {
  return (
    <article className="px-[2.4rem] py-32 border w-full flex flex-col gap-32 bg-card-gradient justify-between">
      <div className="head flex items-center gap-[1.2rem]">
        <Skeleton className="size-70 rounded-full mb-48" />

        <div className="title">
          <Skeleton className="h-30 w-150 mb-12" />
          <Skeleton className="h-20 w-80 mb-48" />
        </div>
      </div>

      <div>
        <Skeleton className="h-10 w-full mb-8" />
        <Skeleton className="h-10 w-[80%] mb-8" />
        <Skeleton className="h-10 w-[70%] mb-8" />
        <Skeleton className="h-10 w-[60%] mb-8" />
      </div>

      <div className="flex gap-8">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={`star-${i}`}
            className="text-muted-foreground/30 fill-accent/30 animate-pulse"
          />
        ))}
      </div>
    </article>
  );
}
