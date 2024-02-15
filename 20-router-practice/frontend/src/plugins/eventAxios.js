import axios from 'axios';

export const getEvents = async () => {
  let data = {
    status: '',
    result: '',
  };

  await axios
    .get('http://localhost:8080/events')
    .then((response) => {
      if (response.statusText === 'OK') {
        data.status = 'SUCCESS';
        data.result = response.data.events;
      }
    })
    .catch(() => {
      data.status = 'FAIL';
      data.result = 'Failed to get events.';
    });

  return data;
};

export const getEventDetail = async (id) => {
  let data = {
    status: '',
    result: '',
  };

  await axios
    .get('http://localhost:8080/events/' + id)
    .then((response) => {
      if (response.statusText === 'OK') {
        data.status = 'SUCCESS';
        data.result = response.data;
      }
    })
    .catch(() => {
      data.status = 'FAIL';
      data.result = 'Failed to get event.';
    });

  return data;
};
