import * as React from 'react';
import { Login, ViewFormList } from "./src/index";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();



export default function App() {
  const [isSignedIn, setIsSignedIn] = React.useState(true);

  const handleAuth = (value: boolean) => {
    setIsSignedIn(value);
  };

  return (
    isSignedIn ? (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Fault List" component={ViewFormList} />
        </Tab.Navigator>
      </ NavigationContainer>
    ) : (
      <Login handleAuth={handleAuth} />
    )
  );
}
