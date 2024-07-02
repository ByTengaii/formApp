import React, { useRef } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";
import { FormInputLarge, StatusBar, SelectDate, SelectTime, ContinueButton, LeaveButton } from "../../index";
import Colors from "../../theme/colors";


const items = [
    { id: 1, title: "Kule" },
    { id: 2, title: "Lokasyon" },
    { id: 3, title: "Ekipman" },
    { id: 4, title: "Seri No" },
    { id: 5, title: "Marka/Model" },
    { id: 6, title: "Benzersiz Barkod" },
    { id: 7, title: "Arızanın Tanımı" },
    { id: 8, title: "Arızanın Tipi (elektronik, yazılım, mekanik vb.)" },
    { id: 9, type: 'date', title: "Arıza Başlangıç Günü" },
    { id: 10, type: 'time', title: "Arıza Başlangıç Saati" },
];

const renderItem = ({ item } : {item:any}) => {
    switch (item.type) {
        case 'date':
            return <SelectDate title={item.title}/>;
        case 'time':
            return <SelectTime title={item.title}/>;
        default:
            return <FormInputLarge title={item.title} />;
    }

};

export function Form_1({navigation}: {navigation: any}) {
    const flatListRef = useRef<FlatList>(null); // Create a reference

    return (

        <View style={styles.container}>
            <View style={styles.statusBarContainer}>
                <StatusBar activeIndex={0} navigation={navigation} />
            </View>
            <FlatList
                ref={flatListRef}
                data={items}
                style={{ flex: 1, paddingTop: 20 }}
                renderItem={renderItem}
            />
            <View style={styles.submitContainer}>
                <LeaveButton/>
                <ContinueButton
                    navigation={navigation}
                    pageName='page-2'
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
        paddingBottom: 20,
    },
});

export default Form_1