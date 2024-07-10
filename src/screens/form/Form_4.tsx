import React, { useRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import {  ContinueButton, GoBackButton, YesNoQuestion,  Badge, InputLargeController } from "../../components";
import Colors from "../../theme/colors";
import { FormProps } from "../../models/";
import { useStatusBarContext } from "../../services/context";
import { useFormContext } from "react-hook-form";

const items = [
    { id: 1, name:'careProcedure',type: 'booleanButton', title: "Bu hatayı bulmak için AM/PM önleyici bakım prosedürümüz var mı ?" },
    { id: 2, name:'detectionBefore', type: 'booleanButton', title: "Hatayı arızadan önce yakalamak mümkün müydü ?" },
    { id: 3, name:'catchFaultProcedure',type: 'booleanButton', title: "Bakım prosedürleri arızanın nasıl yakalanabileceğini açıklıyor mu ?" },
    { id: 4, name:'lastRepairPlan',type: 'input', title: "En son bakım ne zaman planlanmıştı ?" },
    { id: 5, name:'lastRepair',type: 'input', title: "En son bakım ne zaman yapıldı ?" },
    { id: 6, name:'nextRepairPlan',type: 'input', title: "Bir sonraki bakım ne zaman planlandı ?" },
];

function orderSchema(order: string, element: React.JSX.Element) {
    return (
        <View style={{flexDirection: 'row'}}>
            <Badge text={order} style={{ marginRight: 10 }} />
            {element}
        </View>
    );
}



export function Form_4(props:FormProps) {
    const flatListRef = useRef<FlatList>(null); // Create a reference
    const formContext = useFormContext();
    const statusBarContext = useStatusBarContext();
    statusBarContext.setActiveIndex(3);

    const ViewItem = ({ item }: { item: any }) => {
        switch (item.type) {
            case 'booleanButton':
                return orderSchema(item.id, <YesNoQuestion formMethods={formContext} question={item.title} name={item.name} />);
            default:
                return orderSchema(item.id, <InputLargeController
                    name={item.name}
                    formMethods={formContext}
                    title={item.title}
                    style={{flex: 1}}
                    />);
        }
    
    };

    const onSubmit = () => {
        props.navigation.navigate('page-5')
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
                <GoBackButton />
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


export default Form_4