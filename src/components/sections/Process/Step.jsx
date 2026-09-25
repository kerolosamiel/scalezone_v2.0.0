export default function Step({ stepNumber, step = {}, className = '' }) {
  if (!step) return null;

  return (
    <article className={className}>
      <div
        id="num"
        className="p-12 border border-accent size-55 flex items-center justify-center mb-24"
      >
        <p className="text-[1.8rem] w-fit ">{stepNumber || '00'}</p>
      </div>

      <div>
        <h3 className="text-[1.4rem] tracking-[6%] mb-12">{step?.title || ''}</h3>
        <p className="text-[1.4rem] text-muted-foreground">{step?.description || ''}</p>
      </div>
    </article>
  );
}
