import type { ReactNode } from 'react';
import { createContext, useState } from 'react';
import { getCookie, removeCookie } from 'typescript-cookie';

// import { User } from '@/domain/entity/userEntity/type';

// type ILoginParams = Pick<User, 'name'> & IPassword;
// type IPassword = { password: string };
// type IToken = { token: string };

type IAuthContext = {
  token?: string | null;
  // login: (params: ILoginParams) => Promise<User | undefined>;
  logout: () => void;
};

export const AuthContext = createContext<IAuthContext>({
  token: null,
  // login: () => Promise.resolve(undefined),
  logout: () => undefined,
});

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | undefined | null>(getCookie('authToken'));

  // const authFn = useMutation<ILoginParams, IToken, IToken>(
  //   ['auth'],
  //   async (_, params) => authRepositories.authenticate(params),
  //   {
  //     onSuccess: (data) => {
  //       if (data) {
  //         setCookie('authToken', data.token, { path: '/' });
  //         setToken(data.token);
  //       }
  //     },
  //   }
  // );

  // const login = async (params: ILoginParams) => {
  //   authFn.mutateAsync(params);
  // };

  const logout = () => {
    setToken(null);
    removeCookie('authToken');
  };

  return <AuthContext.Provider value={{ token, logout }}>{children}</AuthContext.Provider>;
};
