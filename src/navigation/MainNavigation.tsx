import { BottomNavigation, CreateForm, Login, LeftButton, RightButton } from '../index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

export function MainNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
            >
                <Stack.Screen
                    name="Home"
                    component={BottomNavigation}
                    options={{
                        headerShown: false,
                        headerBackVisible: false
                    }}
                />
                <Stack.Screen
                    name="Yeni Arıza Formu"
                    options={{
                        headerBackVisible: false
                    }}
                    component={CreateForm} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}