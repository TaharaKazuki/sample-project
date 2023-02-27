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

export const headerPlugin = (key: string, value: string): ZodiosPlugin => {
  return {
    request: async (_, config) => {
      return {
        ...config,
        headers: {
          ...config.headers,
          [key]: value,
        },
      };
    },
  };
};
