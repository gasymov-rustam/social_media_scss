import { lazy } from 'react';

export const ProfileAsync = lazy(() =>
  import('./Profile').then((module) => ({
    default: module.Profile,
  }))
);
