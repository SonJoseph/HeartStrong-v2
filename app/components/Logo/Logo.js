import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

const Logo = () => (
    <View style={styles.container}>
        <Text style={styles.text}> Heartstrong </Text>
        <Image style={styles.containerImage} resizeMode="contain" source={require('./images/heart.png')}/> 
    </View>
);

export default Logo;

/*
    Need to find a new image for logo!
*/