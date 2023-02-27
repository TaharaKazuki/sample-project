import { apiClient } from '@/domain/repositories/api/client';

type token = string;

type IAuthParam = {
  name: string;
  password: string;
};

export const authRepositories = {
  authenticate: async (requestValue: IAuthParam): Promise<{ token: token }> => {
    const response = await apiClient().postAuth(requestValue);
    return response;
  },
};
