import { Skeleton } from '../../skeleton';

export default function OwnerPhilosophySkeleton() {
  return (
    <section>
      <div className="grid grid-cols-2 py-64 px-80 max-w-1680 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16 max-sm:grid-cols-1 max-sm:gap-24">
        {Array.from({ length: 2 }, (_, i) => (
          <div className="py-48 px-24" key={`owner-${i}`}>
            <div className="mb-32">
              <Skeleton className="mb-4 h-20 w-[20%] max-lg:w-[35%] max-sm:w-[45%]" />
              <Skeleton className="mb-2 h-20 w-[90%]" />
            </div>

            <Skeleton className="mb-2 h-10 w-full" />
            <Skeleton className="mb-2 h-10 w-[90%]" />
            <Skeleton className="mb-2 h-10 w-[80%]" />
          </div>
        ))}
      </div>
    </section>
  );
}
