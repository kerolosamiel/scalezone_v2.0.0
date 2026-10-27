import { Skeleton } from '../../skeleton';

export default function ImpactSkeleton() {
  return (
    <section>
      <div className="py-64 px-80 max-w-1680 flex flex-col gap-48 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16 max-sm:gap-32">
        {Array.from({ length: 3 }, (_, i) => (
          <div className="max-w-700" key={`impact-${i}`}>
            <Skeleton className="mt-8 h-8 w-[90%]" />
            <Skeleton className="mt-8 h-8 w-[80%]" />
            <Skeleton className="mt-8 h-8 w-[70%]" />
            <Skeleton className="mt-8 h-8 w-[70%]" />
          </div>
        ))}
      </div>
    </section>
  );
}
