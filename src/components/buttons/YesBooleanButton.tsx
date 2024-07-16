
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { CheckIcon } from "../../../assets";
import Colors from "../../theme/colors";

interface YesButtonProps {
    setAnswerHandler: (answer: boolean) => void;
    isEnable: boolean;
    style?: object;
}

export function YesBooleanButton(props: YesButtonProps) {

    return (
        props.isEnable ? (
            <TouchableOpacity style={[{ ...styles.container, backgroundColor: Colors.green }, props.style]}>
                <Text style={{ ...styles.text, color: Colors.white }}>Var</Text>
                <CheckIcon style={styles.icon} />
            </TouchableOpacity>
        ) : (
            <TouchableOpacity style={[styles.container, styles.containerBorder, props.style]}
            onPress={() => props.setAnswerHandler(true)}
            >
                <Text style={{ ...styles.text, color: Colors.secondary }}>Var</Text>
            </TouchableOpacity>
        )
    )
}


const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 12,
        paddingVertical: 6,
        width: 118,
        height: 20,
    },
    containerBorder: {
        borderRadius: 8,
        borderStyle: "solid",
        borderColor: Colors.borderPrimary,
        borderWidth: 1,
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: "Inter_600SemiBold",
        textAlign: "left"
    },
    icon: {
        marginLeft: 4,
    }
});