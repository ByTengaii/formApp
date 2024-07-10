import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SpareFormData } from "../models/SpareModel";
import { EditIcon, TrashIcon } from "../../assets";
import Colors from "../theme/colors";

interface SpareTableProps {
    data: {
        items: SpareFormData[];
        handleItems:(data: SpareFormData[]) => void;
    };
    stateModal:{
        modalVisible: boolean;
        setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    }
    element: SpareFormData;
    modalData:{
        modalData: SpareFormData;
        setModalData: React.Dispatch<React.SetStateAction<SpareFormData>>;
        setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
    }
    style?: object;
}


export function SpareTable(props: SpareTableProps) {
    const deleteItem = () => {
        const newItems = props.data.items.filter((item) => item.stockCode !== props.element.stockCode);
        props.data.handleItems(newItems);
    }

    const editItem = () => {
        props.modalData.setIsEdit(true);
        props.modalData.setModalData(props.element);
        props.stateModal.setModalVisible(true);
    }

    return (
        <View style={[styles.container,props.style]}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitleText}>Yedek Parça Tablosu</Text>
                <TouchableOpacity 
                style={{...styles.headerIcon, marginLeft:'auto'}}
                onPress={editItem}
                >
                    <EditIcon/>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.headerIcon}
                onPress={deleteItem}
                >
                <TrashIcon  />
                </TouchableOpacity>
                
            </View>
            <View style={styles.rowContainer}>
                <View style={styles.cellContainer}>
                    <Text style={[styles.cellTitle, styles.cellTitleText]}>Stok Kodu</Text>
                    <Text style={[styles.cellContentText,styles.cellContent]}>{props.element.stockCode}</Text>
                </View>
                <View style={styles.cellContainer}>
                    <Text style={[styles.cellTitle, styles.cellTitleText]}>Sarf Edilen Miktar</Text>
                    <Text style={[styles.cellContentText,styles.cellContent]}>{props.element.usedAmount}</Text>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <View style={[styles.cellContainer, styles.lastCellContainer]}>
                    <Text style={[styles.cellTitle, styles.cellTitleText]}>Malzeme Malzeme Tanımı</Text>
                    <Text style={[styles.cellContentText,styles.cellContent]}>{props.element.materialDescription}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderColor: Colors.petrol300,
        height: 48,
        alignItems: 'center',
    },
    headerTitleText: {
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold',
        lineHeight: 24,
        textAlign: 'left',
    },
    headerIcon: {
        marginLeft:12
    },
    rowContainer: {
        flexDirection: 'row',
    },
    cellContainer: {
        flex:1,
        borderWidth: 1,
        borderTopWidth:0,
        borderColor: Colors.petrol300,
    },
    cellTitle: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: Colors.petrol50,
    },
    cellTitleText: {
        fontSize: 12,
        lineHeight: 18,
        fontFamily: 'Inter_500Medium',
        color: Colors.petrol700,
        textAlign: 'left',
    },
    cellContent:{
        padding:12
    },
    cellContentText: {
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'Inter_400Regular',
        color: Colors.textSecondary,
        textAlign: 'left',
    },
    lastCellContainer: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    }

});