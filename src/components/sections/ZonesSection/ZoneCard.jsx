'use client';
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
import FeatureCard from '@/components/ui/FeatureCard';

export default function ZoneCard({ zone }) {
  const [openItem, setOpenItem] = useState(false);

  const handleAccordionChange = (value) => {
    setOpenItem(value === 'item-1' ? true : false);
  };

  const altTextValue = `${zone?.zoneName || 'Zone'} Icon`;

  return (
    <FeatureCard
      icon={zone?.zoneIcon?.value}
      alt={altTextValue}
      name={zone.zoneName}
      description={zone.zoneDescription}
      openItem={openItem}
    >
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
              {zone?.zoneServices?.length > 0 ? (
                <ul>
                  {zone.services.map((service, index) => (
                    <li
                      key={`${service.name}-${index}`}
                      className={index !== zone.services.length - 1 ? 'mb-32' : ''}
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
          href={`/zones/${zone?.slug}`}
          className="inline-flex items-center gap-16 transition-all text-[1.6rem] font-bold hover:gap-[2.4rem]! max-[330px]:text-[1.4rem]!"
        >
          Explore Amazon Services
          <MoveRight />
        </Link>
      </div>
    </FeatureCard>
  );
}
