import { cn } from 'cn';
import Image from 'next/image';

export default function ReasonCard({ card, className = '' }) {
  if (!card) return null;
  const { icon, description } = card;

  return (
    <article className={cn('py-32 px-24 bg-card flex flex-col gap-32', className)}>
      <Image
        src={typeof icon === 'string' ? icon : icon?.value}
        alt="Reason Icon"
        width={40}
        height={40}
        className="object-contain border-0"
      />

      <p className="text-[1.6rem]">{description}</p>
    </article>
  );
}
