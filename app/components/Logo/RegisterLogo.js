import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const RegisterLogo = (text) => (
    <View style={styles.container}>
        <Text style={styles.text}> {text} </Text>
    </View>
);

RegisterLogo.propTypes = {
    text: PropTypes.string,
  };
  

export default RegisterLogo;