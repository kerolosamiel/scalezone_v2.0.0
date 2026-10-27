import TeamSkeleton from '@/components/ui/skeletons/About/TeamSkeleton';
import CtaSkeleton from '@/components/ui/skeletons/CtaSkeleton';
import MainHeroSkeleton from '@/components/ui/skeletons/MainHeroSkeleton';
import TrustSkeleton from '@/components/ui/skeletons/TrustSkeleton';
import OwnerPhilosophySkeleton from '@/components/ui/skeletons/About/OwnerPhilosophySkeleton';
import ProcessSkeleton from '@/components/ui/skeletons/ProcessSkeleton';
import ConferenceSkeleton from '@/components/ui/skeletons/About/ConferenceSkeleton';

export default function loading() {
  return (
    <>
      <MainHeroSkeleton />
      <TrustSkeleton />
      <TeamSkeleton />
      <OwnerPhilosophySkeleton />
      <ProcessSkeleton />
      <ConferenceSkeleton />
      <CtaSkeleton />
    </>
  );
}
