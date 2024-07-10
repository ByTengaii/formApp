import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TakeSpareModal } from "../modals/TakeSpareModal";
import { PlusIcon } from "../../../assets";
import Colors from "../../theme/colors";
import { SpareFormData } from "../../models/SpareModel";

interface AddButtonProps {
    data: {
        items: SpareFormData[];
        handleItems: (data: SpareFormData[]) => void;
    };
    stateModal:{
        modalVisible: boolean;
        setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    };
    modalData: {
        modalData: SpareFormData;
        setModalData: React.Dispatch<React.SetStateAction<SpareFormData>>;
        setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
    }
    defaultValue?: SpareFormData;
    style?: object;
}

export function AddSpareButton(props: AddButtonProps) {

    return (
        <View>
            <TouchableOpacity
                style={[styles.container, props.style]}
                onPress={() => {
                    props.modalData.setIsEdit(false);
                    props.modalData.setModalData({} as SpareFormData); 
                    props.stateModal.setModalVisible(true); }}
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