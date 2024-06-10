import { View, TextInput, Text, StyleSheet } from 'react-native';

interface Props {
    pass: string;
    setPass: React.Dispatch<React.SetStateAction<string>>;
    placeholder: string;
}

export function InputPass({ pass, setPass, placeholder }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.nameLabel}> Password </Text>
            <TextInput
                placeholder={placeholder}
                value={pass}
                onChangeText={setPass}
                secureTextEntry
                style={styles.inputLayer}
            />
        </View>
    );
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