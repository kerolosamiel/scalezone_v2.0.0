import BaseSections from '../sections/Common/BaseSections';
import ResultCard from '../sections/ProofSection/ResultCard';
import EmptyState from '../ui/EmptyState';

export default function ProofSection({ proof = {} }) {
  const { title, subtitle, card } = proof;
  return (
    <BaseSections title={title} subtitle={subtitle}>
      {!card || !card?.clientTag || card?.clientTag === '' ? (
        <EmptyState
          className="py-64"
          title="No Proof Found"
          description="Our case study and proof details are currently being updated. Check back soon!"
        />
      ) : (
        <ResultCard card={card} />
      )}
    </BaseSections>
  );
}
