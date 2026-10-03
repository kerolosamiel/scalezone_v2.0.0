import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { MoveRight } from 'lucide-react';

export default function FeaturedItem({ item }) {
  if (!item) return null;
  const itemDate = new Date(item.date);
  return (
    <article className="bg-card">
      <Link
        href={item.link}
        className="grid grid-cols-2 gap-32 w-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative w-full">
          <Image
            src={item.image?.url}
            alt={item.image?.alt + 'Image'}
            width={620}
            height={460}
            className="w-full h-auto"
          />
          <p className="absolute left-12 top-12 text-[1.6rem] text-primary font-bold">Featured</p>
        </div>

        <div className="flex flex-col items-start gap-32 py-32 px-24 justify-between">
          <div>
            <p className="text-[1.2rem] text-muted-foreground mb-32">
              {itemDate.toDateString() || Date.now()}
            </p>

            <h2 className="text-[3rem]">{item.title}</h2>
          </div>

          <Button className="h-[unset] bg-transparent text-primary hover:bg-transparent text-[1.6rem] [&_svg]:size-20! hover:scale-[1] flex items-center gap-12 hover:gap-18">
            {item.button} {<MoveRight />}
          </Button>
        </div>
      </Link>
    </article>
  );
}
