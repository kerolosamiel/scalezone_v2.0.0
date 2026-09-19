import { cn } from 'cn';
import { Fragment } from 'react';

export default function BaseFormHero({ hero, className, children }) {
  if (!hero) return null;
  const {
    title = "Let's Talk.",
    description = "Questions, ideas, or just not sure where to start? Reach out and we'll get back to you within.",
  } = hero;

  const titleWords = title.split(' ');

  return (
    <section
      className={cn(
        'bg-card-gradient py-80 max-md:px-32 flex flex-col items-center justify-center gap-32 text-center',
        className
      )}
    >
      <h1 className="text-[6.2rem] max-md:text-[4.4rem]">
        {titleWords.map((word, index) =>
          index === titleWords.length - 1 ? (
            <span className="text-primary" key={index}>
              {word}
            </span>
          ) : (
            <Fragment key={index}>{`${word} `}</Fragment>
          )
        )}
      </h1>
      <p className="text-[1.8rem] max-md:text-[1.4rem] text-muted-foreground max-w-650">
        {description}
      </p>

      {children}
    </section>
  );
}
