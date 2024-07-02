import { StyleSheet, View, Text } from "react-native";
import { EditIcon, TrashIcon } from "../../assets";
import Colors from "../theme/colors";

interface SpareTableProps {
    style?: object;
}


export function SpareTable(props: SpareTableProps) {
    return (
        <View style={[styles.container,props.style]}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitleText}>Yedek Parça Tablosu</Text>
                <EditIcon style={{...styles.headerIcon, marginLeft:'auto'}} />
                <TrashIcon style={styles.headerIcon} />
            </View>
            <View style={styles.rowContainer}>
                <View style={styles.cellContainer}>
                    <Text style={[styles.cellTitle, styles.cellTitleText]}>Stok Kodu</Text>
                    <Text style={[styles.cellContentText,styles.cellContent]}>TP-2349532-24</Text>
                </View>
                <View style={styles.cellContainer}>
                    <Text style={[styles.cellTitle, styles.cellTitleText]}>Sarf Edilen Miktar</Text>
                    <Text style={[styles.cellContentText,styles.cellContent]}>TP-2349532-24</Text>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <View style={[styles.cellContainer, styles.lastCellContainer]}>
                    <Text style={[styles.cellTitle, styles.cellTitleText]}>Malzeme Malzeme Tanımı</Text>
                    <Text style={[styles.cellContentText,styles.cellContent]}>Malzeme bilgileri & tanımı buraya yazılır.</Text>
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