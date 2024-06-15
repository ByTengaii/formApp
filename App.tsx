import * as React from 'react';
import { Image } from 'react-native';
import { CreateForm, Login, Profile, ViewFormList } from "./src/index";
import { NavigationContainer, } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ListActiveIcon,ListDeactiveIcon,UserIcon,PlusIcon} from './assets/index'
import Colors from './src/theme/colors';
const Tab = createBottomTabNavigator();

export default function App() {
  const profilePic = require('./assets/avatar.png');
  const [isSignedIn, setIsSignedIn] = React.useState(true); // set false
  const handleAuth = (value: boolean) => {
    setIsSignedIn(value);
  };

  return (
    isSignedIn ? (
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Arıza Listesi') {
              return focused
              ? <ListActiveIcon/>
              : <ListDeactiveIcon/>
            } else if (route.name === 'Yeni Form') {
              return focused
              ? <PlusIcon stroke={Colors.red}/>
              : <PlusIcon/>
            } else if (route.name =='Profil'){
              return focused
              ? <UserIcon fill={Colors.active}/>
              : <UserIcon/>
            }
          },
          tabBarActiveTintColor: Colors.active,
          tabBarInactiveTintColor: Colors.disable,
        })} 
      >
          <Tab.Screen 
          name="Arıza Listesi"
          component={ViewFormList} 
          options={{
            headerRight: () => (
              <Image source={profilePic}
              style={{marginRight:20, width:40, height:40}}/>
            )
          }}
          />
          <Tab.Screen name="Yeni Form" component={CreateForm}/>
          <Tab.Screen 
          name="Profil"
          component={Profile}
          options={{
            headerShown: false
          }}
          />
        </Tab.Navigator>
      </ NavigationContainer>
    ) : (
      <Login handleAuth={handleAuth} />
    )
  );
}
