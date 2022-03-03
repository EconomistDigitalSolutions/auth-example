import { GetServerSideProps } from 'next';
import jwtDecode from 'jwt-decode';

const ServerSideAuth = (props) => {
  return <div>
    <h1>This is a page with AUTH</h1>

    <h2>Am I logged in now?</h2>
    <p>I know that you <span style={{fontWeight: 'bold'}}>{props.auth ? `DO` : `DON'T`}</span> have some auth state according to the cookie.</p>
    {!props.auth && <p>You probably want to sign in now: <a href='/api/auth/login'>Login</a></p>}
    {props.auth && <p>Does this mean I'm logged in? Let's check what we now know...</p>}

    <h3>Refresh token</h3>
    <ul>
      <li>This is what your refresh token looks like</li>
      <li><code>{props.auth?.refresh_token ?? `No refresh token`}</code></li>
      <li>Does this mean I'm logged in?</li>
      <li>Can I tamper with this?</li>
      <li>How can the server/browser know if it's been tampered with?</li>
      <li>What hoops would we need to jump through to verify this is legit?</li>
    </ul>
    <p>The refresh token allows us to get all this data all over again (a new refresh token, access token, id token and the other stuff we haven't used or mentioned).</p>
    <p>This must exactly match a refresh token that our ID Provider has on record or the request will be rejected.</p>

    <h3>Access token</h3>
    <ul>
      <li>This is what your access token looks like</li>
      <li><code>{props.auth?.access_token ?? `No access token`}</code></li>
      <li>Does this mean I'm logged in?</li>
      <li>Can I tamper with this?</li>
      <li>How can the server/browser know if it's been tampered with?</li>
      <li>What hoops would we need to jump through to verify this is legit?</li>
    </ul>
    <p>The access token allows us to make requests to our ID provider on the user's behalf.</p>
    <p>This must exactly match an access token that our ID Provider has on record or the request will be rejected.</p>

    <h3>ID token</h3>
    <ul>
      <li>This is what your id token looks like</li>
      <li><code>{props.auth?.id_token ?? `No ID token`}</code></li>
      <li>Does this mean I'm logged in?</li>
      <li>Can I tamper with this?</li>
      <li>How can the server/browser know if it's been tampered with?</li>
      <li>What hoops would we need to jump through to verify this is legit?</li>
    </ul>
    <p>The ID token is a JWT - this is some JSON data (see below) that has been signed with a private key by our ID provider.</p>
    <p>JWTs can be verified by getting the ID provider's public key(s) to verify it was signed by the corresponding private key.</p>

    <h3>ID token payload (user data)</h3>
    <ul>
      <li>This is what your id token contains</li>
      <li><code style={{whiteSpace: 'pre-wrap'}}>{props.auth?.id_token ? JSON.stringify(jwtDecode(props.auth?.id_token)) : `No ID token`}</code></li>
      <li>Does this mean I'm logged in?</li>
      <li>Can I tamper with this?</li>
      <li>How can the server/browser know if it's been tampered with?</li>
      <li>What hoops would we need to jump through to verify this is legit?</li>
    </ul>
    <p>This is just some JSON, it has been pulled out of the JWT, and all signing has now been thrown away.</p>

    <h2>So am I logged in?</h2>
    <ul>
      <li>What are the weak points of all of this?</li>
      <li>What are the limitations of how we did this?</li>
      <li>How else could we do this to avoid any potential tampering?</li>
      <li>Are there any performance considerations for any of this?</li>
      <li>The data on this page is provided by the server by checking the cookie. How else could we get this to the browser?</li>
    </ul>
  </div>
}

export const getServerSideProps: GetServerSideProps = (context) => {
  console.log(`[/index]: Getting the user's session data out of the cookie and providing to our Next.js app`);
  return {
    props: {
      auth: context.req.cookies['my_auth_cookie'] === undefined ? null : JSON.parse(context.req.cookies['my_auth_cookie']),
    }
  };
}

export default ServerSideAuth;
