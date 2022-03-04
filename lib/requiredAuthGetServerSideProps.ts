import { GetServerSideProps } from 'next';

export const requiredAuthGetServerSideProps: GetServerSideProps<{auth?: any}> = async (context) => {
  console.log(`[requiredAuthGetServerSideProps]: Getting the user's session data out of the cookie and providing to our Next.js app`);
  if (context.req.cookies['my_auth_cookie'] === undefined) {
    console.log(`[requiredAuthGetServerSideProps]: Not authenticated (I think)`)
    return { redirect: { permanent: false, destination: `/` } };
  }
  return {
    props: {
      auth: JSON.parse(context.req.cookies['my_auth_cookie']),
    }
  };
}