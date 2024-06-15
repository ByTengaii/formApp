import { LeftButtonIcon } from "../../../assets";
import {TouchableOpacity, StyleSheet}from "react-native";

export function LeftButton(){
    return (
        <TouchableOpacity style={styles.container}>
            <LeftButtonIcon/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 20,
    }
})