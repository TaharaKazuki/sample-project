import type { RouteObject } from 'react-router-dom';

import { NavBar } from '@/components/layout/NaveBar';
import { Login } from '@/components/pages/Login';
import { NotFound } from '@/components/pages/NotFound';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <NavBar />,
    children: [
      { index: true, path: '/login', element: <Login /> },
      { path: '*', element: <NotFound /> },
      { path: '/', element: <NotFound /> },
    ],
  },
];
