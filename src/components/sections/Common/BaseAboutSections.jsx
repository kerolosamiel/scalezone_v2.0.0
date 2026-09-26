import { cn } from 'cn';

export default function BaseAboutSections({ title, subtitle, children, className }) {
  return (
    <section>
      <div
        className={cn(
          'py-64 px-80 max-w-1680 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16',
          className
        )}
      >
        {(title || subtitle) && (
          <div className="mb-64 w-full">
            {subtitle && <h3 className="text-[2rem] tracking-[1%] text-primary">{subtitle}</h3>}
            {title && (
              <h2 className="text-[4.4rem] tracking-[1%] max-w-700 leading-[115%] max-sm:text-[3rem] max-[360px]:text-[2.4rem]!">
                {title}
              </h2>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
