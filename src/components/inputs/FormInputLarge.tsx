import { View, Text, TextInput, StyleSheet } from 'react-native';
import Colors from '../../theme/colors';
export default function FormInputLarge({ title }: { title: string }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TextInput style={styles.input} placeholder="" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        marginBottom: 16,
    },
    title: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: "Inter_500Medium",
        color: Colors.primary,
        textAlign: "left",
        marginBottom: 6,
    },
    input: {
        shadowColor: "rgba(16, 24, 40, 0.05)",
        borderRadius: 8,
        backgroundColor: Colors.white,
        borderStyle: "solid",
        borderColor: Colors.borderPrimary,
        borderWidth: 1,
        paddingHorizontal: 12,
        paddingVertical: 8
    },
});

