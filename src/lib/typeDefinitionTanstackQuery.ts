import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { useMutation as useTanMutation, useQuery as useTanQuery } from '@tanstack/react-query';
import { getCookie } from 'typescript-cookie';

import { queryClient } from './queryClient';

export const useQuery = <
  TQueryKey extends [string, (Record<string, unknown> | string)?],
  TQueryFnData,
  TError,
  TData = TQueryFnData
>(
  queryKey: TQueryKey,
  fetcher: (token: string, params?: TQueryKey[1]) => Promise<TQueryFnData>,
  options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>
) => {
  return useTanQuery({
    queryKey,
    queryFn: async () => {
      const authToken = getCookie('authToken');
      const accessToken = authToken ? authToken : '';
      return await fetcher(accessToken || '', queryKey[1]);
    },
    ...options,
  });
};

export const useMutation = <TVariables, TData, TContext>(
  queryKey: [string, Record<string, unknown>?],
  fetcher: (token: string, params: TVariables) => Promise<TData | void>,
  options?: UseMutationOptions<TData | void, unknown, TVariables, TContext>
) => {
  return useTanMutation(
    queryKey,
    async (params: TVariables) => {
      const authToken = getCookie('authToken');
      const accessToken = authToken ? authToken : '';
      return await fetcher(accessToken || '', params);
    },
    { ...options }
  );
};

export const useOptimisticMutation = <TVariables, TData, TContext>(
  queryKey: [string, Record<string, unknown>?],
  fetcher: (token: string, params: TVariables) => Promise<TData | void>,
  updater?: ((oldData: TContext, newData: TVariables) => TContext) | undefined,
  options?: Omit<
    UseMutationOptions<TData | void, unknown, TVariables, TContext>,
    'onMutate' | 'onError' | 'onSettled'
  >
) => {
  return useTanMutation(
    async (params: TVariables) => {
      const authToken = getCookie('authToken');
      const accessToken = authToken ? authToken : '';
      return await fetcher(accessToken || '', params);
    },
    {
      onMutate: async (data) => {
        await queryClient.cancelQueries(queryKey);

        const previousData = queryClient.getQueryData<TContext>(queryKey);
        if (previousData && updater) {
          queryClient.setQueryData<TContext>(queryKey, () => {
            return updater(previousData, data);
          });
        }

        return previousData;
      },
      onError: (err, _, context) => {
        queryClient.setQueryData(queryKey, context);
        console.error(err);
      },
      onSettled: () => {
        queryClient.invalidateQueries(queryKey);
      },
      ...options,
    }
  );
};
