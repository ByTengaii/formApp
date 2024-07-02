import { LogOutIcon } from "../../../assets/index";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../theme/colors";
import useAppFonts from "../../theme/fonts";

interface ExitButtonProps {
    setSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
export function ExitButton(props: ExitButtonProps) {
    const fonts = useAppFonts();
    if (!fonts) return null;
    return (
            <TouchableOpacity style={styles.exitButton}
            onPress={() => props.setSignedIn(false)}
            >
                <Text style={styles.text}>Çıkış Yap</Text>
                <LogOutIcon />
            </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    exitButton: {
        alignSelf:'stretch',
        backgroundColor: Colors.red,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 48,
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: "Inter_600SemiBold",
        color: Colors.white,
        textAlign: "center",
        paddingRight: 8, 
    },
    icon: {
        width: 20,
        height: 20,
    }
});