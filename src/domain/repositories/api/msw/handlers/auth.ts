import { restPost } from '../lib/typeDefinitionMsw';

export const authApis = [
  restPost('/auth/me', async (req, res, ctx) => {
    const body = await req.json<(typeof req)['body']>();
    if (body.name && body.password) {
      return res(
        ctx.set('Access-Control-Allow-Origin', '*'),
        ctx.delay(500),
        ctx.status(200),
        ctx.json({ token: 'JwtToken' })
      );
    }
  }),
];
