import { QueryClient } from '@tanstack/react-query';

const queryErrorHandler = (error: unknown) => {
  const id = 'tanstack-query-error';
  const title = error instanceof Error ? error.message : 'error connecting to server';

  console.info('error message', id, title);
};

export const generateQueryClient = (): QueryClient => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        onError: queryErrorHandler,
        suspense: true,
      },
      mutations: {
        onError: queryErrorHandler,
      },
    },
  });
};

export const queryClient = generateQueryClient();
