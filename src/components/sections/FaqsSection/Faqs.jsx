import BaseSections from '../Common/BaseSections';
import Faq from './Faq';

export default function FaqsSection({ faqs = {} }) {
  const { title, subtitle, questions } = faqs;

  if (!faqs || questions.length === 0) return null;

  return (
    <BaseSections title={title} subtitle={subtitle}>
      <div className="max-w-600">
        {questions?.map((f, i) => (
          <Faq id={i} faq={f} key={`Question-${i}`} />
        ))}
      </div>
    </BaseSections>
  );
}
