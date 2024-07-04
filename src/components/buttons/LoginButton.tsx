import {FC}  from "react";
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from "react-native";
import Colors from "../../theme/colors";
import useAppFonts  from "../../theme/fonts";

interface Props {
    props?: TouchableOpacityProps;
}


const LoginButton: FC<Props> = ({
    props }) => {
        const fontsLoaded = useAppFonts();
        if (!fontsLoaded) {
            return null;
        }    
        return (
            <TouchableOpacity
                style={styles.button}
                {...props}
            >
                <Text style={styles.text}>Login</Text>
            </ TouchableOpacity>
        );
}



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
