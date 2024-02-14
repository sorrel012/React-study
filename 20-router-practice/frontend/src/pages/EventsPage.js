import React, { useEffect, useState } from 'react';
import { getEvents } from '../plugins/eventAxios';
import EventsList from '../components/EventsList';
import { useDispatch } from 'react-redux';
import { eventActions } from '../store/event-slice';

function EventsPage() {
  const dispatch = useDispatch();
  const [events, setEvents] = useState([]);

  const getEventsData = async () => {
    const data = await getEvents();
    const eventData = data.result;
    setEvents(eventData);
    dispatch(eventActions.replaceEvent, eventData);
  };

  useEffect(() => {
    getEventsData();
  }, [getEventsData]);

  return (
    <>
      <h1>Events Page</h1>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;
