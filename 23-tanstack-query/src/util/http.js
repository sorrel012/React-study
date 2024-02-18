import axios from 'axios';

export async function fetchEvents({ signal, searchTerm }) {
  let url = 'http://localhost:3000/events';

  if (searchTerm) {
    url += `?search=${searchTerm}`;
  }

  try {
    const { data } = await axios.get(url, { signal: signal });
    return data.events;
  } catch (error) {
    if (error.response) {
      const customError = new Error(
        'An error occurred while fetching the events',
      );
      customError.code = error.response.status;
      customError.info = error.response.data;
      throw customError;
    } else if (error.request) {
      throw new Error('No response was received');
    } else {
      throw new Error('Error in setting up the request');
    }
  }
}
