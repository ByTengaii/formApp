import { FC } from "react";
import { Text, View, TextInput, TextInputProps, StyleSheet } from "react-native"
import { Controller, UseFormReturn } from "react-hook-form"
import Colors from "../../theme/colors";

interface Props {
    title: string;
    name: string;
    formMethods: UseFormReturn<any>;
    placeholder?: string;
    style?: object;
    props?: TextInputProps
    inputStyle?: object;
}


const InputLargeController: FC<Props> = ({
    name,
    formMethods,
    title,
    placeholder="",
    style,
    inputStyle,
    props }) => {
        const { control, formState: { errors } } = formMethods;
    return (
        <View style={style}>
            <Controller
                name={name}
                rules={{ required: true }}
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={style}>
                        <Text style={styles.title}>{title}</Text>
                        <TextInput
                            style={[styles.input, inputStyle]}
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
        </View>
        
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