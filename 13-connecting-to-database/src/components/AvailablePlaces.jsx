import Places from './Places.jsx';
import { useEffect, useState } from 'react';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fetchPlaces() {
      const response = await fetch('http://localhost:3000/places');
      const resData = response.json();
      setAvailablePlaces(resData.places);
    }
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
