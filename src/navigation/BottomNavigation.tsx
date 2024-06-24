import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { Login, Profile, ViewFormList, LeftButton, RightButton} from '../index';
import {ListActiveIcon,ListDeactiveIcon,UserIcon,PlusIcon} from './../../assets/index'
import Colors from './../theme/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();


export default function CreateForm({navigation}:{navigation:any}){
  navigation.setOptions({headerBackButtonMenuEnabled:false});
  navigation.navigate("Yeni Arıza Formu");
  return null;}
export function BottomNavigation(){
    const profilePic = require('../../assets/avatar.png');
    return(
        <Tab.Navigator // Customization Options
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
          <Tab.Screen 
          name="Yeni Form"
          component={CreateForm}
          options={{
            headerTitle: "Yeni Arıza Formu",
            headerTitleAlign: "center",
            headerLeft: () => (
              <LeftButton/>
            ),
            headerRight: () => (
              <RightButton/>
            ),
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
    );
    
}