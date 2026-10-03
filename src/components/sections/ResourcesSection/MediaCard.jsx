import Image from 'next/image';
import Link from 'next/link';

export default function MediaCard({ card }) {
  if (!card) return null;
  const itemDate = new Date(card.date);
  const currentDate = new Date();
  return (
    <article className="bg-card">
      <Link href={card.link || ''}>
        <div>
          <Image
            src={card.image?.url}
            alt={card.image?.alt + 'Image'}
            width={400}
            height={220}
            className="w-full h-auto"
          />
        </div>

        <div className="flex flex-col items-start gap-12 py-16 px-24 justify-between">
          <p className="text-[1.2rem] text-muted-foreground">
            {itemDate.toDateString() || currentDate.toDateString()}
          </p>

          <h2 className="text-[1.6rem] text-ellipsis line-clamp-2">{card.title}</h2>
        </div>
      </Link>
    </article>
  );
}
