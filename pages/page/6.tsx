import { requiredAuthGetServerSideProps } from '../../lib/requiredAuthGetServerSideProps';
import Link from 'next/link';

const Page6 = () => {
  return <div>
    <h1>This is a page with AUTH</h1>

    <h2>What is the point?</h2>
    <p>This is to show roughly how our auth flow works, and what we need to do to work out if a user is logged in or
      not, as well as making sure they can't cheese it and make us think they're someone they're not.</p>
    <p>The key things to understand from all of this are:</p>
    <ul>
      <li>There are three "computers" in this process - the user's computer, our server and the ID provider's server.
      </li>
      <li>Our servers only have what the user's browser sends to us in terms of cookies, but our server can also set
        cookies on their browser
      </li>
      <li>There are limitations with how large a user's cookies can be in total</li>
      <li>Storing all the things in cookies is probably not the best in terms of security / privacy</li>
      <li>A user being logged in is basically just a case of us (generally meaning on our server, but also in the user's
        browser) being able to verify they are who they say they are
      </li>
      <li>We don't control the ID provider, so have to try and keep our idea of 'the user is logged in' in lock-step
        with the ID provider's idea of 'the user is logged in'
      </li>
    </ul>

    <h2>So am I logged in?</h2>
    <p>...?</p>

    <h2>Talking points</h2>
    <ul>
      <li>What are the weak points of all of this?</li>
      <li>What are the specific limitations of any aspect of _how_ we did this?</li>
      <li>How else could we do this to avoid any potential tampering?</li>
      <li>Are there any performance considerations for any of this?</li>
      <li>The data on this page is provided by the server checking a cookie containing a huge bunch of serialised data. How else could we get this to the browser?</li>
    </ul>

    <p><Link href='/page/5'><a>Go to the previous page</a></Link></p>
    <p><Link href='/'><a>Go home</a></Link></p>

  </div>
}

export const getServerSideProps = requiredAuthGetServerSideProps;

export default Page6;
