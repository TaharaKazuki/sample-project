import { useRoutes } from 'react-router-dom';

import { routes as protectedRoutes } from './protected';

import { useAuth } from '@/feature/auth/hooks/useAuth';

export const AppRoutes = () => {
  const { token, data } = useAuth();

  console.info('token', token);
  console.info('data', data);

  const routes = protectedRoutes;

  const element = useRoutes(routes);

  return <>{element}</>;
};
