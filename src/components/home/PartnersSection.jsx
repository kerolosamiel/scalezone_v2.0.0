import Image from 'next/image';

export default function PartnersSection({ partners }) {
  if (!partners || partners.length == 0) return null;

  return (
    <section className="py-32 px-64 border border-x-0 flex gap-128 flex-wrap justify-center max-xl:gap-48 max-lg:px-32">
      {partners?.map((partner) => (
        <div className="relative w-xs h-100" key={partner?.id}>
          <Image
            src={partner?.url}
            alt={partner?.alt}
            sizes="200px"
            loading="eager"
            fill
            className="[clip-path:polygon(10%_0%,100%_0%,100%_30%,100%_80%,90%_100%,30%_100%,0%_100%,0%_20%)] brightness-50 hover:brightness-100 transition-all duration-500"
          />
        </div>
      ))}
    </section>
  );
}
