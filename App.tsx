import * as React from 'react';
import { initializeApp } from 'firebase/app';
import { BottomNavigation, Login } from './src/index';



export default function App() {
  const [isSignedIn, setIsSignedIn] = React.useState(false); // set false for 
  
  const handleAuth = (value: boolean) => {
    setIsSignedIn(value);
  };

  return (
    isSignedIn ? (
      <BottomNavigation setSignedIn={setIsSignedIn}/>
    ) : (
      <Login handleAuth={handleAuth}/>
    )
  );
}
