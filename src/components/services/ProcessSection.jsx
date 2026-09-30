import Chip from '@/components/ui/chip';
import ProcessSection from '../sections/Process/ProcessSection';

export default function ServProcessSection({ process }) {
  if (!process) return null;

  return (
    <ProcessSection process={process} className="items-start">
      <Chip className="mb-64 bg-card text-primary">
        <p>{process?.chip}</p>
      </Chip>
    </ProcessSection>
  );
}
