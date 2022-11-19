import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../config/router';

export const AppRouter = () => {
  return (
    <Suspense fallback='login...'>
      <RouterProvider router={router} />
    </Suspense>
  );
};
