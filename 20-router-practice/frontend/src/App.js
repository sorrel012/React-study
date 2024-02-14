// Challenge / Exercise

// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage.js
// 7. Output the ID of the selected event on the EventDetailPage.js
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import Homepage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import EditEventPage from './pages/EditEventPage';
import NewEventPage from './pages/NewEventPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: '/events', element: <EventsPage /> },
      { path: '/events/:eventId', element: <EventDetailPage /> },
      { path: '/events/:eventId/edit', element: <EditEventPage /> },
      { path: '/events/new', element: <NewEventPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
