import React, { useEffect, useState } from 'react';
import { getEvents } from '../plugins/eventAxios';
import EventsList from '../components/EventsList';

function EventsPage() {
  const [events, setEvents] = useState([]);

  const getEventsData = async () => {
    const eventData = await getEvents();
    setEvents(eventData.result);
  };

  useEffect(() => {
    getEventsData();
  }, []);

  return (
    <>
      <h1>Events Page</h1>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;
