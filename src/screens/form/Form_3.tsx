import React, { useRef } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { StatusBar, ContinueButton, GoBackButton, YesNoQuestion, FormInputLarge, Badge } from "../../index";
import Colors from "../../theme/colors";


const items = [
    { id: 1, type: 'booleanButton', title: "Bu hatayı bulmak için AM/PM önleyici bakım prosedürümüz var mı ?" },
    { id: 2, type: 'booleanButton', title: "Hatayı arızadan önce yakalamak mümkün müydü ?" },
    { id: 3, type: 'booleanButton', title: "Bakım prosedürleri arızanın nasıl yakalanabileceğini açıklıyor mu ?" },
    { id: 4, type: 'input', title: "En son bakım ne zaman planlanmıştı ?" },
    { id: 5, type: 'input', title: "En son bakım ne zaman yapıldı ?" },
    { id: 6, type: 'input', title: "Bir sonraki bakım ne zaman planlandı ?" },
];

function orderSchema(order: string, element: React.JSX.Element) {
    return (
        <View style={{flexDirection: 'row'}}>
            <Badge text={order} style={{ marginRight: 10 }} />
            {element}
        </View>
    );
}

const renderItem = ({ item }: { item: any }) => {
    switch (item.type) {
        case 'booleanButton':
            return orderSchema(item.id, <YesNoQuestion question={item.title} />);
        default:
            return orderSchema(item.id, <FormInputLarge title={item.title} />);
    }

};

export function Form_3({ navigation }: { navigation: any }) {
    const flatListRef = useRef<FlatList>(null); // Create a reference

    return (

        <View style={styles.container}>
            <View style={styles.statusBarContainer}>
                <StatusBar activeIndex={2} />
            </View>
            <FlatList
                ref={flatListRef}
                data={items}
                style={{ flex: 1, paddingTop: 20 }}
                renderItem={renderItem}
            />
            <View style={styles.submitContainer}>
                <GoBackButton />
                <ContinueButton
                    navigation={navigation}
                    pageName='page-4'
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


export default Form_3