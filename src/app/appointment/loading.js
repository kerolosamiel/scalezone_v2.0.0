import CompactHeroSkeleton from '@/components/ui/skeletons/CompactHeroSkeleton';
import FaqsSkeleton from '@/components/ui/skeletons/FaqsSkeleton';
import FormSkeleton from '@/components/ui/skeletons/FormSkeleton';

export default function loading() {
  return (
    <>
      <CompactHeroSkeleton />
      <FormSkeleton />
      <FaqsSkeleton />
    </>
  );
}
