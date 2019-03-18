import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import styles from './styles';

const Button = ({text, onPress}) => (
    <TouchableOpacity style={styles.buttoncontainer} onPress={onPress}>
        <View style={styles.wrapper}>
            <Text style={styles.buttontext}>{text}</Text>
        </View>
    </TouchableOpacity>
);


export default Button;