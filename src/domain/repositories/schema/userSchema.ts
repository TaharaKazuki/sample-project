import { makeApi } from '@zodios/core';
import { z } from 'zod';

import { errors } from '../const/commonSchema';

/* ------- Response -------*/
const responseSchema = z.object({
  id: z.string(),
  name: z.string(),
  loginNumber: z.number().int(),
});

export type IUserResponse = z.infer<typeof responseSchema>;

export const userApiSchema = makeApi([
  {
    method: 'get',
    path: '/user',
    alias: 'getUser',
    description: 'User Info',
    parameters: [{ name: 'Authorization', type: 'Header', schema: z.string() }],
    response: responseSchema,
    errors: errors,
  },
]);
