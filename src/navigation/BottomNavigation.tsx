import React, {useEffect}from 'react';
import { Image } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile, ViewFormList, FormNavigation } from '../index';
import { ListActiveIcon, ListDeactiveIcon, UserIcon, PlusIcon } from './../../assets/index'
import Colors from './../theme/colors';
import { useAppFonts} from "../theme";
import { defaultFormData } from '../models';
import { useUser } from '../services/context';
import { getProfilePicture } from '../services/data';

const Tab = createBottomTabNavigator();

interface BottomNavigationProps {
  setSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
export function BottomNavigation(props: BottomNavigationProps) {
  const fonts = useAppFonts();
  const user = useUser();
  const [profilePicUrl, setProfilePicUrl] = React.useState<any>(null);
  useEffect(() => {
      const fetchProfilePic = async () => {
          try {
              const url = await getProfilePicture(user.userData.uid);
              setProfilePicUrl(url);
          } catch (error) {
              console.error("Failed to load profile picture:", error);
              // Handle errors or set a default profile picture if necessary
          }
      };

      fetchProfilePic();
  }, [user.userData.uid, profilePicUrl]);
  if (!fonts) return null;


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
              <Image source={{ uri: profilePicUrl }}
                style={{ marginRight: 20, width: 40, height: 40, borderRadius:100}} />
            )
          }}
        />
        <Tab.Screen
          name="Yeni Form"
          component={FormNavigation}
          initialParams={{ formData: defaultFormData}}
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