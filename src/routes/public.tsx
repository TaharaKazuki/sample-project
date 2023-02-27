import type { RouteObject } from 'react-router-dom';

import { NavBar } from '@/components/layout/NaveBar';
import { Home } from '@/components/pages/Home';
import { Login } from '@/components/pages/Login';
import { NotFound } from '@/components/pages/NotFound';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <NavBar />,
    children: [
      { index: true, element: <Home /> },
      { path: '/homeDummy', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
