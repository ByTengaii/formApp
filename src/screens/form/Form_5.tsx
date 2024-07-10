import React, { useContext, useRef, useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { Form, useFormContext } from "react-hook-form";
import { ContinueButton, GoBackButton, CheckBoxCard } from "../../components";
import Colors from "../../theme/colors";
import { FormProps, UserData, FormTemplate, FormData, FormSchema } from "../../models/";
import { useStatusBarContext, useUser} from "../../services/context";
import { addForm2Database } from "../../services/data";
const { v4: uuidv4 } = require('uuid');

const items = [
    { id: 1, title: "Arıza Giderildi", color: Colors.green },
    { id: 2, title: "Arıza Giderilemedi", color: Colors.red },
    { id: 3, title: "Geçici Çözüm", color: Colors.yellow },
    { id: 4, title: "Atölye Ekip Talebi Var", color: Colors.disable },
];

function generateRandomFormId() {
    return `form-${Math.random().toString(36).substr(2, 9)}`;
}

const createFormTemplate = (user: UserData, formData: FormData) => {
    
    const formId = generateRandomFormId();

    const data: FormTemplate = {
        ownerId: user.uid,
        formId: formId,
        createdAt: new Date(),
        updatedAt: new Date(),
        formData: {
            tower: formData.tower,
            location: formData.location,
            equipmant: formData.equipmant,
            serialNo: formData.serialNo,
            band: formData.band,
            barCode: formData.barCode,
            fault: {
                faultDefination: formData.faultDefination,
                faultType: formData.faultType,
                startDay: formData.startDay,
                startTime: formData.startTime,
            },
            spareParts: formData.spareParts,
            workshop: {
                contact: formData.contact,
                workshopNames: formData.workshopNames,
                comingTime: formData.comingTime,
                identificationTime: formData.identificationTime,
                repairTime: formData.repairTime,
                waitingTime: formData.waitingTime,
                montageTime: formData.montageTime,
            },
            careProcedure: formData.careProcedure,
            detectionBefore: formData.detectionBefore,
            catchFaultProcedure: formData.catchFaultProcedure,
            lastRepairPlan: formData.lastRepairPlan,
            lastRepair: formData.lastRepair,
            nextRepairPlan: formData.nextRepairPlan,
            status: formData.status,
        }
    };
    //FormSchema.parse(data);
    //console.log('data',data);
    return data;

}


export function Form_5(props: FormProps) {
    const formContext = useFormContext();
    const userContext = useUser();
    const flatListRef = useRef<FlatList>(null); // Create a reference
    const statusBarContext = useStatusBarContext();
    statusBarContext.setActiveIndex(4);
    const anwerSheet = ['', 'solved', 'notSolved', 'temporarySolution', 'workshopRequest']
    const [activeIndex, setActiveIndex] = useState(anwerSheet.indexOf(formContext.getValues('status') as string));

    const { errors } = formContext.formState;

    const handleCheckBox = (index: number) => {
        setActiveIndex(index);
        formContext.setValue('status', anwerSheet[index]);
    };

    const onSubmit = formContext.handleSubmit(async (data) => {
        let formTemplate = null;
        if (userContext.userData) 
            formTemplate = createFormTemplate( userContext.userData , data as FormData );
        console.log('FormTemplate/n',formTemplate);
        if(formTemplate) {
            await addForm2Database(formTemplate);
            formContext.reset();
            props.navigation.navigate('page-1');
            props.navigation.navigate('Arıza Listesi');
        }else{
            console.log('Validation error');
        }
    });

    const renderItem = ({ item }: { item: any }) => {
        return (<CheckBoxCard state={{ activeIndex, handleCheckBox }} item={item} />);
    };

    return (

        <View style={styles.container}>

            <FlatList
                ref={flatListRef}
                data={items}
                style={{ flex: 1, paddingTop: 20 }}
                renderItem={renderItem}
            />

            {Object.keys(errors).length > 0 && (
                <View style={{ paddingTop: 10 }}>
                    {Object.keys(errors).map((name, index) => (
                        <Text key={index} style={{ color: 'red' }}>
                            {String(errors[name]?.message)}
                        </Text>
                    ))}
                </View>
            )}

            <View style={styles.submitContainer}>
                <GoBackButton />
                <ContinueButton
                    text="kaydet"
                    props={{
                        onPress: onSubmit,
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    statusBarContainer: {
        justifyContent: "flex-end",
    },
    submitContainer: {
        borderTopWidth: 1,
        borderColor: Colors.borderPrimary,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 16,
    },
});


export default Form_5