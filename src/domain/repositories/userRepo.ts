import { User } from '../entity/userEntity/type';

import { apiClient } from './api/client';
import { IUserResponse } from './schema/userSchema';

const transformUserResponse = (response: IUserResponse): User => {
  return {
    id: response.id,
    name: response.name,
    loginNumber: response.loginNumber,
  };
};

export const userRepositories = {
  getUser: async (token: string): Promise<User | undefined> => {
    const response = await apiClient().getUser({
      headers: { Authorization: `Bearer ${token}` },
    });
    return transformUserResponse(response);
  },
};
