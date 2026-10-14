import { Field, FieldLabel } from '@/components/ui/field';
import BaseSelector from './BaseSelector';
import { Input } from '@/components/ui/input';

export default function ServicesSelector({ services = [], register, name = 'service' }) {
  if (!services || services.length === 0) return null;

  return (
    <BaseSelector>
      {services.map((s, i) => (
        <Field key={`service-${s.id || i}`}>
          <FieldLabel
            htmlFor={s.slug}
            className="cursor-pointer py-12 px-16 border w-fit! has-checked:border-accent"
          >
            <Input
              id={s.slug}
              type="radio"
              name={name}
              value={s.serviceName}
              className="sr-only"
              {...register(name)}
            />

            {s.serviceName}
          </FieldLabel>
        </Field>
      ))}

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
          {...register(name)}
        />
        Not Sure Yet
      </FieldLabel>
    </BaseSelector>
  );
}
