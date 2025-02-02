import React from "react";
import { Modal, View, TouchableOpacity, Text, StyleSheet, TextInput } from "react-native";
import { InputLargeController } from '../../components';
import { XClose } from "../../../assets";
import Colors from "../../theme/colors";
import { useForm } from "react-hook-form";
import { SpareFormData, SpareSchema } from "../../models/SpareModel";
import { zodResolver } from "@hookform/resolvers/zod";

interface TakeSpareModalProps {
    style?: object;
    stateModal: {
        modalVisible: boolean;
        setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    };
    data: {
        items: SpareFormData[];
        handleItems:(data: SpareFormData[]) => void;
    };
    modelData: {
        modalData: SpareFormData;
        setModalData: React.Dispatch<React.SetStateAction<SpareFormData>>;
    }
    isEdit: boolean;
}


export function TakeSpareModal(props: TakeSpareModalProps) {
    const methods = useForm<SpareFormData>({
        resolver: zodResolver(SpareSchema),
    });

    methods.setValue('stockCode', props.modelData.modalData.stockCode);
    methods.setValue('usedAmount', props.modelData.modalData.usedAmount);
    methods.setValue('materialDescription', props.modelData.modalData.materialDescription);

    return (
        <Modal
            style={[styles.modalContainer, props.style]}
            animationType="slide"
            transparent={true}
            visible={props.stateModal.modalVisible}
            onRequestClose={() => {
                props.stateModal.setModalVisible(!props.stateModal.modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}> Yedek Parça Ekle</Text>
                        <TouchableOpacity style={styles.closeButton}
                            onPress={() => { props.stateModal.setModalVisible(false); }}
                        >
                            <XClose />
                        </TouchableOpacity>
                    </View>
                    <InputLargeController
                        name="stockCode"
                        title="TPIC Stok Kodu"
                        formMethods={methods}
                    />
                    <InputLargeController
                        name="usedAmount"
                        title="Sarf Edilen Miktar"
                        formMethods={methods}
                        props={{
                            inputMode: 'decimal',
                        }} />
                    <InputLargeController
                        name="materialDescription"
                        title="Malzeme tanımı"
                        formMethods={methods}
                        inputStyle={{
                            height: 100,
                            textAlignVertical: 'top',
                        }}
                        props={{
                            multiline: true,
                        }}
                    />

                    <TouchableOpacity
                        onPress={methods.handleSubmit((data) => {
                            if (props.isEdit) {
                                const newItems = props.data.items.map((item) => {
                                    if (item.stockCode === props.modelData.modalData.stockCode) {
                                        return data;
                                    } else {
                                        return item;
                                    }
                                });
                                props.data.handleItems(newItems);
                                props.stateModal.setModalVisible(!props.stateModal.modalVisible);
                            } else {
                                props.data.handleItems([...props.data.items, data]);
                                props.stateModal.setModalVisible(!props.stateModal.modalVisible);
                            }
                        })}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Ekle</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 12,
        width: 375,
        height: 422,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    headerContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Inter_600SemiBold',
    },
    closeButton: {
        marginLeft: 'auto',
    },
    modalContainer: {

    },
    button: {
        backgroundColor: Colors.active,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 16,
        elevation: 2,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: Colors.white,
        lineHeight: 24,
        fontFamily: 'Inter_600SemiBold',
    },
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