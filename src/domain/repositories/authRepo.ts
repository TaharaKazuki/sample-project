import { apiClient } from '@/domain/repositories/api/client';

type token = string;

type IAuthParam = {
  name: string;
  password: string;
};

export const authRepositories = {
  authenticate: async (
    requestValue: IAuthParam
  ): Promise<void | {
    token: token;
  }> => {
    const response = await apiClient()
      .postAuth(requestValue)
      .catch((e) => console.info(e));
    return response;
  },
};
