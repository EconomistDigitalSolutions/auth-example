import { GetServerSideProps } from 'next';
import { getRedis } from './getRedis';

export const optionalAuthGetServerSideProps: GetServerSideProps<{auth?: any}> = async (context) => {
  console.log(`[/index]: Getting the user's session data out of the cookie and providing to our Next.js app`);

  const sessionToken = context.req.cookies['session_token'];
  if (sessionToken === undefined) return { props: {} };

  const redis = await getRedis();
  const session = await redis.GET(`session:${sessionToken}`);

  return {
    props: {
      auth: JSON.parse(session),
    }
  };
}