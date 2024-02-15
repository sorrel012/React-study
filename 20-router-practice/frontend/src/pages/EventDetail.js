import React from 'react';
import EventItem from '../components/EventItem';
import { getEventDetail } from '../plugins/eventAxios';
import { json, useLoaderData } from 'react-router-dom';

function EventDetailPage() {
  const event = useLoaderData();

  return <>{<EventItem event={event} />}</>;
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
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
