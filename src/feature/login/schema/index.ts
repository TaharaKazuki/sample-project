import * as z from 'zod';

export const SignUpSchema = z.object({
  name: z.string().min(1),
  password: z.string().min(1),
});
