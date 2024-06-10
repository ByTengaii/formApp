import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
    handleFunction: any;
}
export function LoginButton({ handleFunction }: Props) {
    return (
        <TouchableOpacity
            onPress={handleFunction}
            style={styles.button}>
            <Text style={styles.text}>Login</Text>
        </ TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#00727f",
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 10
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "Inter-SemiBold",
        color: "#fff",
        textAlign: "center"
    }
});


export default LoginButton;
