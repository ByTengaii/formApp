import { FC } from "react";
import { Text, View, TextInput, TextInputProps, StyleSheet } from "react-native"
import { Controller, Control, FieldValues, FieldErrors } from "react-hook-form"
import Colors from "../../theme/colors";
import { Title } from "react-native-paper";

interface Props {
    title: string;
    control: Control<any>;
    errors: FieldErrors<FieldValues>;
    name: string;
    placeholder: string;
    props?: TextInputProps
}


const InputLargeController: FC<Props> = ({
    control,
    errors,
    name,
    title,
    placeholder,
    props }) => {
    return (
        <>
            <Controller
                name={name}
                rules={{ required: true }}
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={placeholder}
                            {...props}
                        />
                    </View>
                )}
            />
            {errors 
                && errors[name] 
                && <Text style={{ color: Colors.red }}>{String(errors[name].message)}</Text>
            }
        </>
    );
}

const styles = StyleSheet.create({
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

export default InputLargeController;