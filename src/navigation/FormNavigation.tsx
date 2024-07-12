import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form_1, Form_2, Form_3, Form_4, Form_5 } from '../index';
import { FormHeader } from '../components';
import { StatusBarProvider } from '../services/context/';
import { FormData, FormSchema, defaultFormData } from '../models';

const Stack = createNativeStackNavigator();



export  function FormNavigation({ route, navigation }: { navigation: any, route: any }) {
    const { formId,formData} = route.params;
    console.log('IN FORM',formData);
    const methods = useForm<FormData>({
        resolver: zodResolver(FormSchema),
        defaultValues: defaultFormData,
    });
    useEffect(() => {
        if (formData) {
            methods.reset(formData);
            methods.setValue('formId',formId);
        }
    }, [formData,formId]);
    
    return (
        <StatusBarProvider>
            <FormProvider {...methods}>
                <Stack.Navigator
                    screenOptions={{
                        header() {
                            return (
                                <FormHeader
                                    title='Yeni Arıza Formu'
                                    subtitle='Arıza Detayları'
                                    navigation={navigation}
                                />
                            );
                        },
                        presentation: 'card',
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
                    <Stack.Screen
                        name="page-3"
                        component={Form_3}
                    />
                    <Stack.Screen
                        name="page-4"
                        component={Form_4}
                    />
                    <Stack.Screen
                        name="page-5"
                        component={Form_5}
                    />
                </Stack.Navigator>
            </FormProvider>
        </StatusBarProvider>
    );
}