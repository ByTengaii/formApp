import { Form_1, Form_2 } from '../index';
import { LeftButtonIcon, RightButtonIcon } from '../../assets/index';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const CustomHeader = ({ title, subtitle } : {title:string , subtitle:string}) => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headerSubtitle}>{subtitle}</Text>
    </View>
  );
export function FormNavigation({ navigation }: { navigation: any }) {
    return (
        <Stack.Navigator
            screenOptions={{
                title: 'Yeni Arıza Formu',
                headerTitleAlign: "center",
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <LeftButtonIcon />
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity>
                        <RightButtonIcon />
                    </TouchableOpacity>
                ),
            }}
        >
            <Stack.Screen
                name="page-1"
                component={Form_1}
            />
            <Stack.Screen
                name="page-2"
                component={Form_2}
            />

        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    headerContainer: {},
    headerTitle: {},
    headerSubtitle: {},
});