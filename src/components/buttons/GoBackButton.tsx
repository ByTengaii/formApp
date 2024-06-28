import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';

export function GoBackButton() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
        >
            <Text style={styles.text}>Geri Dön</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: Colors.white,
        borderWidth:1,
        borderColor:Colors.borderPrimary,
        paddingVertical: 10,
        paddingHorizontal: 14,
        width:134,
        height: 40,
        borderRadius:8,
    },
    text:{
        color: Colors.primary,
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Inter_600SemiBold'
    }
});