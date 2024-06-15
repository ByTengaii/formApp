import { RightButtonIcon } from "../../../assets";
import {TouchableOpacity, StyleSheet}from "react-native";

export function RightButton(){
    return (
        <TouchableOpacity style={styles.container}>
            <RightButtonIcon/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        marginRight: 20,
    }
})