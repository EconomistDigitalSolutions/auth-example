import { GetServerSideProps } from 'next';
import jwtDecode from 'jwt-decode';

const ServerSideAuth = (props) => {
  return <div>
    <h1>This is a page with AUTH</h1>
    <div>{props.auth ? `There's an auth cookie here!` : `No auth cookie here`}</div>

    <h2>Refresh token</h2>
    <code>{props.auth?.refresh_token ?? `No refresh token`}</code>

    <h2>Access token</h2>
    <code>{props.auth?.access_token ?? `No access token`}</code>

    <h2>ID token</h2>
    <code>{props.auth?.id_token ?? `No ID token`}</code>

    <h2>ID token payload (user data)</h2>
    <code style={{whiteSpace: 'pre-wrap'}}>{props.auth?.id_token ? JSON.stringify(jwtDecode(props.auth?.id_token)) : `No ID token`}</code>
  </div>
}

export const getServerSideProps: GetServerSideProps = (context) => {
  return {
    props: {
      auth: context.req.cookies['my_auth_cookie'] === undefined ? undefined : JSON.parse(context.req.cookies['my_auth_cookie']),
    }
  };
}

export default ServerSideAuth;
