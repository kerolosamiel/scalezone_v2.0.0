import { Plus } from 'lucide-react';
import BaseSkeleton from './BaseSkeleton';
import { Skeleton } from '../skeleton';

export default function FaqsSkeleton() {
  return (
    <BaseSkeleton>
      {Array.from({ length: 3 }, (_, i) => (
        <div
          key={`faqs-Skeleton-${i}`}
          className="flex items-center gap-32 max-w-600 justify-between mb-16"
        >
          <Skeleton className="h-10 w-[70%]" />
          <Plus className="animate-pulse transition-all size-20! text-accent/30" />
        </div>
      ))}
    </BaseSkeleton>
  );
}
