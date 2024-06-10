import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, StyleSheet } from 'react-native';
import { InputPass } from './Inputs/InputPass';
import { InputEmail } from './Inputs/InputEmail';
import { LoginButton } from './buttons/LoginButton';

export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Check if email and password are correct
        if (email === 'deneme' && password === 'deneme') {
            Alert.alert('Success', 'Login successful');
        } else {
            Alert.alert('Error', 'Invalid email or password');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.appBannerContainer}>
                <Text style={styles.appBannerText}>App Name</Text>
            </View>
            <InputEmail email={email} setEmail={setEmail} placeholder='email@email.com' />
            <InputPass pass={password} setPass={setPassword} placeholder='Password' />
            <LoginButton handleFunction={handleLogin} />
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
        fontWeight: "600",
        fontFamily: "Inter-SemiBold",
        color: "#101828",
        textAlign: "left"
    }

});