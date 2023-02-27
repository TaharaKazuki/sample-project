import { ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { AuthProvider } from './AuthProvider';

import { queryClient } from '@/lib/queryClient';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Router>
          <AuthProvider>{children}</AuthProvider>
        </Router>
        <ReactQueryDevtools initialIsOpen={true} />
      </ChakraProvider>
    </QueryClientProvider>
  );
};
