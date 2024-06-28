import { View,StyleSheet } from "react-native";
import { BooleanSwitch, FormTitle } from "../index"


export function SwitchQuestion({title} : {title: string}) {
    return (
        <View style={styles.container}>
            <FormTitle title={title} />
            <BooleanSwitch />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginBottom: 12,
        flexDirection: 'row',
    },
});