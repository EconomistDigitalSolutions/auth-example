import { NextApiHandler } from 'next';
import { getOAuthClient } from '../../../../lib/getOAuthClient';

// note that the route for this needs to be the same as per engagement or we can't authenticate at all
const handler: NextApiHandler = async (req, res) => {
  // at this point, we have been authenticated by SF.
  // We have a query param called `code` that we can use to get the user's auth data. This is part of req.url.

  const session = await getOAuthClient().code.getToken(req.url);

  // session is a set of data that contains (some tokens, plus a property called data that contains):
  // - id token (a short-lived JWT that contains user data from SF)
  // - refresh token (a long-lived token we can use to get a new id token from SF)
  // - access token (a token we can use to make authenticated requests directly to SF on behalf of the user)

  // it is our responsibility to remember this data however we need to. Cookies is one way:
  // we could also store this data in a K-V store, then set a pointer to that data as a cookie if we so wished
  res.writeHead(302, {
    Location: 'http://localhost:3000',
    'Set-Cookie': `my_auth_cookie=${JSON.stringify(session.data)}; path=/`, // probably want this to be more secure...
  }); // we might want to go somewhere else here in reality
  res.end();
}

export default handler;