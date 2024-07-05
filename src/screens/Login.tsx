import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {  useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFooter, InputLargeController } from "../index";
import { Colors } from "../theme/index";
import { useUser, signIn} from '../services/index';
import { UserFormData, UserFormSchema, UserData} from '../models/index';
import { LoginBackGroundPattern } from '../../assets/index';

interface LoginProps {
    handleAuth: (value: boolean) => void;
}



export function Login(props: LoginProps) {
    const user = useUser();
    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<UserFormData>({
        resolver: zodResolver(UserFormSchema)
    });

    const onSubmit = handleSubmit(async (data) => {
        const userData =  await signIn(data.email, data.password);
        console.log("Data:", userData);
        if (userData) {
            user.setUser(userData);
            props.handleAuth(true);
        }
        else {
            console.log("Error");
        }
    });

    setValue('email', 'gurkanqq28@hotmail.com');
    setValue('password', '01012002');
    return (
        <View style={[styles.main, styles.mainFlexBox]}>
            <LoginBackGroundPattern style={styles.backgroundPatternDecorative} />
            <View style={styles.labelWrapper}>
                <Text style={styles.label}>Logo</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.appBannerContainer}>
                    <Text style={styles.appBannerText}>App Name</Text>
                </View>
                <InputLargeController
                    title={'Email'}
                    control={control}
                    name='email'
                    errors={errors}
                    placeholder='example@gmail.com'
                />
                <InputLargeController
                    title={'password'}
                    control={control}
                    name='password'
                    errors={errors}
                    placeholder=''
                    style={styles.labels}
                    props={{
                        secureTextEntry: true,
                    }}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={onSubmit}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </ TouchableOpacity>

            </View>
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
    container: {
        alignSelf: "stretch",
    },
    appBannerContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    appBannerText: {
        fontSize: 24,
        lineHeight: 32,
        fontFamily: "Inter_600SemiBold",
        color: Colors.primary,
        textAlign: "left"
    },
    button: {
        backgroundColor: Colors.active,
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginBottom: 20
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "Inter_600SemiBold",
        color: "#fff",
        textAlign: "center"
    },
    labels: {
        paddingVertical: 16
    }
});

export default Login;
