import React, { PropTypes } from 'react';
import { View, Text, TouchableHighlight, TextInput} from 'react-native';

import styles from './styles';

const Input = ({placeholder, underlineColorAndroid="transparent", onChangeText}) => (
    <View style={styles.container}>
        <TextInput 
        placeholder={placeholder}
        underlineColorAndroid={underlineColorAndroid}
        style={styles.input}
        onChangeText={onChangeText} 
        />
    </View>
);

export default Input
