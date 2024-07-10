
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useForm, FormProvider } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form_1, Form_2, Form_3, Form_4, Form_5 } from '../index';
import { FormHeader } from '../components';
import { FormDataProvider, StatusBarProvider } from '../services/context/index';
import { FormData, FormSchema } from '../models';

const Stack = createNativeStackNavigator();



export function FormNavigation({ navigation }: { navigation: any }) {

    const methods = useForm<FormData>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            tower: 'aaaa',
            location: 'aaaa',
            equipmant: 'aaaa',
            serialNo: 'aaaa',
            band: 'xxxxxxxx',
            barCode: 'xxxxxx',
            faultDefination: 'xxxxxx',
            faultType: 'xxxxxxxxxxx',
            startDay: new Date(),
            startTime: new Date(),
            contact: true,
            workshopNames: ['xxxx', 'xxxx', 'xxxx', 'xxxx'],
            comingTime: ['3', '3'],
            identificationTime: ['3', '3'],
            repairTime: ['3', '3'],
            waitingTime: ['3', '3'],
            montageTime: ['3','3'],
            spareParts: [{ stockCode: 'xxxx', usedAmount: '3', materialDescription: 'xxxx'}, { stockCode: 'yyyyy', usedAmount: '2', materialDescription: 'yyyyy'}],
            careProcedure: false,
            detectionBefore: true,
            catchFaultProcedure: false,
            lastRepairPlan: '2002',
            lastRepair: '2002',
            nextRepairPlan: '2002',
            status: 'temporarySolution',
        }
    });

    return (
        <StatusBarProvider>
            <FormProvider {...methods}>
                <FormDataProvider>
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
                </FormDataProvider>
            </FormProvider>
        </StatusBarProvider>
    );
}