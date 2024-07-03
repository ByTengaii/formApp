import * as React from 'react';
import { BottomNavigation, Login } from './src/index';


export default function App() {
  const [isSignedIn, setIsSignedIn] = React.useState(true); // set false for auth
  const handleAuth = (value: boolean) => {
    setIsSignedIn(value);
  };

  return (
    isSignedIn ? (
      <BottomNavigation setSignedIn={setIsSignedIn}/>
    ) : (
      <Login handleAuth={handleAuth} />
    )
  );
}
