import Places from './Places.jsx';
import { useEffect, useState } from 'react';
import Error from './Error.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  async function fetchPlaces() {
    setIsFetching(true);
    try {
      const response = await fetch('http://localhost:3000/place');
      if (!response.ok) {
        throw new Error('Failed to fetch places');
      }
      const resData = await response.json();

      setAvailablePlaces(resData.places);
    } catch (error) {
      setError({
        message:
          error.message || 'Could not fetch places, please try again later',
      });
    }

    setIsFetching(false);
  }
  useEffect(() => {
    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An error occured!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
