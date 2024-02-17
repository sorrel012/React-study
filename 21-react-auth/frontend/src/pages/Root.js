import { Outlet, useLoaderData } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { logout } from './Logout';
import { getTokenDuration } from '../util/auth';

function RootLayout() {
  const token = useLoaderData();

  useEffect(() => {
    if (!token) {
      return;
    }

    const tokenDuration = getTokenDuration();
    if (tokenDuration < 0) {
      logout();
    }

    setTimeout(() => {
      logout();
    }, tokenDuration);
  }, [token]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
