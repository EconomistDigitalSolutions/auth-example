import { requiredAuthGetServerSideProps } from '../../lib/requiredAuthGetServerSideProps';
import Link from 'next/link';

const Page2 = (props) => {
  return <div>
    <h1>This is a page with AUTH</h1>

    <h3>Refresh token</h3>
    <p>The refresh token allows us to get all this data all over again (a new refresh token, access token, id token and
      the other stuff we haven't used or mentioned).</p>
    <p>This must exactly match a refresh token that our ID Provider has on record or the request will be rejected.</p>
    <ul>
      <li>This is what your refresh token looks like</li>
      <li><code>{props.auth?.refresh_token ?? `No refresh token`}</code></li>
      <li>Does this mean I'm logged in?</li>
      <li>Can I tamper with this?</li>
      <li>How can the server/browser know if it's been tampered with?</li>
      <li>What hoops would we need to jump through to verify this is legit?</li>
    </ul>

    <p><Link href='/page/1'><a>Go to the previous page</a></Link></p>
    <p><Link href='/page/3'><a>Go to the next page</a></Link></p>

  </div>
}

export const getServerSideProps = requiredAuthGetServerSideProps;

export default Page2;
