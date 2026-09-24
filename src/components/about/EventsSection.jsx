import GallaryImage from '../sections/Events/GallaryImage';
import EmptyState from '../ui/EmptyState';

export default function EventsSection({ events = {} }) {
  const { title, subtitle, gallery } = events;
  return (
    <section>
      <div className="py-64 px-80 max-w-1680 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16">
        <div className="mb-64 w-full">
          <h3 className="text-[2rem] tracking-[1%] text-primary">{subtitle}</h3>
          <h2 className="text-[4.4rem] tracking-[1%] max-w-700 leading-[115%] max-sm:text-[3rem] max-[360px]:text-[2.4rem]!">
            {title}
          </h2>
        </div>

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
      </div>
    </section>
  );
}
