import React from 'react';
import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';
import { getEvents } from '../plugins/eventAxios';

function EventsPage() {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  } else {
    return <>{<EventsList events={data.result} />}</>;
  }
}

export default EventsPage;

export async function loader() {
  const data = await getEvents();

  if (data.status === 'FAIL') {
    return { isError: true, message: 'Could not fetch events' };
  } else if (data.status === 'SUCCESS') {
    return data;
  }
}
