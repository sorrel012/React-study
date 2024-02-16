import React, { Suspense } from 'react';
import { Await, defer, json, useLoaderData } from 'react-router-dom';
import { getEvents } from '../plugins/eventAxios';
import EventsList from '../components/EventsList';

function EventsPage() {
  const events = useLoaderData().events;

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const data = await getEvents();

  if (data.status === 'FAIL') {
    json(
      { message: 'Could not fetch Events' },
      {
        status: 500,
      },
    );
  } else if (data.status === 'SUCCESS') {
    return data.result;
  }
}

export async function loader() {
  defer({
    events: loadEvents(),
  });
}
