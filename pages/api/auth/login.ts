import { NextApiHandler } from 'next';
import { getOAuthClient } from '../../../lib/getOAuthClient';

const handler: NextApiHandler = (req, res) => {
  // do some things, work out where we're going to redirect back to, stuff like that if we want to

  res.writeHead(302, { Location: getOAuthClient().code.getUri() });
  res.end();
}

export default handler;