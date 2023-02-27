import { restGet } from '../lib/typeDefinitionMsw';

export const userApis = [
  restGet('/user', async (req, res, ctx) => {
    return res(
      ctx.delay(500),
      ctx.status(200),
      ctx.json({ id: '1', name: 'sample', loginNumber: 2 })
    );
  }),
];
