import BaseSections from '../sections/Common/BaseSections';
import StoryCard from './StoryCard';

export default function StoriesSection({ stories }) {
  console.log('stories', stories);
  return (
    <BaseSections title={stories.title} subtitle={stories.subtitle}>
      {stories.stories?.length > 0 && (
        <div>
          <ul className="grid grid-cols-3 gap-24">
            {stories.stories.map((story, i) => (
              <li key={`story-${i}`}>
                <StoryCard story={story} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </BaseSections>
  );
}
