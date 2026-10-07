'use client';
import { useState } from 'react';
import BurgerIcon from '../BurgerIcon/BurgerIcon';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function MobileMenu({ menu = {}, button }) {
  const [active, setActive] = useState(false);
  const [openItems, setOpenItems] = useState(['item-1']);
  const { about, resources, contact, services } = menu;
  return (
    <>
      <BurgerIcon setActive={setActive} />
      <div
        className={`flex flex-col justify-between absolute w-[40%] h-fit min-h-450 bg-background -right-full z-40 transition-all duration-500 ease-in-out top-full max-sm:w-[60%] max-[390px]:w-[75%]! lg:hidden lg:invisible py-48 px-24 ${!active && 'right-0!'}`}
      >
        <NavigationMenu className="justify-start! items-start [&>div]:w-full!">
          <NavigationMenuList className="flex flex-col gap-32 items-start! [&_ul]:items-start justify-self-start! w-full">
            <Accordion
              type="single"
              value={openItems}
              onValueChange={setOpenItems}
              collapsible
              className="w-full"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[1.4rem] hover:text-primary justify-start gap-24 transition-all duration-600 normal-case [&>svg]:ml-8! [&>svg]:size-20!">
                  {services?.label || 'Services'}
                </AccordionTrigger>

                <AccordionContent className="mt-24">
                  {services?.zones?.map((s, i) => (
                    <NavigationMenuLink
                      key={`zone-${s.id || i}`}
                      href={`/zones/${s.slug}`}
                      className="text-[1.6rem] no-underline! mb-24"
                    >
                      {s?.slug
                        ?.split('-')
                        ?.map((w) => `${w?.charAt(0)?.toUpperCase()}${w?.slice(1)}`)
                        ?.join(' ') || 'Zone Services'}
                    </NavigationMenuLink>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/resources"
                className="text-[1.4rem] hover:text-primary transition-all duration-600 uppercase font-bold"
              >
                {resources || 'Resrouces'}
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className="text-[1.4rem] hover:text-primary transition-all duration-600 uppercase font-bold"
              >
                {about || 'About'}
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className="text-[1.4rem] hover:text-primary transition-all duration-600 uppercase font-bold"
              >
                {contact || 'Contact'}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Separator className="h-2" />

        <Button
          asChild
          className="h-[unset] py-16 px-32 text-[1.6rem] hover:scale-[1.05] text-center w-full mt-24"
        >
          <Link href="/contact">{button || 'Book an Appoinment'}</Link>
        </Button>
      </div>
    </>
  );
}
