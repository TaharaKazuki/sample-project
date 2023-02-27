import type { ReactNode } from 'react';
import { createContext, useState } from 'react';
import { UseMutateFunction } from '@tanstack/react-query';
import { getCookie, removeCookie, setCookie } from 'typescript-cookie';

import { User } from '@/domain/entity/userEntity/type';
import { authRepositories } from '@/domain/repositories/authRepo';
import { userRepositories } from '@/domain/repositories/userRepo';
import { queryClient } from '@/lib/queryClient';
import { useMutation, useQuery } from '@/lib/typeDefinitionTanstackQuery';
import { makeQueryKey } from '@/utils/makeQueryKey';

const AUTH_KEY = makeQueryKey.auth;
const USER_KEY = makeQueryKey.user;

type ILoginParams = Pick<User, 'name'> & IPassword;
type IPassword = { password: string };
type IToken = { token: string };

type IAuthContext = {
  token?: string | null;
  login: UseMutateFunction<void | IToken, unknown, ILoginParams, IToken>;
  logout: () => void;
  data: User | undefined;
  // isLoading: boolean;
};

export const AuthContext = createContext<IAuthContext>({
  token: null,
  login: () => Promise.resolve(undefined),
  logout: () => undefined,
  data: undefined,
  // isLoading: false,
});

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | undefined | null>(getCookie('authToken'));

  const { mutate: login } = useMutation<ILoginParams, IToken, IToken>(
    [`${AUTH_KEY}`],
    async (_, params) => authRepositories.authenticate(params),
    {
      onSuccess: async (data) => {
        if (data) {
          setCookie('authToken', data.token, { path: '/' });
          setToken(data.token);
          await queryClient.fetchQuery([`${USER_KEY}`]);
        }
      },
    }
  );

  const { data } = useQuery([`${USER_KEY}`], async (token) => userRepositories.getUser(token), {
    enabled: !!getCookie('authToken'),
  });

  const logout = () => {
    setToken(null);
    removeCookie('authToken');
    // cacheを削除する
  };

  return (
    <AuthContext.Provider value={{ token, logout, login, data }}>{children}</AuthContext.Provider>
  );
};
