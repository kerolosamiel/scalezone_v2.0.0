import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export default function ZoneSelector({
  zones = [],
  register,
  setZone,
  title = 'Choose a Zone',
  name = 'zone',
}) {
  if (!zones || zones.length === 0) return null;

  return (
    <div className="col-start-1 col-end-3">
      <h3 className="text-[1.4rem] tracking-[6%] mb-16">{title}</h3>

      <div className="flex flex-wrap [&_div]:w-fit gap-12">
        {zones.map((z, i) => (
          <Field key={`zone-${z.id || i}`}>
            <FieldLabel
              htmlFor={z.slug}
              className="cursor-pointer py-12 px-16 border w-fit! has-checked:border-accent"
            >
              <Input
                id={z.slug}
                type="radio"
                name={name}
                value={z.slug
                  .split('-')
                  .map((n) => `${n.charAt(0).toUpperCase()}${n.slice(1)}`)
                  .join(' ')}
                className="sr-only"
                {...register(name, {
                  onChange: (e) => setZone(z.slug || e.target.id),
                })}
              />

              {z.slug
                .split('-')
                .map((n) => `${n.charAt(0).toUpperCase()}${n.slice(1)}`)
                .filter((n) => n.toLowerCase() != 'zone')
                .join(' ')}
            </FieldLabel>
          </Field>
        ))}

        <Field>
          <FieldLabel
            htmlFor="not-sure"
            className="cursor-pointer py-12 px-16 border w-fit! has-checked:border-accent normal-case"
          >
            <Input
              id="not-sure"
              type="radio"
              name={name}
              value="Not Sure Yet"
              className="sr-only"
              {...register(name, {
                onChange: (e) => setZone(e.target.id),
              })}
            />
            Not Sure Yet
          </FieldLabel>
        </Field>
      </div>
    </div>
  );
}
