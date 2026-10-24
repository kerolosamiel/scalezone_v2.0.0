import MediaCard from '../sections/ResourcesSection/MediaCard';

export default function MediaItems({ items, slug }) {
  if (!items) return null;
  return (
    <div>
      <ul className="grid grid-cols-3 gap-24 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {items?.map((item, i) => (
          <li key={`media-item-${item.id || i}`}>
            <MediaCard card={item} slug={slug} />
          </li>
        ))}
      </ul>
    </div>
  );
}
