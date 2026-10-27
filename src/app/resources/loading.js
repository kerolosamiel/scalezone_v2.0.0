import CompactHeroSkeleton from '@/components/ui/skeletons/CompactHeroSkeleton';
import MediaSkeleton from '@/components/ui/skeletons/Resources/MediaSkeleton';

export default function Loading() {
  return (
    <>
      <CompactHeroSkeleton />
      <MediaSkeleton />
    </>
  );
}
