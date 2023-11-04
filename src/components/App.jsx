import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { StyledAppContainer } from './App.styled';
import Loader from './Loader/Loader';
import Navigation from './Navigation/Navigation';



const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ConatctsPage = lazy(() => import('pages/ContactsPage'));

const appRoutes = [
  
  { path: '/register', element: <RegisterPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/contacts', element: <ConatctsPage /> },
];

export const App = () => {
  return (
    <>
      <StyledAppContainer>
        <Navigation />
        
        <Suspense fallback={<Loader />}>
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
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