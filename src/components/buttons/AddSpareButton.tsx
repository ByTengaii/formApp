import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TakeSpareModal } from "../modals/TakeSpareModal";
import { PlusIcon } from "../../../assets";
import Colors from "../../theme/colors";

interface AddButtonProps {
    data: {
        items: {
            id: number;
            stockCode: string;
            usedAmount: number;
            materialDescription: string;
        }[];
        setItems: React.Dispatch<React.SetStateAction<{
            id: number;
            stockCode: string;
            usedAmount: number;
            materialDescription: string;
        }[]>>;
    };
    style?: object;
}

export function AddSpareButton(props: AddButtonProps) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <TakeSpareModal stateModal={{modalVisible,setModalVisible}} data={props.data} />
            <TouchableOpacity
                style={[styles.container, props.style]}
                onPress={() => { setModalVisible(true); }}
            >
                <PlusIcon style={styles.icon} />
                <Text style={styles.text}>Ekle</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.borderPrimary,
        paddingVertical: 10,
        paddingHorizontal: 14,
    },
    icon: {},
    text: {}
});