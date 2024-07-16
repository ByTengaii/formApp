import { View, Text, StyleSheet, TextInput } from "react-native";

import { FormTitle } from "./";
import { Colors } from "../theme";
import { UseFormReturn, Controller, useFieldArray } from "react-hook-form";
import React from "react";
import { Item } from "../models";

interface ControllerProps {
    item: Item,
    formMethods : UseFormReturn<any>;
}

const TakeTime: React.FC<ControllerProps> = ({ 
    item,
    formMethods 
}) => {
    const { control, formState:{errors} } = formMethods;
    const {fields} = useFieldArray({
        name: item.name,
        control
    });
    return (
        <View style={styles.container}>
            <FormTitle title={item.title} />
            <View style={styles.inputArea}>
                <View style={inputStyles.container}>
                    <Controller
                    key={item.id}
                    name={`${item.name}.${0}`}
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={inputStyles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            inputMode="tel"
                        />
                    )}
                    />
                    <Text style={inputStyles.unit}>sa</Text>
                </View>
                <Text style={styles.text}>:</Text>
                <View style={inputStyles.container}>
                    <Controller
                    key={item.id}
                    name={`${item.name}.${1}`}
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={inputStyles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            inputMode="tel"
                        />
                    )}
                    />
                    <Text style={inputStyles.unit}>dk</Text>
                </View>
            </View>
            {errors 
                && errors[item.name] 
                && <Text style={{ color: Colors.red }}>{String(errors[item.name]?.message)}</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 12,
    },
    inputArea: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    text: {
        width: 10,
        marginTop: 21,
        textAlign: 'center',

    }

});

const inputStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        margin: 12
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

export default TakeTime;    