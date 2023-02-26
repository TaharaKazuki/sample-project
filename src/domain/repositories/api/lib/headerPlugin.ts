import type { ZodiosPlugin } from '@zodios/core';

export const pluginApiKey = (key: string, value: string): ZodiosPlugin => {
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
