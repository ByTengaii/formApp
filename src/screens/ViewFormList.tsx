import React, { useEffect,useCallback, useRef, useState } from "react";
import { StyleSheet, FlatList, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { FormPreviewCard } from "../components";
import { getFormsPreview } from "../services/data";
import { useUser } from "../services/context";
import { PreviewCardData } from "../models";



export function ViewFormList({navigation}: {navigation: any}) {
    const userContext = useUser();
    const flatListRef = useRef<FlatList>(null); // Create a reference
    const [items, setItems] = useState<PreviewCardData[]>([]);
    
    useFocusEffect(
        useCallback(() => {
            const fetchData = async () => {
                const data = await getFormsPreview(userContext.userData.uid);
                setItems(data);
                console.log('ViewList Data get');
            };
            fetchData();
        }, [userContext.userData.uid]) // Add dependencies here
    );

    return (
        <FlatList
            ref={flatListRef}
            style={styles.container}
            data={items}
            renderItem={({ item, index }) => {
            return <FormPreviewCard
            index={index + 1} 
            data={item} 
            RigtArrowProps={{
                onPress: () => {
                    navigation.navigate('Yeni Form', { formId: item.formId });
                }
            }}
            />}}
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
