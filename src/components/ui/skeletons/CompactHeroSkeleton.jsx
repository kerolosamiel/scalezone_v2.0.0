import { cn } from 'cn';
import { Skeleton } from '../skeleton';

export default function CompactHeroSkeleton({ className, children }) {
  return (
    <section
      className={cn(
        'bg-card-gradient py-155 max-md:px-32 flex flex-col items-center justify-center gap-24',
        className
      )}
    >
      <Skeleton className="mb-8 h-30 w-[30%] max-lg:w-[45%] max-sm:w-[55%]" />

      <div className="w-full flex flex-col items-center">
        <Skeleton className="mb-8 h-10 w-[40%] max-lg:w-[65%] max-sm:w-[85%]" />
        <Skeleton className="h-10 w-[35%] max-lg:w-[55%] max-sm:w-[75%]" />
      </div>

      {children}
    </section>
  );
}
