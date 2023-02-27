import { useRoutes } from 'react-router-dom';

import { routes as publicRoutes } from './public';

export const AppRoutes = () => {
  const element = useRoutes(publicRoutes);

  return <>{element}</>;
};
