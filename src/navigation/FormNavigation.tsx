import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form_1, Form_2, Form_3, Form_4, Form_5 } from '../index';
import { FormHeader } from '../components';
import { StatusBarProvider, useUser } from '../services/context/';
import { getFormFromDatabase } from '../services/data';
import { FormData, FormSchema, FormTemplate } from '../models';

const Stack = createNativeStackNavigator();

function dataConverter(data: FormTemplate) {
    return {
        tower: data.formData.tower,
        location: data.formData.location,
        equipmant: data.formData.equipmant,
        serialNo: data.formData.serialNo,
        band: data.formData.band,
        barCode: data.formData.barCode,
        faultDefination: data.formData.fault.faultDefination,
        faultType: data.formData.fault.faultType,
        startDay: data.formData.fault.startDay,
        startTime: data.formData.fault.startTime,
        comingTime: data.formData.workshop.comingTime,
        identificationTime: data.formData.workshop.identificationTime,
        repairTime: data.formData.workshop.repairTime,
        waitingTime: data.formData.workshop.waitingTime,
        montageTime: data.formData.workshop.montageTime,
        lastRepairPlan: data.formData.lastRepairPlan,
        lastRepair: data.formData.lastRepair,
        nextRepairPlan: data.formData.nextRepairPlan,
        spareParts: data.formData.spareParts,
        workshopNames: data.formData.workshop.workshopNames,
        contact: data.formData.workshop.contact,
        careProcedure: data.formData.careProcedure,
        detectionBefore: data.formData.detectionBefore,
        catchFaultProcedure: data.formData.catchFaultProcedure,
        status: data.formData.status,
    } as FormData;
}

async function DataFormating(userID: string, formId: string) {
    if (formId == '0') {
        return {
            spareParts: [],
            workshopNames: [],
            contact: false,
            careProcedure: false,
            detectionBefore: false,
            catchFaultProcedure: false,
            status: 'notSolved',
        };
    }
    const data = await getFormFromDatabase(userID, formId);
    if (data == null) {
        return {
            spareParts: [],
            workshopNames: [],
            contact: false,
            careProcedure: false,
            detectionBefore: false,
            catchFaultProcedure: false,
            status: 'notSolved',
        };
    }
    const formData = dataConverter(data);
    console.log(formData); // Corrected typo here
    return formData as FormData;
}

export  function FormNavigation({ route, navigation }: { navigation: any, route: any }) {
    const { formId } = route.params;
    const userContext = useUser();
    const [formData, setFormData] = useState({} as FormData)
   // const formData: FormData = useMemo(()=> {DataFormating(userContext.userData.uid, formId)},[formId]);
    useEffect(()=>{
        DataFormating(userContext.userData.uid, formId).then((data) => {
            setFormData(data as FormData);
        })
    },[userContext.userData.uid, formId])

    console.log('IN FORM',formData);
    const methods = useForm<FormData>({
        resolver: zodResolver(FormSchema),
        defaultValues: formData,/*{
            tower: 'deneme',
            location: 'deneme',
            equipmant: 'deneme',
            serialNo: 'deneme',
            band: 'deneme',
            barCode: 'deneme',
            faultDefination: 'deneme',
            faultType: 'deneme',
            startDay: new Date(),
            startTime: new Date(),
            comingTime: ['1', '2'],
            identificationTime: ['1', '2'],
            repairTime: ['1', '2'],
            waitingTime: ['1', '2'],
            montageTime: ['1', '2'],
            lastRepairPlan: 'deneme',
            lastRepair: 'deneme',
            nextRepairPlan: 'deneme',
            spareParts: [],
            workshopNames: [],
            contact: false,
            careProcedure: false,
            detectionBefore: false,
            catchFaultProcedure: false,
            status: 'notSolved'
        }*/
    });

    
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