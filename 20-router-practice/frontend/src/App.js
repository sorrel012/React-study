import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import Homepage from './pages/Home';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventDetailPage, {
  action as deleteEventAction,
  loader as eventDetailLoader,
} from './pages/EventDetail';
import EditEventPage from './pages/EditEvent';
import NewEventPage from './pages/NewEvent';
import EventsRootLayout from './pages/EventsRoot';
import Error from './pages/Error';
import { action as manipulateEventAction } from './components/EventForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            loader: eventDetailLoader,
            id: 'event-detail',
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
