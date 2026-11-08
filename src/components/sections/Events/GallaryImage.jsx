import Image from 'next/image';

export default function GallaryImage({ badge = '', image = {} }) {
  if (!image?.url || badge === '') return null;
  return (
    <article className="relative overflow-hidden">
      <Image
        src={image.url}
        alt={image.alt || `${badge}-Image`}
        width={390}
        height={400}
        loading="lazy"
        className="transition-all duration-500 brightness-80 hover:brightness-100! hover:scale-[1.05] max-h-auto w-auto h-auto"
      />

      <div className="absolute bottom-0 left-0 p-10 bg-[#13131333] backdrop-blur-[25px]">
        <p className="text-[1.4rem] tracking-[6%]">{badge}</p>
      </div>
    </article>
  );
}
