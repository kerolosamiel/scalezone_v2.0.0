'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MoveRight } from 'lucide-react';

export default function ZoneCard({ zone }) {
  const [openItem, setOpenItem] = useState(false);

  const handleAccordionChange = (value) => {
    setOpenItem(value === 'item-1' ? true : false);
  };

  const altTextValue =
    zone.iconAlt === typeof String
      ? zone.iconAlt.length > 0
        ? altText
        : 'Zone Icon'
      : 'Zone Icon';

  return (
    <article
      className={`px-[2.4rem] py-[3.2rem] w-[calc(100%/3)] bg-card gap-[3.2rem] flex flex-col ${openItem ? 'border border-accent' : 'border'}`}
    >
      <div className="content flex flex-col gap-[2.4rem]">
        <Image
          src={zone.iconSrc}
          alt={altTextValue}
          width={40}
          height={40}
          className="object-contain border-0"
        />

        <h3 className="text-[2rem] tracking-[1%] font-medium">{zone.zoneName}</h3>

        <p className="text-[1.6rem] text-muted-foreground">{zone.zoneDescription}</p>
      </div>

      <Separator className="h-px bg-foreground" />

      <div className="cta">
        <Accordion
          collapsible
          defaultValue={['item-1']}
          className="mb-[2.4rem]"
          onValueChange={handleAccordionChange}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-[1.6rem] font-sans hover:no-underline text-primary">
              View Services
            </AccordionTrigger>
            <AccordionContent>
              {zone.services.length > 0 ? (
                <ul>
                  {zone.services.map((service, index) => (
                    <li
                      key={`${service.name}-${index}`}
                      className={index !== zone.services.length - 1 ? 'mb-[3.2rem]' : ''}
                    >
                      <Link href={service.href} className="no-underline!">
                        <h3 className="mb-2 text-[1.6rem] text-foreground! tracking-[6%]">
                          {service.name}
                        </h3>
                        <p className=" text-[1.6rem] text-muted-foreground">
                          {service.description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="m-2.5 text-center text-[1.2rem]">No services available.</p>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Link
          href="/about"
          className="inline-flex items-center gap-[1.6rem] transition-all text-[1.6rem] font-bold hover:gap-[2.4rem]!"
        >
          Explore Amazon Services
          <MoveRight />
        </Link>
      </div>
    </article>
  );
}
