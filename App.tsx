import * as React from 'react';
import { CreateForm, Login, Profile, ViewFormList } from "./src/index";
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
          <Tab.Screen name="List" component={ViewFormList} />
          <Tab.Screen name="Create Form" component={CreateForm} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </ NavigationContainer>
    ) : (
      <Login handleAuth={handleAuth} />
    )
  );
}
