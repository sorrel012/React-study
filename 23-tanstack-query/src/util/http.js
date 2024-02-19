import axios from 'axios';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

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
    const response = await axios.get('http://localhost:3000/events/images', {
      signal,
    });

    return response.data.images;
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

export async function fetchEvent({ id, signal }) {
  try {
    const response = await axios.get(`http://localhost:3000/events/${id}`, {
      signal,
    });

    return response.data.event;
  } catch (error) {
    if (error.response) {
      const customError = new Error(
        'An error occurred while fetching the event',
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

export async function deleteEvent({ id }) {
  try {
    console.log(id);
    const response = await axios.delete(`http://localhost:3000/events/${id}`);

    return response.data;
  } catch (error) {
    if (error.response) {
      const customError = new Error(
        'An error occurred while deleting the event',
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

export async function updateEvent({ id, event }) {
  try {
    const response = await axios.put(
      `http://localhost:3000/events/${id}`,
      event,
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      const customError = new Error(
        'An error occurred while updating the event',
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
