import React, { useEffect, useRef } from "react";
import { StyleSheet, FlatList, ScrollView } from "react-native";
import { FormPreviewCard } from "../components";
import { getFormsPreview } from "../services/data";
import { useUser } from "../services/context";
import { PreviewCardData } from "../models";




const itemse: PreviewCardData[] = [
    {
        formId: '1',
        text: "BOM.RP.001 Deneme Formu",
        date: 'Tue Aug 24 2021',
        status: 'solved',
    },
    {
        formId: '2',
        text: "TPIC Form 86",
        date: 'Tue Aug 24 2021',
        status: 'temporarySolution',
    },
    {
        formId: '3',
        text: "BOM.RP.001 Deneme Formu",
        date: 'Tue Aug 24 2021',
        status: 'notSolved',
    },
];

export function ViewFormList() {
    const userContext = useUser();
    const flatListRef = useRef<FlatList>(null); // Create a reference
    const [items, setItems] = React.useState<PreviewCardData[]>([]);

    useEffect(() => {
        getFormsPreview(userContext.userData.uid).then((data) => {
            setItems(data);
            console.log(data);
        });
    }, [userContext.userData.uid,items]);

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
