import React, { useRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { StatusBar, ContinueButton, GoBackButton, TakeSpareParts, Badge } from "../../index";
import Colors from "../../theme/colors";


const items = [
    { id: 1, type: 'booleanButton', title: "Bu hatayı bulmak için AM/PM önleyici bakım prosedürümüz var mı ?" },
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
    return <TakeSpareParts/>;
};

export function Form_3({ navigation }: { navigation: any }) {
    const flatListRef = useRef<FlatList>(null); // Create a reference

    return (

        <View style={styles.container}>
            <View style={styles.statusBarContainer}>
                <StatusBar activeIndex={2} navigation={navigation} />
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


export default Form_3;