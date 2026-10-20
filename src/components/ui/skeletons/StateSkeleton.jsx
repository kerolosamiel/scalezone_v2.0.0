import { cn } from 'cn';
import { Skeleton } from '../skeleton';

export default function StateSkeleton({ className = '' }) {
  return (
    <div className={cn('flex justify-center border-r-2', className)}>
      <div className="flex flex-col gap-12 min-w-[80%]">
        <Skeleton className="mb-2 size-40" />
        <Skeleton className="mb-2 h-20 w-[60%]" />
      </div>
    </div>
  );
}
