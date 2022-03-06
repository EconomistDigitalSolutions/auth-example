import { NextApiHandler } from 'next';
import { getOAuthClient } from '../../../../lib/getOAuthClient';
import { getRedis } from '../../../../lib/getRedis';
import { randomUUID } from 'crypto';

// note that the route for this needs to be the same as per engagement or we can't authenticate at all
const handler: NextApiHandler = async (req, res) => {
  // at this point, we have been authenticated by SF.
  // We have a query param called `code` that we can use to get the user's auth data. This is part of req.url.

  console.log(`[/api/auth/login/callback]: Swapping one-time code for user's session data`);
  const session = await getOAuthClient().code.getToken(req.url);

  // session is a set of data that contains (some tokens, plus a property called data that contains):
  // - id token (a short-lived JWT that contains user data from SF)
  // - refresh token (a long-lived token we can use to get a new id token from SF)
  // - access token (a token we can use to make authenticated requests directly to SF on behalf of the user)

  const token = randomUUID();
  const redis = await getRedis();
  await redis.SET(`session:${token}`, JSON.stringify(session.data));

  console.log(`[/api/auth/login/callback]: Got user session data, storing as a cookie and redirecting back to a proper page`);
  res.writeHead(302, {
    Location: 'https://localhost:3000',
    'Set-Cookie': `session_token=${token}; path=/`, // probably want this to be more secure...
  }); // we might want to go somewhere else here in reality
  res.end();
}

export default handler;