import Image from 'next/image';
export default function FeatureCard({ icon, alt, name, description, openItem = false, children }) {
  return (
    <article
      className={`px-[2.4rem] py-[3.2rem] w-[calc(100%/3)] bg-card gap-[3.2rem] flex flex-col ${openItem ? 'border border-accent' : 'border'}`}
    >
      <div className="content flex flex-col gap-[2.4rem]">
        <Image src={icon} alt={alt} width={40} height={40} className="object-contain border-0" />

        <h3 className="text-[2rem] tracking-[1%] font-medium">{name}</h3>

        <p className="text-[1.6rem] text-muted-foreground">{description}</p>
      </div>
      {children}
    </article>
  );
}
