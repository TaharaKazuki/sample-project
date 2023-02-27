import { useRoutes } from 'react-router-dom';

import { routes as protectedRoutes } from './protected';
import { routes as publicRoutes } from './public';

import { useAuth } from '@/feature/auth/hooks/useAuth';

export const AppRoutes = () => {
  const { token } = useAuth();

  const routes = token ? protectedRoutes : publicRoutes;

  const element = useRoutes(routes);

  return <>{element}</>;
};
