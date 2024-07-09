import { StyleSheet, View, TextInput, Text, TouchableOpacity, Button } from "react-native";
import { Controller, UseFormReturn, useFieldArray } from "react-hook-form";
import { FormTitle } from "../";
import { PlusIcon, TrashIcon } from "../../../assets";
import { Colors } from "../../theme";
import { Item } from "../../models";

interface AddingWorkshopProps {
    isEnable: boolean;
    item: Item;
    formMethods: UseFormReturn<any>;
}

const AddingWorkshop: React.FC<AddingWorkshopProps> = ({
    isEnable,
    item,
    formMethods
}) => {
    const { control } = formMethods;
    const { fields, append, remove} = useFieldArray({
        name: "workshopNames",
        control
    });
    const addNewLine = () => {
        append({
            name: `workshop-${1}`
        });
    };


    return (
        <View style={{ ...styles.container, display: isEnable ? 'flex' : 'none' }}>
            <FormTitle title={item.title}></FormTitle>
            {fields.map((item, index) => (
                /*<li key={item.id}>
                    <input {...register(`test.${index}.firstName`)} />
                    <Controller
                        render={({ field }) => <input {...field} />}
                        name={`test.${index}.lastName`}
                        control={control}
                    />
                    <button type="button" onClick={() => remove(index)}>Delete</button>
                </li>*/
                <View  style={styles.element}>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{index+1}.</Text>
                </View>
                <Controller
                    key={item.id}
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name={`workshop-${item.id}`}
                />
                <TouchableOpacity
                 onPress={()=>remove(index)}
                >
                    <TrashIcon />
                </TouchableOpacity>
            </View>
            ))}
            <TouchableOpacity style={styles.addButton}
                onPress={addNewLine}>
                <PlusIcon />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    element: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 8,
    },
    badge: {
        borderRadius: 6,
        backgroundColor: Colors.badgeBackground,
        borderStyle: "solid",
        borderColor: Colors.badgeBorder,
        borderWidth: 1,
        width: 25,
        height: 25,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 6,
        paddingVertical: 2,
        marginRight: 'auto',
    },
    badgeText: {
        fontSize: 12,
        lineHeight: 18,
        fontFamily: "Inter_500Medium",
        color: Colors.badgeText,
        textAlign: "center"
    },
    input: {
        borderRadius: 8,
        backgroundColor: Colors.white,
        borderStyle: "solid",
        borderColor: Colors.borderPrimary,
        borderWidth: 1,
        paddingHorizontal: 12,
        paddingVertical: 2,
        width: '83%',
        height: 40,
        marginRight: 5,
    },

    addButton: {
        alignItems: 'center',
        width: '90%',
        height: 40,
        paddingHorizontal: 12,
        paddingVertical: 2,
        marginLeft: 'auto',
        marginTop: 8,
        marginBottom: 12,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: Colors.white,
        borderStyle: "solid",
        borderColor: Colors.borderPrimary,
    }
});

export default AddingWorkshop;