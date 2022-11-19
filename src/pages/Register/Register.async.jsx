import { lazy } from 'react';

export const RegisterAsync = lazy(() =>
  import('./Register').then((module) => ({
    default: module.Register,
  }))
);
