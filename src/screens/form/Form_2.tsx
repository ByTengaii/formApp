import React, { useRef, useState } from "react";
import { FlatList, StyleSheet, View, } from "react-native";
import { FormProps, Item} from "../../models/";
import { AddingWorkshop, ContinueButton, GoBackButton, TakeTime, SwitchQuestion} from "../../components";
import Colors from "../../theme/colors";
import { useFormContext } from "react-hook-form";
import { useStatusBarContext } from "../../services/context";


const items = [
    { id: 1, name:'contact' ,type: 'toggle', title: "Atölye ile irtibata geçildi mi ?" },
    { id: 2, name:'workshopNames' ,type: 'adding', title: "Müdahale ettiyse hangi atölye(ler) ?" },
    { id: 3, name: 'comingTime',title: "Atölye Gelme Süresi (sa & dk)" },
    { id: 4, name: 'identificationTime',title: "Teşhis Süresi (sa & dk)" },
    { id: 5, name: 'repairTime',title: "Tamir / Demontaj Süresi (sa & dk)" },
    { id: 6, name: 'waitingTime',title: "Yedek Parça Bekleme Süresi (sa & dk)" },
    { id: 7, name: 'montageTime',title: "Montaj Süresi (sa & dk)" },
] as Item[];




export function Form_2(props:FormProps) {
    const flatListRef = useRef<FlatList>(null); // Create a reference
    const formContext = useFormContext();
    const statusBarContext = useStatusBarContext();
    const [isContacted, setIsContacted] = useState(formContext.getValues('contact') as boolean);
    statusBarContext.setActiveIndex(1);


    const ViewItem = ({ item }: { item: Item }) => {
        switch (item.type) {
            case 'toggle':
                return <SwitchQuestion 
                item={item} 
                setIsContacted={setIsContacted}
                formMethods={formContext}
                />;
            case 'adding':
                return <AddingWorkshop
                item={item}
                formMethods={formContext}
                isEnable={isContacted}
                />;
            default:
                return <TakeTime 
                item={item} 
                formMethods={formContext}  />;
        } 

    };

    const onSubmit = () => {
        props.navigation.navigate('page-3')
    };

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={items}
                renderItem={ViewItem}
            />
            <View style={styles.submitContainer}>
                <GoBackButton/>
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

export default Form_2