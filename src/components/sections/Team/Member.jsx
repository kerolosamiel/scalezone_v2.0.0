import Image from 'next/image';
import React from 'react';

export default function Member({ member }) {
  if (!member) return null;

  const { memberName = 'Member Name', memberPosition = 'N/A', image } = member;

  if (!image?.url) return null;

  return (
    <article className="relative brightness-50 hover:brightness-100! transition-all duration-600 after:transition-opacity after:duration-600 after:opacity-0 hover:after:opacity-30! after:absolute after:w-full after:h-full after:bg-[url(/images/patterns_gray.webp)] after:bg-center after:left-0 after:top-0 after:bg-contain after:z-10">
      <Image
        src={image?.url}
        alt={image?.alt || `${memberName || 'Member'} Image`}
        width={310}
        height={390}
        loading="lazy"
        className="min-h-380 w-auto"
      />

      <div className="absolute text-center w-full bottom-24 z-20">
        <h3 className="text-[3rem] mb-8 drop-shadow-2xl max-[360px]:text-[2.4rem]">{memberName}</h3>
        <p className="text-[1.6rem] text-muted-foreground drop-shadow-[2px_4px_2px_black]">
          {memberPosition}
        </p>
      </div>
    </article>
  );
}
