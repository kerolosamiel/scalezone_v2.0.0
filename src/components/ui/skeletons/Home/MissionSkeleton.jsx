import { Skeleton } from '../../skeleton';

export default function MissionSkeleton() {
  return (
    <section className="relative bg-card-gradient">
      <div className="relative z-20 py-64 px-80 grid grid-cols-2 gap-24 items-center max-w-1680 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16">
        <div className="flex flex-col gap-32 items-start max-lg:col-span-full">
          <div className="w-full">
            <Skeleton className="mb-2 h-30 w-[40%]" />
            <Skeleton className="mb-2 h-80 w-full mt-32" />
          </div>

          <div className="w-full flex flex-col gap-16">
            <Skeleton className="mb-2 h-20 w-[90%]" />
            <Skeleton className="mb-2 h-20 w-[80%]" />
            <Skeleton className="mb-2 h-20 w-[70%]" />
            <Skeleton className="mb-2 h-20 w-[60%]" />
          </div>

          <Skeleton className="mb-2 h-50 w-[40%]" />
        </div>

        <div className="flex justify-end max-lg:justify-center max-lg:hidden">
          <Skeleton className="mb-2 h-580 w-503" />
        </div>
      </div>
    </section>
  );
}
