import { useEffect, useState } from 'react';
import { Personality } from './types.ts';

export default function Gallery() {
  const [personalities, setPersonalities] = useState<Personality[]>([]);
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/bulaon/personalities')
      .then(res => res.json())
      .then(data => setPersonalities(data));
  }, []);

  if (personalities.length === 0) return <p>No data</p>;

  const hasNext = index < personalities.length - 1;
  const hasBack = index > 0;
  const personality = personalities[index];

  return (
    <>
      <h2>Milagros Darlene Mae M. Bulaon</h2>
      <button onClick={() => setIndex(hasBack ? index - 1 : personalities.length - 1)}>Back</button>
      <button onClick={() => setIndex(hasNext ? index + 1 : 0)}>Next</button>
      <h2><i>{personality.name}</i></h2>
      <h3>({index + 1} of {personalities.length})</h3>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{personality.description}</p>}
      <img src={personality.url} alt={personality.alt} />
    </>
  );
}
