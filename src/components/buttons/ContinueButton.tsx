import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../theme/colors';
export function ContinueButton({navigation, pageName}: {navigation: any, pageName: string}) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(pageName)}
        >
            <Text style={styles.text}>Devam Et</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: Colors.active,
        paddingVertical: 10,
        paddingHorizontal: 14,
        width:134,
        height: 40,
        borderRadius:8,
    },
    text:{
        color: Colors.white,
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Inter_600SemiBold'
    }
});