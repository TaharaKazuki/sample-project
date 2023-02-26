import * as z from 'zod';

export const SignUpSchema = z.object({
  name: z.string().min(1, { message: '入力がありません' }),
  password: z.string().min(1, { message: '入力がありません' }),
});
