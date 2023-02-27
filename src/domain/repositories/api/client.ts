import { Zodios } from '@zodios/core';
import { pluginFetch } from '@zodios/plugins';

import { API_ENDPOINT } from '../const/url';
import { authApiSchema } from '../schema/authSchema';
import { userApiSchema } from '../schema/userSchema';

import { mswPlugin } from './msw/plugins';
import { headerPlugin, pluginApiKey } from './plugins';

export const apiClient = () => {
  const api = new Zodios(API_ENDPOINT, [...authApiSchema, ...userApiSchema]);

  api.use(
    pluginFetch({
      mode: 'cors',
      keepalive: true,
    })
  );
  api.use(headerPlugin('Content-Type', 'application/json'));
  api.use(headerPlugin('Access-Control-Allow-Origin', '*'));

  api.use(
    pluginApiKey({
      getApiKey: async () => 'API KEY',
    })
  );
  // TODO mock時のみ
  api.use(mswPlugin());
  return api;
};
