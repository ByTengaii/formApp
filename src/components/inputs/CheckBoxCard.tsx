import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Colors from "../../theme/colors";

interface CheckBoxCardProps {
    item:{
        id: number, 
        title: string,
        color: string,
    },
    state:{
        activeIndex: number;
        handleCheckBox: (index: number) => void;
    }
    style?: object;
}

export function CheckBoxCard(props: CheckBoxCardProps) {

    return (
        props.state.activeIndex == props.item.id ? (
            <TouchableOpacity style={{...styles.container, borderColor:props.item.color}}>
                <View style={styles.header}>
                    <Text style={{...styles.text, color:props.item.color}}>{props.item.title}</Text>
                    <View style={{...styles.checkbox, backgroundColor:props.item.color, borderColor:props.item.color }}>
                        <View style={styles.checkboxFilled}/>
                    </View>
                </View>
                <TextInput style={styles.input} placeholder="" />
            </TouchableOpacity >
        )
            : (
                <TouchableOpacity style={styles.container}
                onPress={()=>{props.state.handleCheckBox(props.item.id)}}>

                    <View style={styles.header}>
                        <Text style={styles.text}>{props.item.title}</Text>
                        <View style={styles.checkbox}/>
                    </View>
                </TouchableOpacity >
            )

    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.borderPrimary,
        marginBottom: 16,
    },
    checkbox: {
        marginLeft: 'auto',
        borderRadius: 10,
        borderWidth: 1,
        width: 20,
        height: 20,
        padding: 4,
    },
    checkboxFilled: {
        flex:1,
        backgroundColor: Colors.white,
        borderRadius: 10,
    },
    header: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Inter_600SemiBold',
    },
    input: {
        marginTop: 12,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.borderPrimary,
        height: 40,
    }
});