import { NavigationMenuItem } from '@/components/ui/navigation-menu';
import Link from 'next/link';

export default function DropDown({ services }) {
  return (
    <ul className="w-full grid auto-cols-fr grid-flow-col justify-center gap-48 max-xl:gap-32">
      {!services || services?.length === 0 ? (
        <p className="text-[1.6rem] text-primary text-center">No Services Found</p>
      ) : (
        services?.zones?.map((s, i) => (
          <NavigationMenuItem key={`zone-${s.id || i}`} className="flex flex-col">
            <Link
              href={`/zones/${s.slug}`}
              className="text-[1.6rem] text-primary mb-48 inline-flex"
            >
              {s?.slug
                ?.split('-')
                ?.map((w) => `${w?.charAt(0)?.toUpperCase()}${w?.slice(1)}`)
                ?.join(' ') || 'Zone Services'}
            </Link>

            {s?.services?.length === 0 ? (
              <p className="text-[1.4rem] text-muted-foreground hover:text-foreground ml-8">
                No Services Found
              </p>
            ) : (
              s?.services?.map((s, i) => (
                <Link
                  href={`/services/${s.slug}`}
                  className="text-[1.4rem] text-muted-foreground hover:text-foreground mb-16 inline-flex"
                  key={`service-${s.id || i}`}
                >
                  {s.name || 'Service Name'}
                </Link>
              ))
            )}
          </NavigationMenuItem>
        ))
      )}
    </ul>
  );
}
