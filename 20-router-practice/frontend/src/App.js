// Challenge / Exercise

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import Homepage from './pages/Home';
import EventsPage from './pages/Events';
import EventDetailPage from './pages/EventDetail';
import EditEventPage from './pages/EditEvent';
import NewEventPage from './pages/NewEvent';
import { getEvents } from './plugins/eventAxios';
import EventsRootLayout from './pages/EventsRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage /> },
      {
        index: true,
        element: <EventsRootLayout />,
        children: [
          {
            path: 'events',
            element: <EventsPage />,
            loader: async () => {
              const data = await getEvents();
              return data.result;
            },
          },
          { path: ':eventId', element: <EventDetailPage /> },
          { path: 'new', element: <NewEventPage /> },
          { path: ':eventId/edit', element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
