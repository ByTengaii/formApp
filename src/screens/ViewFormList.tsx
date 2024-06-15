import React, { useRef } from "react";
import { StyleSheet, FlatList, ScrollView } from "react-native";
import { FormPreviewCard } from "../index";


const items = [
    {
        id: 1,
        data: {
            text: "BOM.RP.001 Deneme Formu",
            date: "19.04.2024",
            status: 'Solved',
        }
    },
    {
        id: 2,
        data: {
            text: "TPIC Form 86",
            date: "19.04.2024",
            status: 'Temporary Solution',
        }

    },
    {
        id: 3,
        data: {
            text: "BOM.RP.001 Deneme Formu",
            date: "19.04.2024",
            status: 'Not Solved',
        }
    },
];

export function ViewFormList() {
    const flatListRef = useRef<FlatList>(null); // Create a reference

    return (
        <FlatList
            ref={flatListRef}
            style={styles.container}
            data={items}
            renderItem={({ item }) => <FormPreviewCard index={item.id} data={item.data} />}
            keyExtractor={item => item.id.toString()}
        />
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 16,
        paddingHorizontal: 20,
    }
});

export default ViewFormList;
