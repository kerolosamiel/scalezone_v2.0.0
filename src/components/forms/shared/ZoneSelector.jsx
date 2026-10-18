import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import BaseSelector from './BaseSelector';

export default function ZoneSelector({
  zones = [],
  register,
  setZone,
  setSelectZone,
  title = 'Choose a Zone',
  name = 'zone',
}) {
  if (!zones || zones.length === 0) return null;

  return (
    <BaseSelector title={title}>
      {zones.map((z, i) => (
        <Field key={`zone-${z.id || i}`}>
          <FieldLabel
            htmlFor={z.slug}
            className="cursor-pointer py-12 px-16 border w-fit! has-checked:border-accent max-[450px]:w-full!"
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
                onChange: (e) => {
                  setZone(z.slug || e.target.id);
                  setSelectZone(false);
                },
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
          className="cursor-pointer py-12 px-16 border w-fit has-checked:border-accent normal-case max-[450px]:w-full!"
        >
          <Input
            id="not-sure"
            type="radio"
            name={name}
            value="Not Sure Yet"
            className="sr-only"
            {...register(name, {
              onChange: (e) => {
                setZone(e.target.id);

                setTimeout(() => {
                  setSelectZone(true);
                }, 1000);

                setSelectZone(false);
              },
            })}
          />
          Not Sure Yet
        </FieldLabel>
      </Field>
    </BaseSelector>
  );
}
