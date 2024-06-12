import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon } from '@rneui/themed';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

interface PreviewCardProps {
    order: number;
    text: string;
    date: string;
    status: 'Solved' | 'Temporary Solution' | 'Not Solved';
}

export function FormPreviewCard(props: PreviewCardProps) {
    let [fontsLoaded] = useFonts({
        Inter_500Medium,
        Inter_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <View style={styles.badge}>
                <Text style={styles.badgeText}>{props.order}.</Text>
            </View>
            <View style={styles.context}>
                <Text style={styles.titleText}>{props.text}</Text>
                <Text style={styles.dateText}>{props.date}</Text>
                <View style={styles.statusContainer}>
                    {props.status === 'Solved' ? (
                        <Icon
                            type="ionicon"
                            name="checkmark-circle-outline"
                            color={'green'}
                            size={14}
                            style={styles.statusIcon}
                        />
                    ) : props.status === 'Temporary Solution' ? (
                        <Icon
                            type="feather"
                            name="minus-circle"
                            color={'orange'}
                            size={14}
                            style={styles.statusIcon}
                        />
                    ) : (
                        <Icon
                            type="ionicon"
                            name="close-circle-outline"
                            color={'red'}
                            size={14}
                            style={styles.statusIcon}
                        />
                    )}
                    <Text style={{ ...styles.statusText, color: props.status === 'Solved' ? 'green' : props.status === 'Temporary Solution' ? 'orange' : 'red' }}>
                        {props.status}
                    </Text>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <Icon
                    type="ionicon"
                    name="ellipsis-horizontal"
                    color={'#667085'}
                    size={24}
                />
                <Icon
                    type="ionicon"
                    name="arrow-forward"
                    color={'#667085'}
                    size={24}
                />
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },

    badge: {
        borderRadius: 6,
        backgroundColor: "#edf7f8",
        borderStyle: "solid",
        borderColor: "#c1e2e6",
        borderWidth: 1,
        width: 25,
        height: 25,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    badgeText: {
        fontSize: 12,
        lineHeight: 18,
        fontFamily: "Inter_500Medium",
        color: "#005f6a",
        textAlign: "center"
    },
    context: {
        flex: 5,
        marginLeft: 12,
    },
    titleText: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: "Inter_500Medium",
        color: "#344054",
        textAlign: "left",
        marginBottom: 4
    },
    dateText: {
        fontSize: 12,
        lineHeight: 18,
        fontFamily: "Inter_400Regular",
        color: "#667085",
        textAlign: "left",
        marginBottom: 8
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusIcon: {
        marginRight: 4
    },
    statusText: {
        fontSize: 12,
        lineHeight: 18,
        fontFamily: "Inter_500Medium",
        color: "#079455",
        textAlign: "left"
    },
    buttonsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 24,
    }

})

export default FormPreviewCard;
