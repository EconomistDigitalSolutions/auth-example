import { requiredAuthGetServerSideProps } from '../../lib/requiredAuthGetServerSideProps';
import Link from 'next/link';

const Page4 = (props) => {
  return <div>
    <h1>This is a page with AUTH</h1>

    <h3>ID token</h3>
    <p>The ID token is a JWT - this is some JSON data (see below) that has been signed with a private key by our ID
      provider.</p>
    <p>JWTs can be verified by getting the ID provider's public key(s) to verify it was signed by the corresponding
      private key.</p>

    <ul>
      <li>This is what your id token looks like</li>
      <li><code>{props.auth?.id_token ?? `No ID token`}</code></li>
      <li>It's hard to find the dots in that mess, but it's basically <code>&lt;base64-encoded-string&gt;.&lt;base64-encoded-string&gt;.&lt;base64-encoded-string&gt;</code></li>
      <li>Does this mean I'm logged in?</li>
      <li>Can I tamper with this?</li>
      <li>How can the server/browser know if it's been tampered with?</li>
      <li>What hoops would we need to jump through to verify this is legit?</li>
    </ul>

    <p><Link href='/page/3'><a>Go to the previous page</a></Link></p>
    <p><Link href='/page/5'><a>Go to the next page</a></Link></p>

  </div>
}

export const getServerSideProps = requiredAuthGetServerSideProps;

export default Page4;
