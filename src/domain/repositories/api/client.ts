import { headerPlugin, Zodios } from '@zodios/core';
import { pluginFetch } from '@zodios/plugins';

import { API_ENDPOINT } from '../const/url';
import { authApiSchema } from '../schema/authSchema';

import { pluginApiKey } from './lib/apiKeyPlugin';
import { mswPlugin } from './msw/lib/mswPlugin';

export const apiClient = () => {
  const api = new Zodios(API_ENDPOINT, [...authApiSchema]);

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
