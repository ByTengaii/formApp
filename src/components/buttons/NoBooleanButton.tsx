
import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { CheckIcon } from "../../../assets";
import Colors from "../../theme/colors";

interface NoButtonProps {
    setAnswerHandler: React.Dispatch<React.SetStateAction<boolean>>
    isEnable: boolean;
    style?: object;
}

export function NoBooleanButton(props: NoButtonProps) {
    return (
        props.isEnable ? (
            <TouchableOpacity style={[styles.container, props.style]}
            onPress={()=>{props.setAnswerHandler(false)}}
            >
                <Text style={{ ...styles.text, color: Colors.secondary }}>Yok</Text>
            </TouchableOpacity>
        ) : (
            <TouchableOpacity style={[{ ...styles.container, backgroundColor: Colors.red },styles.containerBorder, props.style]}>
                <Text style={{ ...styles.text, color: Colors.white }}>Yok</Text>
                <CheckIcon style={styles.icon} />
            </TouchableOpacity>
        )
    )
}


const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 12,
        paddingVertical: 6,
        overflow: "hidden"
    },
    containerBorder: {
        borderRadius: 8,
        borderStyle: "solid",
        borderColor: Colors.borderPrimary,
        borderWidth: 1,
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: "Inter_600SemiBold",
        textAlign: "left"
    },
    icon: {

    }
});