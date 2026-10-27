import FeaturedSkeleton from '@/components/ui/skeletons/Resources/FeaturedSkeleton';
import MediaItemsSkeleton from '@/components/ui/skeletons/Resources/MediaItemsSkeleton';

export default function loading() {
  return (
    <div className="flex flex-col gap-64">
      <FeaturedSkeleton />
      <MediaItemsSkeleton />
    </div>
  );
}
