import React from 'react';
import Content from '../shared/Content';

export default function ContentSection({ contentData }) {
  const { content } = contentData;
  if (!content) return null;

  return (
    <section>
      <div className="py-32 px-80 max-w-1680 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16">
        <Content content={content} className=" [&_strong]:text-primary max-w-700" />
      </div>
    </section>
  );
}
