import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../theme/colors";
import useAppFonts  from "../../theme/fonts";
interface Props {
    handleFunction: any;
}


export function LoginButton({ handleFunction }: Props) {
    const fontsLoaded = useAppFonts();
    if (!fontsLoaded) {
        return null;
    }    
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
        backgroundColor: Colors.active,
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 10
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "Inter_600SemiBold",
        color: "#fff",
        textAlign: "center"
    }
});


export default LoginButton;
