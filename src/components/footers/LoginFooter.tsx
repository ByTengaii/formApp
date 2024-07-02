import { View, Text, StyleSheet } from 'react-native';

export function LoginFooter() {
    return(
    <View style={styles.container}>
        <Text style={styles.text}>powered by</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-end",
    },
    text: {
        fontSize: 12,
        lineHeight: 18,
        color: "#344054",
        textAlign: "left"
    }, 
});