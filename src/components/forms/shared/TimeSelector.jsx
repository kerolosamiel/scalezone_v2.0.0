import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export default function TimeSelector({ times = [], register, name = 'time' }) {
  if (!times || times.length === 0) return null;
  return (
    <div className="grid grid-cols-2 gap-8">
      {times.map((t, i) => (
        <Field key={`time-${i}`}>
          <FieldLabel
            htmlFor={t}
            className="cursor-pointer py-12 px-16 border w-full! flex justify-center has-checked:border-accent"
          >
            <Input
              id={t}
              type="radio"
              name={name}
              value={t}
              className="sr-only"
              {...register(name)}
            />

            {t}
          </FieldLabel>
        </Field>
      ))}
    </div>
  );
}
