import { getEventDetail } from '../plugins/eventAxios';
import { json, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDetailPage() {
  const event = useRouteLoaderData('event-detail');

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
