import React, { useRef, useState} from "react";
import { FlatList, StyleSheet, View } from "react-native";
import {  ContinueButton, GoBackButton, SpareTable,FormTitle, TakeSpareModal, AddSpareButton} from "../../components";
import {Colors} from "../../theme/";
import { FormProps, SpareFormData} from "../../models/";
import { useStatusBarContext } from "../../services/context";
import { useFormContext } from "react-hook-form";


const renderData = [
    { id: 1, type: 'booleanButton', title: "Bu hatayı bulmak için AM/PM önleyici bakım prosedürümüz var mı ?" },
];



export function Form_3(props: FormProps) {
    const formContext = useFormContext();
    const statusBarContext = useStatusBarContext();
    const [items, setItems] = useState(formContext.getValues('spareParts') as SpareFormData[]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState({} as SpareFormData);
    const [isEdit, setIsEdit] = useState(false);
    const flatListRef = useRef<FlatList>(null); // Create a reference
    statusBarContext.setActiveIndex(2);

    
    const handleItems = (data:SpareFormData[]) => {
        setItems(data);
        formContext.setValue('spareParts', data);
    }

    const onSubmit = () => {
        props.navigation.navigate('page-4')
    };

    const renderItem = ({ item }: { item: any }) => {
        return (
            <View>
            <FormTitle title="Kullanılan Yedek Parçalar" style={{ marginBottom: 10 }} />
            {items.map((item,index) => {
                return <SpareTable key={index} stateModal={{modalVisible,setModalVisible}} data={{items, handleItems}} element={item} modalData={{modalData,setModalData, setIsEdit}} style={{ marginBottom: 10 }} />;
            })}
            <TakeSpareModal isEdit={isEdit} modelData={{modalData, setModalData}}stateModal={{modalVisible, setModalVisible}} data={{items,handleItems}} />
            <AddSpareButton  modalData={{modalData, setModalData, setIsEdit}}stateModal={{modalVisible, setModalVisible}}data={{items, handleItems}}/>
        </View>
        );
    };

    return (

        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={renderData}
                style={{ flex: 1, paddingTop: 20 }}
                renderItem={renderItem}
            />
            <View style={styles.submitContainer}>
                <GoBackButton />
                <ContinueButton
                    props={{
                        onPress: onSubmit,
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    
    statusBarContainer: {
        justifyContent: "flex-end",
    },
    submitContainer: {
        borderTopWidth: 1,
        borderColor: Colors.borderPrimary,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 16,
    },
});


export default Form_3;