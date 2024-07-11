import React, {useMemo} from "react";
import { 
    Text, 
    View, 
    TouchableOpacity, 
    StyleSheet, 
    TouchableOpacityProps} from "react-native";
import { 
    CheckCircle, 
    MinusCircle, 
    XCircle,
    RightArrow,
    DotsVertical } from '../../../assets/index';
import { Badge }  from '../'

interface PreviewCardProps {
    index: number;
    data :{
        formId: string;
        text: string;
        date: string;
        status: 'solved' | 'temporarySolution' | 'notSolved';
    }
    RigtArrowProps?: TouchableOpacityProps;
}

export function FormPreviewCard(props: PreviewCardProps) {

    return (
        <View style={styles.container}>
            <Badge text={String(props.index)}/>
            <View style={styles.context}>
                <Text style={styles.titleText}>{props.data.text}</Text>
                <Text style={styles.dateText}>{props.data.date}</Text>
                <View style={styles.statusContainer}>
                    {props.data.status === 'solved' ? (
                        <CheckCircle
                            height={14}
                            width={14}
                            style={styles.statusIcon}
                        />
                    ) : props.data.status === 'temporarySolution' ? (
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
                    <Text style={{ ...styles.statusText, color: props.data.status === 'solved' ? 'green' : props.data.status === 'temporarySolution' ? 'orange' : 'red' }}>
                        {props.data.status === 'solved' ? 'Solved' : props.data.status === 'temporarySolution' ? 'Temporary Solution' : 'Not Solved'}
                    </Text>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <DotsVertical
                    height={24}
                    width={24}
                />
                <TouchableOpacity
                    {...props.RigtArrowProps}
                >
                <RightArrow
                    height={24}
                    width={24}
                />
                </TouchableOpacity>
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
