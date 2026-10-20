import { Skeleton } from '../../skeleton';

export default function CompaniesSkeleton() {
  return (
    <section className="relative overflow-hidden [&>div]:py-24 border border-x-0 max-xl:[&_li]:mr-80 max-lg:[&_li]:mr-64 max-md:[&_img]:h-45! max-md:[&>div]:py-16">
      <div className="max-w-1560 flex px-32 py-16 gap-32 justify-between m-auto max-md:justify-center">
        <Skeleton className="mb-2 w-150 h-60 min-w-150" />
        <Skeleton className="mb-2 w-150 h-60 min-w-150" />
        <Skeleton className="mb-2 w-150 h-60 min-w-150" />
        <Skeleton className="mb-2 w-150 h-60 min-w-150" />
        <Skeleton className="mb-2 w-150 h-60 min-w-150" />
        <Skeleton className="mb-2 w-150 h-60 min-w-150" />
        <Skeleton className="mb-2 w-150 h-60 min-w-150" />
      </div>
    </section>
  );
}
