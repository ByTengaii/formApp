import * as React from 'react';
import { Login, ViewFormList } from "./src/index";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const isSignedIn = false;


export default function App() {
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  const handleAuth = (value: boolean) => {
    setIsSignedIn(value);
  };

  return (
    isSignedIn ? (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="List" component={ViewFormList} />
        </Tab.Navigator>
      </ NavigationContainer>
    ) : (
      <Login handleAuth={handleAuth} />
    )
  );
}
