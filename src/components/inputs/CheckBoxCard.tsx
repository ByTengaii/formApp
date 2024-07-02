import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Checkbox from 'expo-checkbox';
import Colors from "../../theme/colors";

interface CheckBoxCardProps {
    text: string;
    color?: string;
    style?: object;
}

export function CheckBoxCard(props: CheckBoxCardProps) {
    const [isChecked, setChecked] = useState(false);

    return (
        isChecked ? (
            <View style={{...styles.container, borderColor:props.color}}>
                <View style={styles.header}>
                    <Text style={{...styles.text, color:props.color}}>{props.text}</Text>
                    <Checkbox
                        value={isChecked}
                        onValueChange={setChecked}
                        style={styles.checkbox}
                        color={props.color}
                    />
                </View>
                <TextInput style={styles.input} placeholder="" />
            </View >
        )
            : (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.text}>{props.text}</Text>
                        <Checkbox
                            value={isChecked}
                            onValueChange={setChecked}
                            style={styles.checkbox}
                        />
                    </View>
                </View >
            )

    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.borderPrimary,
        marginBottom: 16,
    },
    checkbox: {
        marginLeft: 'auto',
        borderRadius: 100,
    },
    header: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Inter_600SemiBold',
    },
    input: {
        marginTop: 12,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.borderPrimary,
        height: 40,
    }
});