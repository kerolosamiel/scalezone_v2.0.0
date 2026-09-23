import Image from 'next/image';
import LogoLoop from '../ui/LogoLoop';

export default function CompaniesSection({ logos }) {
  if (!logos || logos.length == 0) return null;

  const finalLogos = logos?.map((l) => ({
    src: l?.url,
    alt: l?.alt,
  }));

  return (
    <section className="relative overflow-hidden [&>div]:py-24 border border-x-0 justify-center max-xl:[&_li]:mr-80 max-lg:[&_li]:mr-64 max-md:[&_img]:h-45! max-md:[&>div]:py-16">
      <LogoLoop
        logos={finalLogos}
        speed={150}
        direction="left"
        logoHeight={60}
        gap={128}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="none"
        ariaLabel="Technology"
      />
    </section>
  );
}
