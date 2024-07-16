import React, { useEffect,useCallback, useRef, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { FormPreviewCard } from "../components";
import { getFormsPreview } from "../services/data";
import { useUser } from "../services/context";
import { getFormFromDatabase, deleteFormFromDatabase } from "../services/data";
import { PreviewCardData, FormTemplate, FormData, defaultFormData } from "../models";

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
        return defaultFormData;
    }
    const data = await getFormFromDatabase(userID, formId);
    if (data == null) {
        return defaultFormData;
    }
    const formData = dataConverter(data);
    console.log(formData); // Corrected typo here
    return formData as FormData;
}

export function ViewFormList({navigation}: {navigation: any}) {
    const userContext = useUser();
    const flatListRef = useRef<FlatList>(null); // Create a reference
    const [items, setItems] = useState<PreviewCardData[]>([]);
    
    useFocusEffect(
        useCallback(() => {
            const fetchData = async () => {
                const data = await getFormsPreview(userContext.userData.uid);
                setItems(data);
                console.log('ViewList Data get');
            };
            fetchData();
        }, [userContext.userData.uid]) // Add dependencies here
    );

    const editItem = useCallback(async (formId: string) => {
        let data =  await DataFormating(userContext.userData.uid, formId);
        navigation.navigate('Yeni Form', {formData: data, formId: formId});
    },[]);

    const deleteItem = useCallback(async (formId: string) => {
        await deleteFormFromDatabase(userContext.userData.uid, formId);
        const data = await getFormsPreview(userContext.userData.uid);
        setItems(data);
    },[]);

    return (
        <FlatList
            ref={flatListRef}
            style={styles.container}
            data={items}
            renderItem={({ item, index }) => {
            return <FormPreviewCard
            index={index + 1} 
            data={item}
            containerStyle={{ marginBottom:20 }}
            RigtArrowProps={{
            onPress: () => {
                editItem(item.formId);
            }}}
            TrashProps={{
              onPress: () => {
                  deleteItem(item.formId);
                }  
            }}
            />}}
            keyExtractor={item => item.formId}
        />
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 16,
        paddingHorizontal: 20,
    }
});

export default ViewFormList;
