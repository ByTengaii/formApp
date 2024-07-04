import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useForm } from "react-hook-form";
import { LoginForm, LoginFooter } from "../index";
import useAppFonts from "../theme/fonts";
import { LoginBackGroundPattern } from '../../assets/index';

interface LoginProps {
    handleAuth: (value: boolean) => void;
}

export function Login(props: LoginProps) {

    const fontsLoaded = useAppFonts();
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={[styles.main, styles.mainFlexBox]}>
            <LoginBackGroundPattern style={styles.backgroundPatternDecorative} />
            <View style={styles.labelWrapper}>
                <Text style={styles.label}>Logo</Text>
            </View>
            <LoginForm handleAuth={props.handleAuth} />
            <LoginFooter />
        </View>
    )
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
        zIndex: -4,
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
        fontFamily: "Inter_600SemiBold",
    },
});

export default Login;
