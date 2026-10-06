import { NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';

export default function DropDown({ services }) {
  return (
    <ul className="w-full grid auto-cols-fr grid-flow-col justify-center gap-48 max-xl:gap-32">
      {!services || services?.length === 0 ? (
        <p className="text-[1.6rem] text-primary text-center">No Services Found</p>
      ) : (
        services?.zones?.map((s, i) => (
          <NavigationMenuItem key={`zone-${s.id || i}`}>
            <NavigationMenuLink
              href={`/zones/${s.slug}`}
              className="text-[1.6rem] text-primary mb-48"
            >
              {s?.slug
                ?.split('-')
                ?.map((w) => `${w?.charAt(0)?.toUpperCase()}${w?.slice(1)}`)
                ?.join(' ') || 'Zone Services'}
            </NavigationMenuLink>

            {s?.services?.length === 0 ? (
              <p className="text-[1.4rem] text-muted-foreground hover:text-foreground ml-8">
                No Services Found
              </p>
            ) : (
              s?.services?.map((s, i) => (
                <NavigationMenuLink
                  href={`/${s.slug}`}
                  className="text-[1.4rem] text-muted-foreground hover:text-foreground mb-16"
                  key={`service-${s.id || i}`}
                >
                  {s.name || 'Service Name'}
                </NavigationMenuLink>
              ))
            )}
          </NavigationMenuItem>
        ))
      )}
    </ul>
  );
}
