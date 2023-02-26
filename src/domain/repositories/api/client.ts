import { Zodios } from '@zodios/core';
import { pluginFetch } from '@zodios/plugins';

import { mswPlugin } from './lib/mswPlugin';

export const apiClient = () => {
  const api = new Zodios('aaa', []);

  api.use(pluginFetch());

  api.use(mswPlugin());
  return api;
};
