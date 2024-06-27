
import {Text, StyleSheet, View} from 'react-native';
import Colors from '../../theme/colors';
const items =[
    {id: 0, number: 1},
    {id: 1, number: 2},
    {id: 2, number: 3},
    {id: 3, number: 4},
    {id: 4, number: 5},
];

export default function StatusBar({activeIndex}: {activeIndex: number}){

    return(
        <View style={styles.container}>
            {items.map((item) => (
                (item.id === activeIndex)
                ? (<Text key={item.id} style={[styles.badge, {backgroundColor: Colors.active, color: Colors.white}]}>{item.number}</Text>)
                : (<Text key={item.id} style={[styles.badge, {backgroundColor: Colors.white, color: Colors.secondary}]}>{item.number}</Text>)
            ))}
        </View>
    )    
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: 4,
        paddingBottom: 12,
    },
    badge:{
        width: 32,
        height: 22,
        textAlign: "center",
        borderWidth: 1,
        borderColor: Colors.disable,
        borderRadius: 4,
        marginHorizontal: 4,
    }
});