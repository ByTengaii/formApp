import React, { useState } from "react";
import { View, StyleSheet, Switch } from "react-native";
import { Controller, Control, FieldErrors, FieldValues, UseFormSetValue, set, UseFormReturn } from "react-hook-form";
import { FormTitle } from "./"
import { Colors } from "../theme/";
import { Item } from "../models";


interface SwitchQuestionProps {
    item: Item;
    formMethods: UseFormReturn<any>
    setIsContacted: React.Dispatch<React.SetStateAction<boolean>>;
}

const SwitchQuestion: React.FC<SwitchQuestionProps> = ({
    item,
    formMethods,
    setIsContacted
}) => {
    const { control, setValue } = formMethods;
    const [isEnabled, setIsEnabled] = useState(formMethods.getValues(item.name) as boolean);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        setIsContacted(!isEnabled);
        setValue?
            setValue(item.name, !isEnabled)
            :null;
    };

    return (
        <View style={styles.container}>
            <FormTitle title={item.title} />
            <View style={styles.switchContainer}>
                <Controller
                    name={item.name}
                    control={control}
                    render={({field}) => (
                        <Switch
                            trackColor={{ false: Colors.secondary, true: Colors.active }}
                            thumbColor={isEnabled ? Colors.white : Colors.disable}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                        />
                    )}

                />

            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 12,
        flexDirection: 'row',
    },
    switchContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto'
    },
});

export default SwitchQuestion;