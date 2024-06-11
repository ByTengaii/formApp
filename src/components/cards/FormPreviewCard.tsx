import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { CiCircleMinus, CiCircleCheck, CiCircleAlert, FaArrowRight, BsThreeDots} from "../../index";


interface PreviewCardProps {
    order: number;
    text: string;
    date: string;
    status: 'Solved' | 'Temporary Solution' | 'Not Solved';
}

function FormPreviewCard() {

    return (
        <View style={styles.frameParent}>
            <View style={styles.badgeParent}>
                <View style={[styles.badge, styles.badgeFlexBox]}>
                    <Text style={[styles.text, styles.labelTypo]}>1.</Text>
                </View>
                <View style={styles.frameGroup}>
                    <View style={styles.labelParent}>
                        <Text style={[styles.label, styles.labelTypo]}>BOM.RP.001 Deneme Formu</Text>
                        <Text style={[styles.label1, styles.labelLayout]}>19.04.2024</Text>
                    </View>
                    <View style={styles.frameWrapper}>
                        <View style={styles.badgeFlexBox}>
                            <CiCircleCheck style={styles.checkCircleIcon}  />
                            <Text style={[styles.label2, styles.labelTypo]}>{`Arıza Giderildi `}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <FaArrowRight style={styles.arrowRightIcon} />
            <BsThreeDots style={styles.dropdownIcon}/>
        </View>);
};

const styles = StyleSheet.create({
    badgeFlexBox: {
        alignItems: "center",
        flexDirection: "row"
    },
    labelTypo: {
        fontFamily: "Inter-Medium",
        fontWeight: "500"
    },
    labelLayout: {
        lineHeight: 18,
        fontSize: 12
    },
    text: {
        color: "#005f6a",
        textAlign: "center",
        lineHeight: 18,
        fontSize: 12
    },
    badge: {
        borderRadius: 6,
        backgroundColor: "#edf7f8",
        borderColor: "#c1e2e6",
        borderWidth: 1,
        paddingHorizontal: 6,
        paddingVertical: 2,
        justifyContent: "center",
        width: 24,
        borderStyle: "solid"
    },
    label: {
        fontSize: 14,
        lineHeight: 20,
        color: "#344054",
        textAlign: "left"
    },
    label1: {
        fontFamily: "Inter-Regular",
        color: "#667085",
        marginTop: 4,
        textAlign: "left"
    },
    labelParent: {
        justifyContent: "center"
    },
    checkCircleIcon: {
        width: 14,
        height: 14,
        overflow: "hidden"
    },
    label2: {
        color: "#079455",
        marginLeft: 4,
        textAlign: "left",
        lineHeight: 18,
        fontSize: 12
    },
    frameWrapper: {
        marginTop: 8
    },
    frameGroup: {
        marginLeft: 12,
        justifyContent: "center"
    },
    badgeParent: {
        zIndex: 0,
        flexDirection: "row"
    },
    arrowRightIcon: {
        height: 24,
        zIndex: 1,
        width: 24,
        overflow: "hidden"
    },
    dropdownIcon: {
        position: "absolute",
        top: 0,
        left: 315,
        width: 20,
        height: 20,
        zIndex: 2
    },
    frameParent: {
        alignSelf: "stretch",
        borderColor: "#eaecf0",
        borderBottomWidth: 1,
        flex: 1,
        width: "100%",
        alignItems: "flex-end",
        justifyContent: "space-between",
        paddingBottom: 8,
        flexDirection: "row",
        overflow: "hidden",
        borderStyle: "solid"
    }
});

export default FormPreviewCard;
