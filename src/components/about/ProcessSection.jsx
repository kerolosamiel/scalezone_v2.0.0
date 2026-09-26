import Step from '../sections/Process/Step';
import EmptyState from '../ui/EmptyState';

export default function ProcessSection({ process = {} }) {
  const {
    title = 'A structured process, from first call to kickoff.',
    subtitle = 'How We Work',
    stepOne,
    stepTwo,
    stepThree,
    stepFour,
  } = process;

  const steps = [stepOne, stepTwo, stepThree, stepFour];

  return (
    <section>
      <div className=" flex flex-col justify-center items-center py-64 px-80 max-w-1680 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16">
        <div className="mb-64 w-full">
          <h3 className="text-[2rem] tracking-[1%] text-primary">{subtitle}</h3>
          <h2 className="text-[4.4rem] tracking-[1%] max-w-700 leading-[115%] max-sm:text-[3rem] max-[360px]:text-[2.4rem]!">
            {title}
          </h2>
        </div>

        {!steps || steps?.length == 0 ? (
          <EmptyState
            className="py-64"
            title="No Steps Found"
            description="Our process roadmap is currently being updated. Check back soon!"
          />
        ) : (
          <ul className="grid grid-cols-4 gap-44 max-lg:grid-cols-2 max-[470px]:grid-cols-1!">
            {steps.map((s, i) => (
              <li
                key={`event-${i}`}
                className="flex justify-center items-center w-full max-lg:nth-2:[&>article]:after:hidden max-[470px]:[&>article]:after:hidden"
              >
                <Step
                  stepNumber={`0${i + 1}`}
                  step={s}
                  className={
                    i != steps.length - 1
                      ? 'relative after:absolute after:w-[calc(100%-1.1rem)] after:h-2 after:bg-accent after:top-27.5 after:left-55 max-[470px]:after:hidden'
                      : ''
                  }
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
