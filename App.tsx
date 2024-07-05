import * as React from 'react';
import { useAppFonts} from "./src/theme/index";
import { BottomNavigation, Login } from './src/index';
import { UserProvider } from './src/services/index';



export default function App() {
  const fontsLoaded =  useAppFonts();
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
