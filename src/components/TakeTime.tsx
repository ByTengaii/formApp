import { View,Text, StyleSheet } from "react-native";
import { FormTitle, InputTimeUnit} from "../index";

export function TakeTime ({title} : {title: string}) {
    return (
        <View style={styles.container}>
            <FormTitle title={title} />
            <View style={styles.inputArea}>
                <InputTimeUnit unit='sa' />
                <Text style={styles.text}>:</Text>
                <InputTimeUnit unit='dk' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginBottom: 12,
    },
    inputArea:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    text:{
        width: 10,
        marginTop: 21,
        textAlign: 'center',

    }

});