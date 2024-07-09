import React, { useRef, useState } from "react";
import { FlatList, StyleSheet, View} from "react-native";
import {  ContinueButton, GoBackButton, CheckBoxCard } from "../../components";
import Colors from "../../theme/colors";
import { FormProps } from "../../models/";


const items = [
    { id: 1,  title: "Arıza Giderildi", color: Colors.green},
    { id: 2,  title: "Arıza Giderilemedi", color: Colors.red},
    { id: 3,  title: "Geçici Çözüm", color: Colors.yellow},
    { id: 4,  title: "Atölye Ekip Talebi Var", color: Colors.disable},
];

export function Form_5(props:FormProps) {
    const flatListRef = useRef<FlatList>(null); // Create a reference
    const [activeIndex, setActiveIndex] = useState(0);

    const renderItem = ({ item }: { item: any }) => {
        return (<CheckBoxCard state={{activeIndex,setActiveIndex}} item={item} />);
    };
    return (

        <View style={styles.container}>

            <FlatList
                ref={flatListRef}
                data={items}
                style={{ flex: 1, paddingTop: 20 }}
                renderItem={renderItem}
            />
            <View style={styles.submitContainer}>
                <GoBackButton />
                <ContinueButton
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