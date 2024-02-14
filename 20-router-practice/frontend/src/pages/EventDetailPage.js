import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EventItem from '../components/EventItem';

function EventDetailPage() {
  const params = useParams();
  const eventId = params.eventId;
  const events = useSelector((state) => state.events);
  const event = events.filter((event) => event.id === eventId);

  return (
    <>
      <h1>Event Detail Page - {eventId}</h1>
      <EventItem event={event[0]} />
    </>
  );
}

export default EventDetailPage;
