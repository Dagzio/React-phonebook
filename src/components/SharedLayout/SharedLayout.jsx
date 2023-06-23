import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Main } from './SharedLayout.styled';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default SharedLayout;
