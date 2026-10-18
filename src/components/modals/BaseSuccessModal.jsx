import React from 'react';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { CircleCheckBig } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function BaseSuccessModal({
  title,
  description,
  button,
  secondButton = {},
  props,
  setOpen,
  children,
}) {
  return (
    <DialogContent
      {...props}
      className="text-center p-48 w-fit sm:max-w-[unset]! [&_button]:size-fit [&_button]:hover:bg-transparent! [&_button>svg]:size-25! max-md:w-[80%] max-[350px]:w-[90%]! max-[450px]:px-16 min-[450px]:min-w-440"
    >
      <DialogHeader className=" flex flex-col items-center justify-center ">
        <DialogTitle className="mb-24">
          <CircleCheckBig className="size-113 text-accent" />
        </DialogTitle>
        <DialogTitle className="text-[3.6rem] text-primary max-[450px]:text-[2.4rem] mb-16">
          {title}
        </DialogTitle>
        <div className="mb-32">
          <DialogDescription className="mb-12 text-[1.4rem]">{description}</DialogDescription>
          {children}
        </div>

        <div className="flex flex-col gap-16 items-center">
          <Button className="h-[unset] px-32 py-16 text-[1.6rem] hover:scale-[1.05]" asChild>
            <Link
              href={button?.href || '#'}
              target={button.href.startsWith('https') ? '_blank' : ''}
            >
              {button?.label}
            </Link>
          </Button>
          <Button
            className="h-[unset] px-32 py-16 text-[1.6rem] hover:scale-[1.05] bg-background border border-accent"
            onClick={() => setOpen(false)}
          >
            {secondButton.label ? secondButton.label : 'Close'}
          </Button>
        </div>
      </DialogHeader>
    </DialogContent>
  );
}
