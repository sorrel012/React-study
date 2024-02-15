import React, { useCallback, useEffect, useState } from 'react';
import EventsList from '../components/EventsList';
import { useDispatch } from 'react-redux';
import { getEvents } from '../plugins/eventAxios';
import { eventActions } from '../store/event-slice';

function EventsPage() {
  const dispatch = useDispatch();
  const [events, setEvents] = useState([]);

  const getEventsData = useCallback(async () => {
    const data = await getEvents();
    const eventData = data.result;
    setEvents(eventData);
    dispatch(eventActions.replaceEvent(eventData));
  }, [dispatch]);

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
