import MediaCard from '../sections/ResourcesSection/MediaCard';

export default function MediaItems({ items }) {
  if (!items) return null;
  return (
    <div>
      <ul className="grid grid-cols-3 gap-24">
        {items?.map((item, i) => (
          <li key={`media-item-${item.id || i}`}>
            <MediaCard card={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
