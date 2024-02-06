import Places from './Places.jsx';
import { useEffect, useState } from 'react';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  async function fetchPlaces() {
    setIsFetching(true);
    try {
      const response = await fetch('http://localhost:3000/places');
      if (!response.ok) {
        throw new Error('Failed to fetch places');
      }
      const resData = await response.json();

      navigator.geolocation.getCurrentPosition((position) => {
        const sortedPlaces = sortPlacesByDistance(
          resData.places,
          position.coords.latitude,
          position.coords.longitude,
        );
        setAvailablePlaces(sortedPlaces);
        setIsFetching(false);
      });
    } catch (error) {
      setError({
        message:
          error.message || 'Could not fetch places, please try again later',
      });
      setIsFetching(false);
    }
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
