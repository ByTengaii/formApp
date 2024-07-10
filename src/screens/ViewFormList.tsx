import React, { useRef } from "react";
import { StyleSheet, FlatList, ScrollView } from "react-native";
import { FormPreviewCard } from "../components";
import { getFormsPreview } from "../services/data";
import { useUser } from "../services/context";

interface cardData {
    id: string;
    data: {
        text: string;
        date: string;
        status: 'notSolved' | 'solved' | 'temporarySolution';
    }
}


const items = [
    {
        formId: '1',
        text: "BOM.RP.001 Deneme Formu",
        date: "19.04.2024",
        status: 'solved',
    },
    {
        formId: '2',
        text: "TPIC Form 86",
        date: "19.04.2024",
        status: 'temporarySolution',

    },
    {
        formId: '3',
        text: "BOM.RP.001 Deneme Formu",
        date: "19.04.2024",
        status: 'notSolved',
    },
];

export function ViewFormList() {
    const userContext = useUser();
    const flatListRef = useRef<FlatList>(null); // Create a reference
    const forms = getFormsPreview(userContext.userData.uid);
    return (
        <FlatList
            ref={flatListRef}
            style={styles.container}
            data={items}
            renderItem={({ item, index }) => <FormPreviewCard index={index + 1} data={item} />}
            keyExtractor={item => item.formId}
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
