import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage= lazy(() => import("./pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));


 const App=() =>{
  const dispatch = useDispatch();
 const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Please wait, updating user info...</b>
  ) : (
    <Layout>
      <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={
              <RestrictedRoute component={<RegistrationPage />} redirectTo="/" />
            }
          />
        <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts"/>} />
            <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} redirectTo="/login" />} />
        </Routes>
        </Suspense>
        <Toaster />
    </Layout>
  );
 }

export default App;