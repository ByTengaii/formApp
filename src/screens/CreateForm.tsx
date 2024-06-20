import React, { useRef } from "react";
import { FlatList, StyleSheet, View} from "react-native";
import { FormInputLarge, StatusBar} from "../index";
import useAppFonts from "../theme/fonts";
import Colors from "../theme/colors";


const items = [
    { id: 1, title: "Kule" },
    { id: 2, title: "Lokasyon" },
    { id: 3, title: "Ekipman" },
    { id: 4, title: "Seri No" },
    { id: 5, title: "Marka/Model" },
    { id: 6, title: "Benzersiz Barkod" },
    { id: 7, title: "Arızanın Tanımı" },
    { id: 8, title: "Arızanın Tipi (elektronik, yazılım, mekanik vb.)" },
    { id: 9, title: "" },
];
export function CreateForm() {
    const fonts = useAppFonts();
    const flatListRef = useRef<FlatList>(null); // Create a reference

    if (!fonts) return null;
    return (
        
        <View style={styles.container}>
            <View style={styles.statusBarContainer}>
                <StatusBar activeIndex={0} />
            </View>
            <FlatList
            ref={flatListRef}
            data={items}
            renderItem={({ item }) =><FormInputLarge title={item.title} />}
            />
            <View style={styles.submitContainer}>

            </View>
        </View>
        /*<FlatList
            ref={flatListRef}
            style={styles.container}
            data={items}
            renderItem={({ item }) =><FormInputLarge title={item.title} />}
        />*/
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    statusBarContainer:{
        justifyContent: "flex-end",
    },
    submitContainer:{
    },
});

export default CreateForm