import { restGet } from '../lib/typeDefinitionMsw';

export const userApis = [
  restGet('/user', async (req, res, ctx) => {
    return res(
      ctx.delay(500),
      ctx.status(200),
      ctx.set('Access-Control-Allow-Origin', '*'),
      ctx.set('Access-Control-Allow-Methods', '*'),
      ctx.set('Access-Control-Allow-Headers', '*'),
      ctx.json({ id: '1', name: 'sample', loginNumber: 0 })
    );
  }),
];
