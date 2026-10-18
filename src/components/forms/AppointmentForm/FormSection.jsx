import { Expect } from '@/components/ui/directs';
import BaseFormSection from '../shared/BaseFormSection';
import BaseInformationSide from '../shared/BaseInformationSide';
import InformationBlock from '../shared/InformationBlock';
import FormSide from './FormSide';

export default function FormSection({ info, zones }) {
  const expects = [info.expect.first, info.expect.second, info.expect.third];
  return (
    <BaseFormSection>
      <FormSide zones={zones} />

      <BaseInformationSide info={info}>
        <InformationBlock title={info.expect.title || 'Chat Instantly'} sep={true}>
          {expects.map((e, i) => (
            <Expect
              key={`expect-${i}`}
              expect={e}
              className="text-[1.8rem] max-md:text-[1.6rem] mb-12"
            />
          ))}
        </InformationBlock>
      </BaseInformationSide>
    </BaseFormSection>
  );
}
