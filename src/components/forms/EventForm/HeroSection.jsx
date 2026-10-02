import CompactHero from '@/components/sections/Hero/CompactHero';

export default function HeroSection() {
  const hero = {
    title: "Let's Talk.",
    description:
      "Questions, ideas, or just not sure where to start? Reach out and we'll get back to you within.",
  };

  return <CompactHero hero={hero} />;
}
