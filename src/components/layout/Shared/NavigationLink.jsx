import { NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from 'cn';

export default function NavigationLink({ href, label, className }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        href={href}
        className={cn('text-[1.4rem] hover:text-primary transition-all duration-600', className)}
      >
        {label}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
