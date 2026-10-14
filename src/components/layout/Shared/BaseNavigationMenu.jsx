'use client';
import BurgerIcon from '../BurgerIcon/BurgerIcon';
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import NavigationLink from './NavigationLink';
import { Separator } from '@/components/ui/separator';
import { Fragment, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from 'cn';
import Link from 'next/link';

export default function BaseNavigationMenu({
  menu = {},
  button,
  left = false,
  children,
  className = '',
}) {
  const [active, setActive] = useState(true);
  const [openItems, setOpenItems] = useState(['item-1']);
  const { about, resources, contact, services } = menu;

  const links = [
    {
      id: 101,
      href: '/resources',
      label: resources || 'Resrouces',
    },
    {
      id: 102,
      href: '/about',
      label: about || 'About',
    },
    {
      id: 103,
      href: '/contact',
      label: contact || 'Contact',
    },
  ];

  return (
    <>
      <BurgerIcon setActive={setActive} left={left} className={className} />
      <div
        className={cn(
          `flex flex-col gap-32 justify-between fixed w-[40%] h-[calc(100dvh-75px)] ${!left ? '-right-full' : '-left-full'} transition-all duration-500 ease-in-out top-full max-sm:w-[60%] max-[390px]:w-[75%]! lg:hidden lg:invisible pb-48 pt-32 ${!active && (!left ? 'right-0!' : 'left-0!')} bg-background z-50 backdrop-blur-[30px]`,
          className
        )}
      >
        <div className="px-24">
          <h3 className="text-[1.4rem] tracking-[6%]">Menu</h3>
        </div>

        <Separator className="h-2" />

        <NavigationMenu className="justify-start! items-start [&>div]:w-full! px-24">
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

                <AccordionContent className="mt-16">
                  {services?.zones?.map((s, i) => (
                    <NavigationMenuLink
                      key={`zone-${s.id || i}`}
                      href={`/zones/${s.slug}`}
                      className="text-[1.6rem] no-underline! mb-16 last:mb-0"
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

            <Separator className="h-2 w-full" />

            {links.map((l, i) => (
              <Fragment key={`Link-${l.id || i}`}>
                <NavigationLink href={l.href} label={l.label} />
                {i < links.length - 1 && <Separator className="h-2 w-full" />}
              </Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Separator className="h-2" />

        <div className="px-24 flex flex-col gap-12">
          <Button
            className="h-[unset] py-16 px-32 text-[1.6rem] hover:scale-[1.05] text-center w-full mt-24"
            asChild
          >
            <Link href="/appointment">{button || 'Book an Appoinment'}</Link>
          </Button>

          {children}
        </div>
      </div>
    </>
  );
}
