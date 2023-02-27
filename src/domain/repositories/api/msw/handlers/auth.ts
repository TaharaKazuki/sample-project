import { restPost } from '../lib/typeDefinitionMsw';

export const authApis = [
  restPost('/auth/me', async (req, res, ctx) => {
    const body = await req.json<(typeof req)['body']>();
    if (body.name && body.password) {
      return res(
        ctx.delay(500),
        ctx.status(200),
        ctx.set('Access-Control-Allow-Origin', '*'),
        ctx.set('Access-Control-Allow-Methods', '*'),
        ctx.set('Access-Control-Allow-Headers', '*'),
        ctx.json({ token: 'JwtToken' })
      );
    }
  }),
];
