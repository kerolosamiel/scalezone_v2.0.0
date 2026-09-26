import React from 'react';

export default function ReasonCard({ reasonNumber, reason = {}, className = '' }) {
  const { title, description } = reason;
  return (
    <article className={className}>
      <div className="mb-12">
        <p className="text-[4.4rem] text-primary w-fit font-black">{reasonNumber || '00'}</p>
      </div>

      <div>
        <h3 className="text-[1.4rem] tracking-[6%] mb-12">{title || ''}</h3>
        <p className="text-[1.4rem] text-muted-foreground">{description || ''}</p>
      </div>
    </article>
  );
}
