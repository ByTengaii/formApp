import { View, Text, StyleSheet } from 'react-native';

export function LoginFooter() {
    return(
    <View style={styles.kalt}>
        <Text style={[styles.label4, styles.labelClr]}>powered by</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    kalt: {
        alignItems: "flex-end",
        zIndex: 3
    },
    label4: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: "300",
        fontFamily: "Codec Pro Variable"
    }, 
    labelClr: {
        color: "#344054",
        textAlign: "left"
    },
});