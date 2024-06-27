import * as React from 'react';
import { Image, TouchableOpacity} from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { Profile, ViewFormList, LeftButton, RightButton, FormNavigation} from '../index';
import {ListActiveIcon,ListDeactiveIcon,UserIcon,PlusIcon} from './../../assets/index'
import Colors from './../theme/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import useAppFonts from "../theme/fonts";

const Tab = createBottomTabNavigator();

export function BottomNavigation(){
    const profilePic = require('../../assets/avatar.png');
    const fontsLoaded = useAppFonts();
    if (!fontsLoaded) {
        return null;
    }
  return(
    <NavigationContainer>
        <Tab.Navigator // Customization Options
        screenOptions={
          ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Arıza Listesi') {
              return focused
              ? <ListActiveIcon/>
              : <ListDeactiveIcon/>
            } else if (route.name === 'Yeni Form') {
              return focused
              ? <PlusIcon fill={Colors.active}/>
              : <PlusIcon/>
            } else if (route.name =='Profil'){
              return focused
              ? <UserIcon fill={Colors.active}/>
              : <UserIcon/>
            }
          },
          tabBarActiveTintColor: Colors.active,
          tabBarInactiveTintColor: Colors.disable,
        }) } 
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
          component={Profile}
          options={{
            headerShown: false
          }}
          />
        </Tab.Navigator>
      </NavigationContainer>

    );
    
}