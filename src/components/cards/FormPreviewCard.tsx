import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import useAppFonts from "../../theme/fonts";
import { CheckCircle, MinusCircle, XCircle, RightArrow, DotsVertical } from '../../../assets/index';

interface PreviewCardProps {
    index: number;
    data :{
        text: string;
        date: string;
        status: 'Solved' | 'Temporary Solution' | 'Not Solved';
    }
}

export function FormPreviewCard(props: PreviewCardProps) {
    const fontsLoaded = useAppFonts();
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <View style={styles.badge}>
                <Text style={styles.badgeText}>{props.index}.</Text>
            </View>
            <View style={styles.context}>
                <Text style={styles.titleText}>{props.data.text}</Text>
                <Text style={styles.dateText}>{props.data.date}</Text>
                <View style={styles.statusContainer}>
                    {props.data.status === 'Solved' ? (
                        <CheckCircle
                            height={14}
                            width={14}
                            style={styles.statusIcon}
                        />
                    ) : props.data.status === 'Temporary Solution' ? (
                        <MinusCircle
                            height={14}
                            width={14}
                            style={styles.statusIcon}
                        />
                    ) : (
                        <XCircle
                            height={14}
                            width={14}
                            style={styles.statusIcon}
                        />
                    )}
                    <Text style={{ ...styles.statusText, color: props.data.status === 'Solved' ? 'green' : props.data.status === 'Temporary Solution' ? 'orange' : 'red' }}>
                        {props.data.status}
                    </Text>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <DotsVertical
                    height={24}
                    width={24}
                />
                <RightArrow
                    height={24}
                    width={24}
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
