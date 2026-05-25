import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
