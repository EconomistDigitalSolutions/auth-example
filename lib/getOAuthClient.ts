import ClientOAuth2 from 'client-oauth2';

export const getOAuthClient = () =>
  new ClientOAuth2({
    clientId: process.env.SFC_CLIENT_ID,
    clientSecret: process.env.SFC_CLIENT_SECRET,
    accessTokenUri: process.env.SFC_ACCESS_TOKEN_URI,
    authorizationUri: process.env.SFC_ACCESS_AUTHORIZATION_URI,
    redirectUri: 'https://localhost:3000/api/auth/login/callback', // must match ID provider's config to work
  })