import React, { useCallback, useEffect, useState } from 'react';
import EventsList from '../components/EventsList';
import { useDispatch } from 'react-redux';
import { getEvents } from '../plugins/eventAxios';
import { eventActions } from '../store/event-slice';

function EventsPage() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState();
  const [error, setError] = useState();

  const getEventsData = useCallback(async () => {
    setIsLoading(true);

    const data = await getEvents();
    if (data.status === 'SUCCESS') {
      const eventData = data.result;
      setFetchedEvents(eventData);
      dispatch(eventActions.replaceEvent(eventData));
    } else if (data.status === 'FAIL') {
      setError('Fetching events failed.');
    }

    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
    getEventsData();
  }, [getEventsData]);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    </>
  );
}

export default EventsPage;
