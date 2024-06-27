import React, { useRef } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";
import { FormInputLarge, StatusBar, SelectDate, SelectTime, ContinueButton, LeaveButton } from "../../index";
import Colors from "../../theme/colors";


const items = [
    { id: 1, type: 'toggle', title: "Atölye ile irtibata geçildi mi ?" },
    { id: 2, type: 'adding', title: "Müdahale ettiyse hangi atölye(ler) ?" },
    { id: 3, title: "Atölye Gelme Süresi (sa & dk)" },
    { id: 4, title: "Seri Teşhis Süresi (sa & dk)" },
    { id: 5, title: "Tamir / Demontaj Süresi (sa & dk)" },
    { id: 6, title: "Yedek Parça Bekleme Süresi (sa & dk)" },
    { id: 7, title: "Montaj Süresi (sa & dk)" },
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

export function Form_2({navigation}: {navigation: any}) {
    const flatListRef = useRef<FlatList>(null); // Create a reference

    return (

        <View style={styles.container}>
            <View style={styles.statusBarContainer}>
                <StatusBar activeIndex={0} />
            </View>
            <FlatList
                ref={flatListRef}
                data={items}
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
        marginBottom: 12,
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
        marginBottom: 20,
    },
});

export default Form_2