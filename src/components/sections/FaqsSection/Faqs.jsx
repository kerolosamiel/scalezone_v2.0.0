import Faq from './Faq';

export default function FaqsSection({ title, subtitle, faqs = [] }) {
  return (
    <section className="p-64 max-md:p-0">
      <div className="max-w-1440 mx-auto flex flex-col gap-64 p-48 max-md:p-32 max-sm:px-24 max-sm:gap-48">
        <div>
          <h3 className="text-primary text-[2rem] tracking-[1%] mb-24 max-md:mb-8 max-md:text-[1.6rem]">
            {subtitle}
          </h3>
          <h2 className="text-[4.4rem] tracking-[6%] max-md:text-[3rem] max-sm:text-[2.4rem]">
            {title}
          </h2>
        </div>

        <div className="max-w-600">
          {faqs?.map((f, i) => (
            <Faq id={i} faq={f} key={`Question-${i}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
