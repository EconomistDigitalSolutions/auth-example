import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps<{auth?: any}> = async (context) => {
  console.log(`[/index]: Getting the user's session data out of the cookie and providing to our Next.js app`);
  if (context.req.cookies['my_auth_cookie'] === undefined) return {props: {}};
  return {
    props: {
      auth: JSON.parse(context.req.cookies['my_auth_cookie']),
    }
  };
}