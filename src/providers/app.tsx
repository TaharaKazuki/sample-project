import { ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { AuthProvider } from './AuthProvider';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AuthProvider>
      <ChakraProvider>
        <Router>{children}</Router>
      </ChakraProvider>
    </AuthProvider>
  );
};
