import Image from 'next/image';
export default function FeatureCard({ icon, alt, name, description, openItem = false, children }) {
  return (
    <article
      className={`px-[2.4rem] max-sm:[1.6rem] py-32 bg-card gap-32 flex flex-col hover:border-accent transition-all duration-300 ${openItem ? 'border border-accent' : 'border'}`}
    >
      <div className="content flex flex-col gap-[2.4rem]">
        <Image src={icon} alt={alt} width={40} height={40} className="object-contain border-0" />

        <h3 className="text-[2rem] tracking-[1%] font-medium  max-sm:text-[1.8rem]">{name}</h3>

        <p className="text-[1.6rem] text-muted-foreground">{description}</p>
      </div>
      {children}
    </article>
  );
}
