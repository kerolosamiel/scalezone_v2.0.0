import Chip from '../ui/chip';

export default function StoryCard({ story }) {
  if (!story) return null;
  return (
    <div className="py-24 px-32 bg-card">
      <Chip className="text-primary mb-24">{story.zoneName}</Chip>

      <h3 className="text-[3.6rem] text-primary mb-24 leading-[115%]">{story.stat}</h3>

      <div className="flex flex-col gap-12 mb-24">
        <p className="text-[1.6rem] text-muted-foreground">
          Duration: {new Date(story.duration.from).toDateString('USA')} -{' '}
          {new Date(story.duration.to).toDateString('USA')}
        </p>

        <h2 className="text-[2rem] tracking-[1%] leading-[115%]">{story.title}</h2>
        <p className="text-[1.6rem] text-muted-foreground">{story.description}</p>
      </div>

      <a className="text-primary text-[1.6rem] cursor-pointer">Read the story </a>
    </div>
  );
}
