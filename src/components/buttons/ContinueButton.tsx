import React from 'react';
import { Text, TouchableOpacity, StyleSheet, GestureResponderEvent, TouchableOpacityProps} from 'react-native';
import Colors from '../../theme/colors';


interface ContinueButtonProps {
    text?:string;
    props?: TouchableOpacityProps;
}

export function ContinueButton(props: ContinueButtonProps) {
    return (
        <TouchableOpacity
            style={styles.button}
            {...props.props}
        >
            <Text style={styles.text}>
                {props.text ?
                props.text
                : 'Devam Et'}
            </Text>
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