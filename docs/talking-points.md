# Storing the session data

By session data, I mean the refresh token, access token & id token

- storing the session in cookies
  - can be tampered with quite easily
  - unverifiable stuff can't be checked without going back to the ID provider
  - can be huge
- storing the session in a K-V store accessible only by the server
  - still need to store something in the browser, or we don't know how to get _your_ session data
  - store a pointer (the key in the K-V store) in a cookie, use that to get the session data out of the store
  - need to be careful with this - we don't want to allow for incremental id based attacks
  - refresh token is quite nice, also the most useful thing there
  - if we made one of our own, it might be nice to have a signed/encrypted string instead of a plain one. We could verify this first before getting the session data
    - This sounds like a JWT containing a single value...

## Existing solutions

- what cookies do we store
- what do we do with those cookies
- where do we go off-piste
  - i.e. why is our solution so much more complicated than this?
  - what do we do about pretending to be other user types
- what do we do with the session data once we have it
  - see "why is our solution so much more complicated than this?"
- what about other apps?
  - why are we logged in on site A, but not site B?
  - why do we have cookie X and Y? Who uses it?
- what about historical stuff
  - dual runnings
- what about the K-V store?
- what about logout?
