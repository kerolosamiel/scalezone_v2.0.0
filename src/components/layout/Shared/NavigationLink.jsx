import { NavigationMenuItem } from '@/components/ui/navigation-menu';
import { cn } from 'cn';
import Link from 'next/link';

export default function NavigationLink({ href, label, className }) {
  return (
    <NavigationMenuItem>
      <Link
        href={href}
        passHref
        className={cn('text-[1.4rem] hover:text-primary transition-all duration-600', className)}
      >
        {label}
      </Link>
    </NavigationMenuItem>
  );
}
