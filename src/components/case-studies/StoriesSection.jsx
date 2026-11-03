import BaseSections from '../sections/Common/BaseSections';
import EmptyState from '../ui/EmptyState';
import StoryCard from './StoryCard';

export default function StoriesSection({ stories }) {
  const { title = 'Browse by zone.', subtitle = 'ALL STORIES', stories: storyList } = stories || {};

  return (
    <BaseSections title={title} subtitle={subtitle}>
      {stories.stories?.length > 0 && (
        <div>
          {!storyList || storyList?.length == 0 ? (
            <EmptyState
              className="py-64"
              title="NO CASE STUDIES FOUND"
              description="New growth journeys and brand audits are on the way. Check back soon."
            />
          ) : (
            <ul className="grid grid-cols-3 gap-24 max-lg:grid-cols-2 max-md:grid-cols-1">
              {stories.stories.map((story, i) => (
                <li key={`story-${i}`} className="items-stretch flex">
                  <StoryCard story={story} />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </BaseSections>
  );
}
