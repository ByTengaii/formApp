import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native';
import Colors from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';

interface LeaveButtonProps {
    props?: TouchableOpacityProps
}

const LeaveButton: React.FC<LeaveButtonProps> = ({
    props
}) => {
    return (
        <TouchableOpacity
            style={styles.button}
            {...props}
        >
            <Text style={styles.text}>Vazgeç</Text>
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

export default LeaveButton