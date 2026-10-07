import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import DropDown from './DropDown';
import { Globe } from 'lucide-react';
import Link from 'next/link';

export default function DesktopMenu({ className = '', button, menu = {} }) {
  const { about, resources, contact, services } = menu;

  return (
    <>
      <NavigationMenu className="max-lg:hidden max-lg:invisible">
        <NavigationMenuList className="flex gap-32">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[1.4rem] hover:text-primary transition-all duration-600">
              {services.label || 'Services'}
            </NavigationMenuTrigger>

            <NavigationMenuContent className="py-64 px-80 max-xl:px-32">
              <DropDown services={services} />
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/resources"
              className="text-[1.4rem] hover:text-primary transition-all duration-600"
            >
              {resources || 'Resrouces'}
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/about"
              className="text-[1.4rem] hover:text-primary transition-all duration-600"
            >
              {about || 'About'}
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/contact"
              className="text-[1.4rem] hover:text-primary transition-all duration-600"
            >
              {contact || 'Contact'}
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button className="h-[unset] bg-transparent hover:bg-transparent">
        <Globe className="size-25 max-[390px]:size-20" />
      </Button>

      <Button className="h-[unset] py-16 px-32 text-[1.6rem] hover:scale-[1.05] max-lg:hidden max-lg:invisible">
        <Link href="/contact">{button || 'Book an Appoinment'}</Link>
      </Button>
    </>
  );
}
