import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Main } from './SharedLayout.styled';
import Header from 'components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, selectToken } from 'redux/selectors';
import { getCurrentUser, setToken } from 'redux/user/userOperations';

const SharedLayout = () => {
  const stateCurrentUser = useSelector(selectCurrentUser);
  const userToken = useSelector(selectToken);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userToken && !stateCurrentUser) {
      setToken(userToken);
      dispatch(getCurrentUser());
    }
  }, [dispatch, stateCurrentUser, userToken]);

  return (
    <Container>
      <Header />
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};

export default SharedLayout;
