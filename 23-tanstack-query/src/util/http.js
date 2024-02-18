import axios from 'axios';

async function fetchEvents() {
  try {
    const { data } = await axios.get('http://localhost:3000/events');
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
