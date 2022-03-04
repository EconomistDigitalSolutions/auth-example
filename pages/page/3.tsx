import { requiredAuthGetServerSideProps } from '../../lib/requiredAuthGetServerSideProps';
import Link from 'next/link';

const Page3 = (props) => {
  return <div>
    <h1>This is a page with AUTH</h1>

    <h3>Access token</h3>
    <p>The access token allows us to make requests to our ID provider on the user's behalf.</p>
    <p>This must exactly match an access token that our ID Provider has on record or the request will be rejected.</p>
    <ul>
      <li>This is what your access token looks like</li>
      <li><code>{props.auth?.access_token ?? `No access token`}</code></li>
      <li>Does this mean I'm logged in?</li>
      <li>Can I tamper with this?</li>
      <li>How can the server/browser know if it's been tampered with?</li>
      <li>What hoops would we need to jump through to verify this is legit?</li>
    </ul>

    <p><Link href='/page/2'><a>Go to the previous page</a></Link></p>
    <p><Link href='/page/4'><a>Go to the next page</a></Link></p>

  </div>
}

export const getServerSideProps = requiredAuthGetServerSideProps;

export default Page3;
