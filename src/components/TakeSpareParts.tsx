import { useState } from "react";
import { View } from "react-native";
import { SpareFormData } from "../models/SpareModel";
import { SpareTable, FormTitle, AddSpareButton, TakeSpareModal } from "./";


export function TakeSpareParts() {
    const [items, setItems] = useState([] as SpareFormData[]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState({} as SpareFormData);
    const [isEdit, setIsEdit] = useState(false);
    return (
        <View>
            <FormTitle title="Kullanılan Yedek Parçalar" style={{ marginBottom: 10 }} />
            {items.map((item,index) => {
                return <SpareTable key={index} stateModal={{modalVisible,setModalVisible}} data={{items, setItems}} element={item} modalData={{modalData,setModalData, setIsEdit}} style={{ marginBottom: 10 }} />;
            })}
            <TakeSpareModal isEdit={isEdit} modelData={{modalData, setModalData}}stateModal={{modalVisible, setModalVisible}} data={{items,setItems}} />
            <AddSpareButton  modalData={{modalData, setModalData, setIsEdit}}stateModal={{modalVisible, setModalVisible}}data={{items, setItems}}/>
        </View>
    );
} 