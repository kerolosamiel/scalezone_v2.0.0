import FeaturedSkeleton from '@/components/ui/skeletons/Resources/FeaturedSkeleton';

export default function loading() {
  return (
    <div className="flex flex-col gap-64">
      <FeaturedSkeleton />
    </div>
  );
}
