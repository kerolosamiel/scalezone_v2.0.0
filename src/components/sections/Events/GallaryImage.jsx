import Image from 'next/image';

export default function GallaryImage({ card = {} }) {
  const { location, image = {} } = card;

  if (!image?.url) return null;
  return (
    <article className="relative overflow-hidden">
      <Image
        src={image.url}
        alt={image.alt || 'Event Image'}
        width={390}
        height={400}
        className="transition-all duration-500 brightness-80 hover:brightness-100! hover:scale-[1.05]"
      />

      <div className="absolute bottom-0 left-0 p-10 bg-[#13131333] backdrop-blur-[25px]">
        <p className="text-[1.4rem] tracking-[6%]">{location}</p>
      </div>
    </article>
  );
}
