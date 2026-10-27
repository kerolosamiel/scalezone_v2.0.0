import CompactHeroSkeleton from '@/components/ui/skeletons/CompactHeroSkeleton';
import CtaSkeleton from '@/components/ui/skeletons/CtaSkeleton';
import MediaSkeleton from '@/components/ui/skeletons/Resources/MediaSkeleton';

export default function Loading() {
  return (
    <>
      <CompactHeroSkeleton />
      <MediaSkeleton />
      <CtaSkeleton />
    </>
  );
}
