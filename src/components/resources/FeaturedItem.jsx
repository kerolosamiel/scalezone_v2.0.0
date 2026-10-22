import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { MoveRight } from 'lucide-react';

export default function FeaturedItem({ item, slug }) {
  if (!item) return null;
  const itemDate = new Date(item.date);
  const currentDate = new Date();

  const href = slug === 'blogs' ? `/blogs/${item.slug}` : item.link;
  return (
    <article className="bg-card">
      <Link
        href={href}
        className="grid grid-cols-2 gap-32 w-full"
        target={slug != 'blogs' ? '_blank' : ''}
        rel={slug !== 'blogs' ? 'noopener noreferrer' : undefined}
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
          <div className="flex flex-col gap-32">
            <p className="text-[1.2rem] text-muted-foreground">
              {itemDate.toDateString() || currentDate.toDateString()}
            </p>

            <h2 className="text-[3rem]">{item.title}</h2>

            {item.description && (
              <p className="text-[1.8rem] text-muted-foreground mask-ellipse line-clamp-4">
                {item.description}
              </p>
            )}
          </div>

          <Button className="h-[unset] bg-transparent text-primary hover:bg-transparent text-[1.6rem] [&_svg]:size-20! hover:scale-[1] flex items-center gap-12 hover:gap-18">
            {item.button} {<MoveRight />}
          </Button>
        </div>
      </Link>
    </article>
  );
}
