import { lazy } from 'react';

export const LoginAsync = lazy(() =>
  import('./Login').then((module) => ({
    default: module.Login,
  }))
);
