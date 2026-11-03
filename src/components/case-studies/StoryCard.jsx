import { MoveRight } from 'lucide-react';
import Chip from '../ui/chip';

export default function StoryCard({ story }) {
  if (!story) return null;
  return (
    <div className="py-24 px-32 bg-card hover:border-border transition-all duration-300 border border-transparent items-stretch justify-between flex flex-col max-[460px]:px-24 max-[380px]:px-16 max-[360px]:px-16">
      <Chip className="text-primary mb-24 max-[360px]:text-[1.4rem]">{story.zoneName}</Chip>

      <h3 className="text-[3.6rem] text-primary mb-24 leading-[115%]">{story.stat}</h3>

      <div className="flex flex-col gap-12 mb-24">
        <p className="text-[1.6rem] text-muted-foreground max-[460px]:text-[1.4rem]! max-[380px]:text-[1.2rem]!">
          Duration: {new Date(story.duration.from).toDateString('USA')} -{' '}
          {new Date(story.duration.to).toDateString('USA')}
        </p>

        <h2 className="text-[2rem] tracking-[1%] leading-[115%] max-[360px]:text-[1.8rem]!">
          {story.title}
        </h2>
        <p className="text-[1.6rem] text-muted-foreground mask-ellipse line-clamp-3 max-[360px]:text-[1.4rem]!">
          {story.description}
        </p>
      </div>

      <a className="text-primary text-[1.6rem] cursor-pointer inline-flex items-center gap-8 transition-all duration-300 hover:gap-12">
        Read the story <MoveRight />
      </a>
    </div>
  );
}
