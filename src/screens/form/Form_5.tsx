import React, { useRef } from "react";
import { FlatList, StyleSheet, View, Text} from "react-native";
import { StatusBar, ContinueButton, GoBackButton, CheckBoxCard } from "../../index";
import Colors from "../../theme/colors";
import { color } from "@rneui/base";


const items = [
    { id: 1,  title: "Arıza Giderildi", color: Colors.green},
    { id: 2,  title: "Arıza Giderilemedi", color: Colors.red},
    { id: 3,  title: "Geçici Çözüm", color: Colors.yellow},
    { id: 4,  title: "Atölye Ekip Talebi Var", color: Colors.disable},
];

const renderItem = ({ item }: { item: any }) => {
    return (<CheckBoxCard item={item} />);
};


export function Form_5({ navigation }: { navigation: any }) {
    const flatListRef = useRef<FlatList>(null); // Create a reference

    return (

        <View style={styles.container}>
            <View style={styles.statusBarContainer}>
                <StatusBar activeIndex={4} navigation={navigation} />
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
                    pageName='Arıza Listesi'
                    text="Kaydet"
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