import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, View, Text } from 'react-native';
import { Container } from '../components/Container';
import { createBottomTabNavigator } from 'react-navigation';

class Tracking extends Component {
    render(){
        return (
            <Container>
                <Text> Track your weight and vital signs </Text>
            </Container>
        )
    }
}

export default Tracking;