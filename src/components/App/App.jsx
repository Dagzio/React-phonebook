import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage')
);
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <Suspense>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="register"
          element={
            <Suspense>
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            </Suspense>
          }
        />
        <Route
          path="login"
          element={
            <Suspense>
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            </Suspense>
          }
        />
        <Route
          path="contacts"
          element={
            <Suspense>
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
export default App;
