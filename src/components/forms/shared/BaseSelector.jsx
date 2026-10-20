import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export default function BaseSelector({ title, children }) {
  return (
    <div className="col-start-1 col-end-3 max-lg:col-end-2">
      {title && <h3 className="text-[1.4rem] tracking-[6%] mb-16">{title}</h3>}

      <div className="flex flex-wrap [&_div]:w-fit gap-12 max-[450px]:[&_div]:w-full">
        {children}
      </div>
    </div>
  );
}
