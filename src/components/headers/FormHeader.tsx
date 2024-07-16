import { Text,View,StyleSheet, TouchableOpacity } from "react-native";
import { LeftButtonIcon, RightButtonIcon } from "../../../assets";
import { Colors } from "../../theme";
import {StatusBar} from "../";

interface FormHeaderProps {
    title: string;
    subtitle: string;
    navigation: any;
}
export function FormHeader(props: FormHeaderProps) {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TouchableOpacity>
                    <LeftButtonIcon />
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.subtitle}>{props.subtitle}</Text>
                </View>
                <TouchableOpacity>
                    <RightButtonIcon />
                </TouchableOpacity>    
            </View>
            <StatusBar navigation={props.navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',

    },
    topContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:16,
        borderBottomWidth:1,
        borderColor:'#f0f0f0'
    },
    textContainer:{
    },
    title:{
        textAlign:'center',
        color:Colors.primary,
        lineHeight:28,
        fontSize:18,
        fontFamily:'Inter_600SemiBold',
    },
    subtitle:{
        textAlign:'center',
        color:Colors.secondary,
        fontSize:14,
        lineHeight:20,
        fontFamily:'Inter_400Regular',
    },
    LeftButton:{},
    RightButton:{},
    statusbar:{},
});

