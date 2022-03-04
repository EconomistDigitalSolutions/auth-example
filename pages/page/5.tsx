import jwtDecode from 'jwt-decode';
import { requiredAuthGetServerSideProps } from '../../lib/requiredAuthGetServerSideProps';
import Link from 'next/link';

const Page5 = (props) => {
  return <div>
    <h1>This is a page with AUTH</h1>

    <h3>ID token payload (user data)</h3>
    <p>This is just some JSON, it has been pulled out of the JWT, and all signing has now been thrown away.</p>
    <ul>
      <li>This is what your id token contains</li>
      <li><code
        style={{ whiteSpace: 'pre-wrap' }}>{props.auth?.id_token ? JSON.stringify(jwtDecode(props.auth?.id_token)) : `No ID token`}</code>
      </li>
      <li>Does this mean I'm logged in?</li>
      <li>Can I tamper with this?</li>
      <li>How can the server/browser know if it's been tampered with?</li>
      <li>What hoops would we need to jump through to verify this is legit?</li>
    </ul>

    <p><Link href='/page/4'><a>Go to the previous page</a></Link></p>
    <p><Link href='/page/6'><a>Go to the next page</a></Link></p>

  </div>
}

export const getServerSideProps = requiredAuthGetServerSideProps;

export default Page5;
