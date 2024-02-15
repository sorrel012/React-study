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
  return data.result;
}
