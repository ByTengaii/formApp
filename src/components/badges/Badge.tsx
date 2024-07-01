import { View,Text, StyleSheet } from "react-native";

interface BadgeProps {
    text: string;
    style?: object;
}

export function Badge(props: BadgeProps) {
    return (
        <View style={[styles.badge, props.style]}>
            <Text style={styles.badgeText}>{props.text}.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    badge: {
        borderRadius: 6,
        backgroundColor: "#edf7f8",
        borderStyle: "solid",
        borderColor: "#c1e2e6",
        borderWidth: 1,
        width: 25, 
        height: 25,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    badgeText: {
        fontSize: 12,
        lineHeight: 18,
        fontFamily: "Inter_500Medium",
        color: "#005f6a",
        textAlign: "center"
    }
})