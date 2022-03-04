import { requiredAuthGetServerSideProps } from '../../lib/requiredAuthGetServerSideProps';
import Link from 'next/link';

const Page1 = () => {
  return <div>
    <h1>This is a page with AUTH</h1>

    <h2>What have we done?</h2>
    <p>Once we've gone through that auth flow, we've now stored (somewhere) a bunch of user data that we got from our ID provider. So, a bunch of questions:</p>
    <ul>
      <li>What have we stored? Where have we stored it? Could we do this differently?</li>
      <li>Do we need to be careful about what we store and where it gets stored?</li>
      <li>If we've stored it somewhere, how the heck to we get access to it?</li>
      <li>Just because we have some data, does that mean I'm "logged in"?</li>
      <li>Where do we check that I'm "logged in"? Who determines that I am "logged in"? What the heck does "logged in" even mean?</li>
    </ul>

    <h2>So am I logged in?</h2>
    <p>Some things to ponder that I'll come back to at the end</p>
    <ul>
      <li>What are the weak points of all of this?</li>
      <li>What are the specific limitations of any aspect of _how_ we did this?</li>
      <li>How else could we do this to avoid any potential tampering?</li>
      <li>Are there any performance considerations for any of this?</li>
      <li>The data on this page is provided by the server checking a cookie containing a huge bunch of serialised data. How else could we get this to the browser?</li>
    </ul>

    <p><Link href='/page/flow'><a>Go to the previous page</a></Link></p>
    <p><Link href='/page/2'><a>Go to the next page</a></Link></p>

  </div>
}

export const getServerSideProps = requiredAuthGetServerSideProps;

export default Page1;
