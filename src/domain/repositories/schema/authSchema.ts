import { makeApi } from '@zodios/core';
import { z } from 'zod';

import { errors } from '../const/commonSchema';

/* ------- Each Schema -------*/
const commonSchema = z
  .string()
  .regex(/^[0-9a-zA-Z]*$/)
  .max(10);

const tokenSchema = z.string();

/* ------- Request Body -------*/
const requestBodySchema = z.object({
  name: commonSchema.min(1),
  password: commonSchema.min(6),
});

/* ------- Response -------*/
const responseSchema = z.object({
  token: tokenSchema,
});

export const authApiSchema = makeApi([
  {
    method: 'post',
    path: '/auth/me',
    alias: 'postAuth',
    description: 'Authorization',
    parameters: [
      {
        name: 'body',
        description: 'Login Body',
        type: 'Body',
        schema: requestBodySchema,
      },
    ],
    response: responseSchema,
    errors: errors,
  },
]);
