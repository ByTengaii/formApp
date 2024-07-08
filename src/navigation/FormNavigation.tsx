
import { useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Form_1, Form_2, Form_3, Form_4, Form_5 } from '../index';
import { FormHeader } from '../components';
import { FormProvider } from '../services/context/index';

const Stack = createNativeStackNavigator();

export function FormNavigation({ navigation }: { navigation: any }) {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <FormProvider>
            <Stack.Navigator
                screenOptions={{
                    header() {
                        return (
                            <FormHeader
                                title='Yeni Arıza Formu'
                                subtitle='Arıza Detayları'
                                navigation={navigation}
                                index={{ activeIndex, setActiveIndex }}
                            />
                        );
                    },
                    presentation: 'card',
                }}
            >
                <Stack.Screen
                    name="page-1"
                >
                    {(props) => (<Form_1 {...props} index={{activeIndex,setActiveIndex}} />)}
                </Stack.Screen>

                <Stack.Screen
                    name="page-2"
                >
                    {(props) => (<Form_2 {...props} index={{activeIndex,setActiveIndex}} />)}
                </Stack.Screen>
                <Stack.Screen
                    name="page-3"
                >
                    {(props) => (<Form_3 {...props} index={{activeIndex,setActiveIndex}} />)}
                </Stack.Screen>
                <Stack.Screen
                    name="page-4"
                >
                    {(props) => (<Form_4 {...props} index={{activeIndex,setActiveIndex}} />)}
                </Stack.Screen>
                <Stack.Screen
                    name="page-5"
                >
                    {(props) => (<Form_5 {...props} index={{activeIndex,setActiveIndex}} />)}
                </Stack.Screen>

            </Stack.Navigator>
        </FormProvider>
    );
}