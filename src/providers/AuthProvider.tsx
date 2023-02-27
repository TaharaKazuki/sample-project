import type { ReactNode } from 'react';
import { createContext, useState } from 'react';
import { getCookie, removeCookie } from 'typescript-cookie';

// import { User } from '@/domain/entity/userEntity/type';
// import { makeQueryKey } from '@/utils/makeQueryKey';

// const AUTH_KEY = makeQueryKey.auth;
// const USER_KEY = makeQueryKey.user;

// type ILoginParams = Pick<User, 'name'> & IPassword;
// type IPassword = { password: string };
// type IToken = { token: string };

type IAuthContext = {
  token?: string | null;
  // login: UseMutateFunction<void | IToken, unknown, ILoginParams, IToken>;
  logout: () => void;
  // isLoading: boolean;
};

export const AuthContext = createContext<IAuthContext>({
  token: null,
  // login: () => Promise.resolve(undefined),
  logout: () => undefined,
  // isLoading: false,
});

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | undefined | null>(getCookie('authToken'));

  // const { mutate: login, isLoading } = useMutation<ILoginParams, IToken, IToken>(
  //   [`${AUTH_KEY}`],
  //   async (_, params) => authRepositories.authenticate(params),
  //   {
  //     onSuccess: (data) => {
  //       if (data) {
  //         setCookie('authToken', data.token, { path: '/' });
  //         setToken(data.token);

  //         queryClient.invalidateQueries([`${USER_KEY}`]);

  //         const user = queryClient.getQueryData<User>([`${USER_KEY}`]);
  //         if (user && user.loginNumber > 1) {
  //           console.info('aaa');
  //         }
  //       }
  //     },
  //   }
  // );

  const logout = () => {
    setToken(null);
    removeCookie('authToken');
  };

  return <AuthContext.Provider value={{ token, logout }}>{children}</AuthContext.Provider>;
};
