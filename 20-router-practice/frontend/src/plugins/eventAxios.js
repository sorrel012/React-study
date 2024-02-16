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

export const registEvent = async (url, event, method) => {
  let data = {
    status: '',
    result: {},
  };

  await axios
    .request({
      method: method,
      url: url,
      data: event,
    })
    .then((response) => {
      if (response.statusText === 'Created') {
        data.status = 'SUCCESS';
      }
    })
    .catch((error) => {
      data.status = 'FAIL';
      data.result = error.response;
    });

  return data;
};
