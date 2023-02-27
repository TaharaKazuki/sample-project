import type { ZodiosPlugin } from '@zodios/core';

type ApiKeyPluginConfig = {
  getApiKey: () => Promise<string>;
};

export const pluginApiKey = (provider: ApiKeyPluginConfig): ZodiosPlugin => {
  return {
    request: async (_, config) => {
      return {
        ...config,
        headers: {
          ...config.headers,
          'api-key': await provider.getApiKey(),
        },
      };
    },
  };
};
