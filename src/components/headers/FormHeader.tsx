import { Text,View,StyleSheet, TouchableOpacity } from "react-native";
import { LeftButtonIcon, RightButtonIcon } from "../../../assets";
import {StatusBar} from "../";

interface FormHeaderProps {
    title: string;
    subtitle: string;
    navigation: any;
    index:{
        activeIndex: number;
        setActiveIndex: React.Dispatch<React.SetStateAction<number>>
    }
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
            <StatusBar index={props.index} navigation={props.navigation}/>
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
    textContainer:{},
    title:{},
    subtitle:{},
    LeftButton:{},
    RightButton:{},
    statusbar:{},
});

