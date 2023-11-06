import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { StyledAppContainer } from './App.styled';
import Loader from './Loader/Loader';
import Navigation from './Navigation/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from 'redux/authReducer';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivatRoute/PrivatRoute';
import { selectAuthIsloading } from 'redux/authSelectors';



const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ConatctsPage = lazy(() => import('pages/ContactsPage'));

const appRoutes = [
  {
    path: '/register',
    element: (
      <RestrictedRoute>
        <RegisterPage />
      </RestrictedRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <RestrictedRoute>
        <LoginPage />
      </RestrictedRoute>
    ),
  },
  {
    path: '/contacts',
    element: (
      <PrivateRoute>
        <ConatctsPage />
      </PrivateRoute>
    ),
  },
];

export const App = () => {
  const dispatch = useDispatch();
  
const isRefreshing = useSelector(selectAuthIsloading);
  useEffect(() => {
    dispatch(refreshThunk());
   }, [dispatch]);
  return (
    <>
      <StyledAppContainer>
        <Navigation />
        
        {isRefreshing ? <Loader /> : <Suspense fallback={<Loader />}>
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
        }
      </StyledAppContainer>
    </>
  );
};
export default App;
//  {
//    /* <Route path="/" element={<HomePage />} />
//             <Route path="movies" element={<MoviesPage />} />
//             <Route path="movies/:movieId/*" element={<MovieDatailesPage />} />
//             <Route path="/register" element={<RegisterPage />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/contacts" element={<ConatctsPage />} /> */
//  }