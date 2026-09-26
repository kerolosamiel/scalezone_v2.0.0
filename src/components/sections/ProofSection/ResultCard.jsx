export default function ResultCard({ card = {} }) {
  if (!card || !card?.clientTag) return null;

  return (
    <article className="py-32 px-48 bg-card flex flex-col gap-18 w-[70%]">
      <div className="p-10 border w-fit">
        <h3 className="text-[1.4rem] tracking-[6%] text-primary ">{card.clientTag}</h3>
      </div>

      {card?.quote && (
        <p className="text-[1.6rem] text-muted-foreground max-w-600">&ldquo;{card.quote}&rdquo;</p>
      )}

      {(card.authorName || card.authorRole) && (
        <div>
          <h4 className="text-[1.4rem] tracking-[6%] mb-8">{card.authorName}</h4>
          <p className="text-[1.6rem] text-muted-foreground">{card.authorRole}</p>
        </div>
      )}
    </article>
  );
}
