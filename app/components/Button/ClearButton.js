import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import styles from './styles';

const ClearButton = ({text, onPress}) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.wrapper}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
);


export default ClearButton;