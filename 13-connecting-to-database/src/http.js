import Error from './components/Error.jsx';

export async function fetchAvailableFunction() {
  const response = await fetch('http://localhost:3000/places');
  if (!response.ok) {
    throw new Error('Failed to fetch places');
  }
  const resData = await response.json();

  return resData.places;
}
