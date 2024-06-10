import { View, TextInput, Text, StyleSheet } from 'react-native';

interface Props {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    placeholder: string;
}

export function InputEmail({ email, setEmail, placeholder }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.nameLabel}> Email </Text>
            <TextInput
                placeholder={placeholder}
                value={email}
                onChangeText={setEmail}
                style={styles.inputLayer}
            />
        </View>);
}

const styles = StyleSheet.create({
    nameLabel: {
        marginBottom: 5
    },
    container: {
        marginBottom: 20

    },
    inputLayer: {
        backgroundColor: "#fff",
        borderStyle: "solid",
        borderColor: "#d0d5dd",
        borderWidth: 1,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "Inter-Regular",
        overflow: "hidden",
        textAlign: "left",
        flex: 1
    }

});