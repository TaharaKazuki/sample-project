import { useRoutes } from 'react-router-dom';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

import { useAuth } from '@/feature/auth/hooks/useAuth';

export const AppRoutes = () => {
  const { token } = useAuth();

  const routes = token ? protectedRoutes : publicRoutes;

  const element = useRoutes(routes);

  return <>{element}</>;
};
