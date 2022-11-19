import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '../ui/ProtectedRoute';
import { Home, Login, Register } from '../../../../pages';
import { Suspense } from 'react';
import { Layout } from '../../../../features/Layout';
import { Profile } from '../../../../pages/Profile';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/profile/:id',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/login',
    element: (
      <Suspense fallback='login...'>
        <Login />
      </Suspense>
    ),
  },
  {
    path: '/register',
    element: (
      <Suspense fallback='login...'>
        <Register />
      </Suspense>
    ),
  },
  {
    path: '/*',
    element: <Navigate to={'/login'} />,
  },
]);
