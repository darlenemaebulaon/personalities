import { useState } from 'react';
import { artistList } from './data.tsx';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < artistList.length - 1;
  const hasBack = index > 0;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleBackClick() {
    if (hasBack) {
      setIndex(index - 1);
    } else {
      setIndex(artistList.length - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let artist = artistList[index];
  return (
    <>
      <h2>Milagros Darlene Mae M. Bulaon</h2>
      <button onClick={handleBackClick}>
        Back
      </button>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{artist.name} </i>
      </h2>
      <h3>
        ({index + 1} of {artistList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{artist.description}</p>}
      <img
        src={artist.url}
        alt={artist.alt}
      />
    </>
  );
}