import BaseSections from '../Common/BaseSections';
import Faq from './Faq';

export default function FaqsSection({ title, subtitle, faqs = [] }) {
  return (
    <BaseSections title={title} subtitle={subtitle}>
      <div className="max-w-600">
        {faqs?.map((f, i) => (
          <Faq id={i} faq={f} key={`Question-${i}`} />
        ))}
      </div>
    </BaseSections>
  );
}
