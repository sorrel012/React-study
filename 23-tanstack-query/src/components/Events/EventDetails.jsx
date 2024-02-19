import { Link, Outlet, useParams } from 'react-router-dom';

import Header from '../Header.jsx';
import { useQuery } from '@tanstack/react-query';
import { fetchEvent } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';

export default function EventDetails() {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['event-detail'],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });

  console.log(data);

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isLoading && (
        <div style={{ textAlign: 'center' }}>
          <LoadingIndicator />
        </div>
      )}
      {!isLoading && (
        <article id="event-details">
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}`} alt="" />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>
                  {data.date} @ {data.time}
                </time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </article>
      )}
      {isError && (
        <ErrorBlock
          title="Failed to load event details"
          message={error.info?.message || 'Please try again later.'}
        />
      )}
    </>
  );
}
