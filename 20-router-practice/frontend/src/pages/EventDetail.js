import { getEventDetail, getEvents } from '../plugins/eventAxios';
import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from 'react-router-dom';
import axios from 'axios';
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventDetailPage() {
  const { event, events } = useRouteLoaderData('event-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadEvents) => <EventsList events={loadEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage;

async function loadEvent(id) {
  const data = await getEventDetail(id);

  if (data.status === 'FAIL') {
    json(
      { message: 'Could not fetch Event detail' },
      {
        status: 500,
      },
    );
  } else if (data.status === 'SUCCESS') {
    return data.result.event;
  }
}

async function loadEvents() {
  const data = await getEvents();

  if (data.status === 'FAIL') {
    throw json(
      { message: 'Could not fetch Events' },
      {
        status: 500,
      },
    );
  } else if (data.status === 'SUCCESS') {
    return data.result;
  }
}

export async function loader({ request, params }) {
  const id = params.eventId;

  return defer({
    event: loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ params, request }) {
  const eventId = params.eventId;

  await axios
    .request({
      method: request.method,
      url: `http://localhost:8080/events/${eventId}`,
    })
    .catch(() => {
      throw json({ message: 'Could not delete event.' }, { status: 500 });
    });

  return redirect('/events');
}
