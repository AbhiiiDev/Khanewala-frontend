import {AppState, Auth0Provider, User} from '@auth0/auth0-react'
import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';

type Props ={
    children:React.ReactNode;
}

export default function Auth0provider({children}:Props) {

    const navigate=useNavigate();
const clientId=import.meta.env.VITE_AUTH0_CLIENT_ID;
const domain=import.meta.env.VITE_AUTH0_DOMAIN;
const audience=import.meta.env.VITE_AUTH0_AUDIENCE;
console.log(window.location.origin);
if (!domain || !clientId  ) {
  console.log('Unable to Initialise auth', clientId, domain);
  return <div>Auth0 is not properly configured.</div>; // or null
}
    
    const onRedirect = (appState?: AppState, user?: User) => {
console.log('🔁 onRedirectCallback called');
  console.log('🔒 Current URL:', window.location.href);
  console.log('📦 AppState:', appState);
  console.log('👤 User:', user);
  // Avoid manual navigation unless required
  // navigate(appState?.returnTo || '/'); // Exa
    }
  return (
  <Auth0Provider
  clientId={clientId}
  domain={domain}
  authorizationParams={{
    redirect_uri: `${window.location.origin}/auth-callback`,
    audience:audience
  }}
  onRedirectCallback={onRedirect}
  >
    {children}
  </Auth0Provider>
  )
}
