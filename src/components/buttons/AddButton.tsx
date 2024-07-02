import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { PlusIcon } from "../../../assets";
import Colors from "../../theme/colors";

interface AddButtonProps {
    style?: object;
}

export function AddButton(props: AddButtonProps) {
    return (
        <TouchableOpacity style={[styles.container, props.style]}>
            <PlusIcon style={styles.icon}/>
            <Text style={styles.text}>Ekle</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.borderPrimary,
        paddingVertical: 10,
        paddingHorizontal: 14,
    },
    icon:{},
    text:{}
});