
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useForm, FormProvider } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form_1, Form_2, Form_3, Form_4, Form_5 } from '../index';
import { FormHeader } from '../components';
import { FormDataProvider, StatusBarProvider } from '../services/context/index';

const Stack = createNativeStackNavigator();

type FormValues = {
    tower: string,
    location: string,
    equipmant: string,
    serialNo: string,
    band: string,
    barCode: string,
    faultDefination: string,
    faultType: string,
    startDay: Date,
    startTime: Date,
    /*contact: boolean,
    workshopNames: string[] | undefined,
    comingTime: string,
    identificationTime: string,
    repairTime: string,
    waitingTime: string,
    montageTime: string,*/
};

const FormSchema: ZodType<FormValues> = z
    .object({
        tower: z.string(({ required_error: "Tower is required" })).min(1),
        location: z.string(({ required_error: "Location is required" })).min(1),
        equipmant: z.string(({ required_error: "Equipmant is required" })).min(1),
        serialNo: z.string(({ required_error: "Serial Number is required" })).min(1),
        band: z.string(({ required_error: "Band is required" })).min(1),
        barCode: z.string(({ required_error: "Bar Code is required" })).min(1),
        faultDefination: z.string(({ required_error: "Fault Defination is required" })).min(1),
        faultType: z.string(({ required_error: "Fault Type is required" })).min(1),
        startDay: z.date(({ required_error: "Start Day is required" })),
        startTime: z.date(({ required_error: "Start Time is required" })),
        /*contact: z.boolean(),
        workshopNames: z.array(z.string()).optional(),
        /*comingTime: z.string(),
        identificationTime: z.string(),
        repairTime: z.string(),
        waitingTime: z.string(),
        montageTime: z.string(),*/
    }).required();

export function FormNavigation({ navigation }: { navigation: any }) {

    const methods = useForm<FormValues>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            tower: 'kule',
            location: 'lokasyon',
            equipmant: 'ekipman',
            serialNo: 'serial no',
            band: 'band',
            barCode: 'barkod',
            faultDefination: 'hata tanimi',
            faultType: 'hata tipi',
            startDay: new Date(),
            startTime: new Date(),
            /*contact: false,
            workshopNames: undefined,
            /*comingTime: z.string(),
            identificationTime: z.string(),
            repairTime: z.string(),
            waitingTime: z.string(),
            montageTime: z.string(),*/
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