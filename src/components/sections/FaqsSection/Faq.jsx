import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Faq({ id, faq }) {
  return (
    <Accordion
      collapsible
      defaultValue={['item-1']}
      // onValueChange={handleAccordionChange}
    >
      <AccordionItem value={`item-${id}`}>
        <AccordionTrigger className="text-[1.6rem] font-sans hover:no-underline mb-16 max-md:text-[1.4rem]">
          {faq.question}
        </AccordionTrigger>
        <AccordionContent className="text-[1.8rem] text-muted-foreground mb-32  max-md:text-[1.6rem]">
          {faq.answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
