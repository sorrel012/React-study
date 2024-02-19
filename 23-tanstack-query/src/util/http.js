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

export async function createNewEvent(eventData) {
  try {
    const { data } = await axios.post(
      'http://localhost:3000/events',
      eventData,
    );
    return data.event;
  } catch (error) {
    if (error.response) {
      const customError = new Error(
        'An error occurred while creating the event',
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

export async function fetchSelectableImages({ signal }) {
  try {
    const { images } = axios.get(`http://localhost:3000/events/images`, {
      signal,
    });

    return images;
  } catch (error) {
    if (error.response) {
      const customError = new Error(
        'An error occurred while fetching the images',
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
