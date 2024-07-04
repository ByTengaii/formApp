import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useForm} from 'react-hook-form';
import { InputPass, InputEmail, LoginButton, InputLargeController} from '../index';
import Colors from '../theme/colors';

export function LoginForm({handleAuth}: {handleAuth: (value:boolean) => void}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const{
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();



    return (
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
            name='email'
            errors={errors}
            placeholder='example@gmail.com'
            props={{
                secureTextEntry: true
            }}
            />
            <LoginButton props={{
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
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
    }

});