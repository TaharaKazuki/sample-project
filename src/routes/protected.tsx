import type { RouteObject } from 'react-router-dom';

import { NavBar } from '@/components/layout/NaveBar';
import { Home } from '@/components/pages/Home';
import { Login } from '@/components/pages/Login';
import { NotFound } from '@/components/pages/NotFound';

export const protectedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <NavBar />,
    children: [
      { index: true, element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/homeDummy', element: <Home /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
