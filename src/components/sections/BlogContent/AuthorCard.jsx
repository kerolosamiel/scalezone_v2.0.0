import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AuthorCard({ author }) {
  if (!author) return null;
  const { name, description, avatar } = author;

  return (
    <article className="px-32 py-48 border bg-card flex gap-16 max-[450px]:flex-col! max-[450px]:px-16!">
      <Avatar className="size-55 rounded-full overflow-hidden">
        <AvatarImage src={avatar?.url || ''} alt={avatar?.alt || 'Team Image'} />
        <AvatarFallback>SZ</AvatarFallback>
      </Avatar>

      <div>
        <h3 className="mb-8 text-[1.4rem] leading-[100%] tracking-[6%]">{name}</h3>
        <p className="text-[1.4rem] text-muted-foreground max-w-500">{description}</p>
      </div>
    </article>
  );
}
