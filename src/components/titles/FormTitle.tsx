import { StyleSheet, View, Text } from "react-native";
import Colors from "../../theme/colors";

interface FormTitleProps {
    title: string;
    style?: object; // Add style to the interface
}
export function FormTitle({ title, style}: FormTitleProps) {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
    },
    title: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: "Inter_500Medium",
        color: Colors.primary,
        textAlign: "left",
    },
});