import { NextApiHandler } from 'next';
import { getOAuthClient } from '../../../lib/getOAuthClient';
import jwtDecode from "jwt-decode";
import { getRedis } from '../../../lib/getRedis';

const handler: NextApiHandler = async (req, res) => {
  // by this point, we have stored a cookie containing user data. we can use this to check if we're signed in or not.
  //   method 1: check the id token is a valid, signed JWT. If it's expired, ask for a new one.
  //   method 2: just blindly ask for a new session. Let's do that for simplicity's sake

  console.log(`[/api/auth/refresh]: Getting the user's refresh token out of their cookie`);
  // this cookie as set in our callback handler. We're only picking out one bit.
  const sessionToken = req.cookies['session_token'];
  const redis = await getRedis();
  const existingSession = await redis.GET(`session:${sessionToken}`);
  const { refresh_token } = JSON.parse(existingSession)

  console.log(`[/api/auth/refresh]: Fetching the new session data from our ID provider`);
  // go get some updated data from SF (same response as in the callback)
  const newSession = await getOAuthClient().createToken({ refresh_token }).refresh();

  console.log(`[/api/auth/refresh]: Updating the cookie we previously set with the new session data`);
  // update our data store with the new data & send out the contents of our session (this bit is not required)
  await redis.SET(`session:${sessionToken}`, JSON.stringify(newSession.data));

  console.log(`[/api/auth/refresh]: Sending back the contents of the id token in case we need this`);
  // this is the raw token, so it'll look like a garbage string. Can be decoded in jwt.io to get its contents
  res.send(jwtDecode(newSession.data.id_token));
  res.end();
}

export default handler;