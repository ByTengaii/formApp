import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

export function BooleanSwitch() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: Colors.secondary, true: Colors.active }}
                thumbColor={isEnabled ? Colors.white : Colors.disable}
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:'auto'
    },
});