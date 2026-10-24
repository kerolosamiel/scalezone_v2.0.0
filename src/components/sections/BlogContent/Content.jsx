import parse from 'html-react-parser';

export default function Content({ content }) {
  if (!content) return null;

  return (
    <div className="max-w-600 flex flex-col gap-24 [&_h2]:text-[4.4rem] [&_h2]:leading-[115%] [&_h2]:tracking-[1%] [&_h3]:text-[1.6rem] [&_h3]:text-accent [&_p]:text-[1.6rem] [&_ul]:list-disc [&_li]:ml-32 [&_li]:text-[1.6rem] [&_strong]:text-accent max-[450px]:[&_h2]:text-[3rem]! max-[350px]:[&_h2]:text-[2.4rem]!">
      {parse(content)}
    </div>
  );
}
