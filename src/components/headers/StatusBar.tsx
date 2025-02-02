
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Colors from '../../theme/colors';
import { useStatusBarContext } from '../../services/context';

const items =[
    {id: 0, number: 1},
    {id: 1, number: 2},
    {id: 2, number: 3},
    {id: 3, number: 4},
    {id: 4, number: 5},
];

interface StatusBarProps {
    navigation: any;
}

export default function StatusBar(props: StatusBarProps){
    const statusBarContext = useStatusBarContext();
    return(
        <View style={styles.container}>
            {items.map((item) => (
                (item.id === statusBarContext.activeIndex)
                ? (
                <TouchableOpacity
                key={item.id}
                    onPress={() => {
                        statusBarContext.setActiveIndex(item.id);
                        props.navigation.navigate(`page-${item.number}`)
                    }}
                >
                    <Text style={[styles.badge, {backgroundColor: Colors.active, color: Colors.white}]}>{item.number}</Text>
                </TouchableOpacity>
                )
                : (
                <TouchableOpacity
                key={item.id}
                    onPress={() => {props.navigation.navigate(`page-${item.number}`)}}
                > 
                <Text  style={[styles.badge, {backgroundColor: Colors.white, color: Colors.secondary}]}>{item.number}</Text>
                </TouchableOpacity>
                )
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