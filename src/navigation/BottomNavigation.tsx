import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { Profile, ViewFormList, FormNavigation } from '../index';
import { ListActiveIcon, ListDeactiveIcon, UserIcon, PlusIcon } from './../../assets/index'
import Colors from './../theme/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import useAppFonts from "../theme/fonts";

const Tab = createBottomTabNavigator();

interface BottomNavigationProps {
  setSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
export function BottomNavigation(props: BottomNavigationProps) {

  const profilePic = require('../../assets/avatar.png');
  const fontsLoaded = useAppFonts();
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Tab.Navigator // Customization Options
        screenOptions={
          ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Arıza Listesi') {
                return focused
                  ? <ListActiveIcon />
                  : <ListDeactiveIcon />
              } else if (route.name === 'Yeni Form') {
                return focused
                  ? <PlusIcon fill={Colors.active} />
                  : <PlusIcon />
              } else if (route.name == 'Profil') {
                return focused
                  ? <UserIcon fill={Colors.active} />
                  : <UserIcon />
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
                style={{ marginRight: 20, width: 40, height: 40 }} />
            )
          }}
        />
        <Tab.Screen
          name="Yeni Form"
          component={FormNavigation}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profil"
          options={{
            headerShown: false
          }}
        >
          {() => <Profile setSignedIn={props.setSignedIn} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>

  );

}