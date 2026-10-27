import TeamSkeleton from '@/components/ui/skeletons/About/TeamSkeleton';
import CtaSkeleton from '@/components/ui/skeletons/CtaSkeleton';
import MainHeroSkeleton from '@/components/ui/skeletons/MainHeroSkeleton';
import TrustSkeleton from '@/components/ui/skeletons/TrustSkeleton';

export default function loading() {
  return (
    <>
      <MainHeroSkeleton />
      <TrustSkeleton />
      <TeamSkeleton />
      <CtaSkeleton />
    </>
  );
}
