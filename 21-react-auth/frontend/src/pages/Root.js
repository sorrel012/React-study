import { Outlet, useLoaderData } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { logout } from './Logout';

function RootLayout() {
  const token = useLoaderData();

  useEffect(() => {
    if (!token) {
      return;
    }

    setTimeout(
      () => {
        logout();
      },
      60 * 60 * 1000,
    );
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
