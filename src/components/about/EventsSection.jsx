import BaseAboutSections from '../sections/Common/BaseAboutSections';
import GallaryImage from '../sections/Events/GallaryImage';
import EmptyState from '../ui/EmptyState';

export default function EventsSection({ events = {} }) {
  const { title = 'Scalezone, on the STAGE.', subtitle = 'SOME EVENTS', gallery = [] } = events;
  return (
    <BaseAboutSections title={title} subtitle={subtitle}>
      {!gallery || gallery?.length == 0 ? (
        <EmptyState
          className="py-64"
          title="No Events Found"
          description="Our upcoming events schedule is currently being updated. Check back soon!"
        />
      ) : (
        <ul className="grid grid-cols-3 gap-32 max-md:grid-cols-2 max-[570px]:grid-cols-1!">
          {gallery.map((g, i) => (
            <li key={`event-${i}`} className="flex justify-center items-center w-full">
              <GallaryImage card={g} />
            </li>
          ))}
        </ul>
      )}
    </BaseAboutSections>
  );
}
