import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from './screens/Home';
import About from './screens/About';
import NotFound from './screens/NotFound';
import ErrorComponent from './components/ErrorComponent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home />, errorElement: <ErrorComponent /> },
      { path: '/about', element: <About /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
