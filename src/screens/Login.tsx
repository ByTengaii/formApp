import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LoginForm, LoginFooter} from "../index";

const backgroundPatternDecorative = require('../../assets/loginBackgroundPattern.png');

export function Login({handleAuth}: {handleAuth: (value:boolean) => void}) {

    return (
        <View style={[styles.main, styles.mainFlexBox]}>
            <Image style={styles.backgroundPatternDecorative} resizeMode="cover" source={backgroundPatternDecorative} />
            <View style={styles.labelWrapper}>
                <Text style={styles.label}>Logo</Text>
            </View>
            <LoginForm handleAuth={handleAuth}/>
            <LoginFooter/>
        </View>);
};

const styles = StyleSheet.create({
    main: {
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 72,
        paddingBottom: 16,
        alignItems: "center",
        alignSelf: "stretch"
    },
    mainFlexBox: {
        overflow: "hidden",
        flex: 1
    },
    backgroundPatternDecorative: {
        position: "absolute",
        height: "65.4%",
        marginLeft: -240.5,
        top: "-14.71%",
        bottom: "49.32%",
        left: "50%",
        maxHeight: "100%",
        width: 480,
        zIndex: 0
    },
    labelWrapper: {
        zIndex: 1,
        alignItems: "center"
    },
    label: {
        fontSize: 24,
        lineHeight: 32,
        color: "#101828",
        textAlign: "left",
        fontFamily: "Inter-SemiBold",
        fontWeight: "600"
    },
});

export default Login;
