import { headerPlugin, Zodios } from '@zodios/core';
import { pluginFetch } from '@zodios/plugins';

import { pluginApiKey } from './lib/apiKeyPlugin';
import { mswPlugin } from './msw/lib/mswPlugin';

export const apiClient = () => {
  const api = new Zodios('aaa', []);

  api.use(pluginFetch());
  api.use(headerPlugin('Content-Type', 'application/json'));

  api.use(
    pluginApiKey({
      getApiKey: async () => 'API KEY',
    })
  );

  api.use(mswPlugin());
  return api;
};
