import { cn } from 'cn';
import { Fragment } from 'react';

export default function CompactHero({ hero, className, children }) {
  if (!hero) return null;
  const { title = '', description = '', subtitle = '' } = hero;

  const titleWords = title.split(' ');

  return (
    <section
      className={cn(
        'bg-card-gradient py-155 max-md:px-32 flex flex-col items-center justify-center gap-32 text-center',
        className
      )}
    >
      {subtitle.length > 0 && (
        <h3 className="text-[1.6rem] tracking-[6%] text-primary">{subtitle}</h3>
      )}
      <h1 className="text-[6.2rem] max-md:text-[4.4rem] max-w-650 leading-[115%]">
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
