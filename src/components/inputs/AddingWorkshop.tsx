import { useState } from "react";
import {StyleSheet, View, TextInput, Text, TouchableOpacity} from "react-native";
import {FormTitle} from "../../index";
import { PlusIcon } from "../../../assets";
import Colors from "../../theme/colors";
export function AddingWorkshop({title, isEnable} : {title: string, isEnable: boolean}) {
    const [lines, setLines] = useState([{ id: 1 }]);

    const addNewLine = () => {
        setLines([...lines, { id: lines.length + 1 }]);
    };

    return (
        <View style={styles.container}>
            <FormTitle title={title}></FormTitle>
            {lines.map((line, index) => (
                <View key={line.id} style={styles.element}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>{line.id}.</Text>
                    </View>
                    <TextInput style={styles.input} placeholder='' />
                </View>
            ))}
            <TouchableOpacity style={styles.addButton}
            onPress={addNewLine}>
                <PlusIcon/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{

    },
    element:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 8,
    },
    badge:{
        borderRadius: 6,
        backgroundColor: Colors.badgeBackground,
        borderStyle: "solid",
        borderColor: Colors.badgeBorder,
        borderWidth: 1,
        width: 25, 
        height: 25,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 6,
        paddingVertical: 2,
        marginRight: 'auto',
    },
    badgeText:{
        fontSize: 12,
        lineHeight: 18,
        fontFamily: "Inter_500Medium",
        color: Colors.badgeText,
        textAlign: "center"
    },
    input:{
        borderRadius: 8,
        backgroundColor: Colors.white,
        borderStyle: "solid",
        borderColor: Colors.borderPrimary,
        borderWidth: 1,
        paddingHorizontal: 12,
        paddingVertical: 2,
        width: '90%',
        height: 40,
    },
    
    addButton:{
        alignItems: 'center',
        width: '90%',
        height: 40,
        paddingHorizontal: 12,
        paddingVertical: 2,
        marginLeft: 'auto',
        marginTop: 8,
        marginBottom: 12,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: Colors.white,
        borderStyle: "solid",
        borderColor: Colors.borderPrimary,
    }
});