import FaqsSkeleton from '@/components/ui/skeletons/FaqsSkeleton';
import GrowthSkeleton from '@/components/ui/skeletons/GrowthSkeleton';
import ProcessSkeleton from '@/components/ui/skeletons/ProcessSkeleton';
import ProofSkeleton from '@/components/ui/skeletons/ProofSkeleton';
import SubHeroSkeleton from '@/components/ui/skeletons/SubHeroSkeleton';

export default function loading() {
  return (
    <>
      <SubHeroSkeleton />
      <ProcessSkeleton />
      <ProofSkeleton />
      <GrowthSkeleton />
      <FaqsSkeleton />
    </>
  );
}
