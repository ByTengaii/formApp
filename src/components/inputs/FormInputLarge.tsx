import { View, Text, TextInput, StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

interface Props {
    title: string;
}

export default function FormInputLarge({ title }: { title: string }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TextInput style={styles.input} 
            placeholder=""
            />
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
        marginBottom: 3,
    },
    input: {
        borderRadius: 8,
        backgroundColor: Colors.white,
        borderStyle: "solid",
        borderColor: Colors.borderPrimary,
        borderWidth: 1,
        paddingHorizontal: 12,
        paddingVertical: 5
    },
});

