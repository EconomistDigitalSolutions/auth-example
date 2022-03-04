import { requiredAuthGetServerSideProps } from '../../lib/requiredAuthGetServerSideProps';
import Link from 'next/link';
import Image from 'next/image';

const Flow = () => {
  return <div>
    <h1>This is a page with AUTH</h1>

    <h2>What happens when I click login?</h2>

    <p>
      <img src='/images/flow.jpg' style={{maxWidth: 'calc(100vw - 80px)', maxHeight: 'calc(100vh - 80px)'}} alt='Basic auth flow diagram, written in unsharpened pencil on paper' />
    </p>

    <ul>
      <li>
        Go to this website's login page.
        <ul>
          <li>Here we decide where to send you on to get authenticated (and can remember where you came from if you like)</li>
          <li>Redirect out to the ID provider's login page</li>
        </ul>
      </li>
      <li>
        We're now on the ID provider's login page
        <ul>
          <li>User inputs credentials</li>
          <li>ID provider redirects us back to the callback page when it all checks out OK</li>
        </ul>
      </li>
      <li>
        We're now on the callback api endpoint
        <ul>
          <li>Here we exchange a one time code (part of the URL query param) for user session data by asking nicely</li>
          <li>We also store a little memento to show how much we care about you in your cookies</li>
          <li>We redirect back to our site</li>
        </ul>
      </li>
      <li>
        We're now on our site again on whatever page we were on before
        <ul>
          <li>We check that little memento cookie we set before and use it to verify you are who you say you are</li>
          <li>There's a lot of important stuff to talk about with that little bit, so without further ado...</li>
        </ul>
      </li>
    </ul>

    <p>Let's talk about what we have and what we can store and how some nasty hacker in a hoodie and an anonymous mask can try and circle around our bulletproof auth solution</p>

    <p><Link href='/page/1'><a>Go to the next page</a></Link></p>
  </div>
}

export const getServerSideProps = requiredAuthGetServerSideProps;

export default Flow;
