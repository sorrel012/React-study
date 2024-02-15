import React from 'react';
import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';
import { getEvents } from '../plugins/eventAxios';

function EventsPage() {
  const events = useLoaderData();

  return <>{<EventsList events={events} />}</>;
}

export default EventsPage;

export async function loader() {
  const data = await getEvents();

  if (data.status === 'FAIL') {
    throw new Response(JSON.stringify({ message: 'Could not fetch Events' }), {
      status: 500,
    });
  } else if (data.status === 'SUCCESS') {
    return data.result;
  }
}
