import React, { useRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useFormContext } from "react-hook-form";
import { getFormData, useStatusBarContext } from '../../services/context/'
import { FormProps, Item } from "../../models";
import { SelectDateController, SelectTimeController, ContinueButton, LeaveButton, InputLargeController } from "../../components";
import { Colors } from "../../theme";






const items = [
    { id: 1, name: 'tower', title: "Kule" },
    { id: 2, name: 'location', title: "Lokasyon" },
    { id: 3, name: 'equipmant', title: "Ekipman" },
    { id: 4, name: 'serialNo', title: "Seri No" },
    { id: 5, name: 'band', title: "Marka/Model" },
    { id: 6, name: 'barCode', title: "Benzersiz Barkod" },
    { id: 7, name: 'faultDefination', title: "Arızanın Tanımı" },
    { id: 8, name: 'faultType', title: "Arızanın Tipi (elektronik, yazılım, mekanik vb.)" },
    { id: 9, name: 'startDay', type: 'date', title: "Arıza Başlangıç Günü" },
    { id: 10, name: 'startTime', type: 'time', title: "Arıza Başlangıç Saati" },
] as Item[];





export function Form_1(props: FormProps) {
    const flatListRef = useRef<FlatList>(null); // Create a reference
    const formContext = useFormContext();
    const statusBarContext = useStatusBarContext();
    statusBarContext.setActiveIndex(0);
    
    const onSubmit = () => {
        props.navigation.navigate('page-2')
    };

    const ViewItem = ({ item }: { item: Item }) => {
        switch (item.type) {
            case 'date':
                return <SelectDateController item={item} formMethods={formContext} />;
            case 'time':
                return <SelectTimeController item={item} formMethods={formContext} />;
            default:
                return < InputLargeController title={item.title} name={item.name} formMethods={formContext} />;
        }

    };

    return (

        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={items}
                style={{ flex: 1, paddingTop: 20 }}
                renderItem={ViewItem}
            />
            <View style={styles.submitContainer}>
                <LeaveButton />
                <ContinueButton
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
        paddingTop: 16,
    },
    submitContainer: {
        borderTopWidth: 1,
        borderColor: Colors.borderPrimary,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 16,
        paddingBottom: 20,
    },
});

export default Form_1