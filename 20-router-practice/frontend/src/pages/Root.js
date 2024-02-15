import React from 'react';
import MainNavigation from '../components/MainNavigation';
import { Outlet, useNavigation } from 'react-router-dom';

function RootLayout() {
  const navitgation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {navitgation.state === 'loading' && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
