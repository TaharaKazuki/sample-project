import { makeErrors } from '@zodios/core';
import { z } from 'zod';

export const errors = makeErrors([
  {
    status: 404,
    description: 'Not Found',
    schema: z.object({
      errorMessage: z.string(),
    }),
  },
  {
    status: 'default',
    description: 'Default Error',
    schema: z.object({
      errorMessage: z.string(),
    }),
  },
]);
