import * as React from 'react';
import { BottomNavigation, Login } from './src/index';
import { UserProvider } from './src/services/context/index';



export default function App() {
  const [isSignedIn, setIsSignedIn] = React.useState(false); // set false for 
  const handleAuth = (value: boolean) => {
    setIsSignedIn(value);
  };

  return (
    <UserProvider>
      {isSignedIn ? (
      <BottomNavigation setSignedIn={setIsSignedIn} />
      ) : (
      <Login handleAuth={handleAuth} />
      )}
    </UserProvider>


  );
}
