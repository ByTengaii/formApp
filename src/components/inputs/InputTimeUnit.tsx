import { View, Text, TextInput, StyleSheet } from "react-native"
import Colors from "../../theme/colors"

export function InputTimeUnit({  unit }: { unit: string}) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="" inputMode="tel" />
            <Text style={styles.unit}>{unit}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        margin:12
    },
    input: {
        width: 85,
        height: 40,
        paddingHorizontal: 12,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: Colors.white,
        borderColor: Colors.borderPrimary,
        borderWidth: 1,
    },
    unit: {
        textAlign: "center",
        fontSize: 14,
        lineHeight: 20,
        fontFamily: "Inter_500Medium",
        color: Colors.primary,
        borderWidth: 1,
        borderColor: Colors.borderPrimary,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 8,
        height: 40,
    },
});