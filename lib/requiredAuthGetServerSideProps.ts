import { GetServerSideProps } from 'next';
import { getRedis } from './getRedis';

export const requiredAuthGetServerSideProps: GetServerSideProps<{auth?: any}> = async (context) => {
  console.log(`[requiredAuthGetServerSideProps]: Getting the user's session data out of the cookie and providing to our Next.js app`);

  const sessionToken = context.req.cookies['session_token'];

  if (sessionToken === undefined) {
    console.log(`[requiredAuthGetServerSideProps]: Not authenticated (I think)`)
    return { redirect: { permanent: false, destination: `/` } };
  }

  const redis = await getRedis();
  const session = await redis.GET(`session:${sessionToken}`);

  return {
    props: {
      auth: JSON.parse(session),
    }
  };
}