import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, View, Text } from 'react-native';
import { Container } from '../components/Container';
import { createBottomTabNavigator } from 'react-navigation';

class Home extends Component {
    render(){
        return (
            <Container>
                <Text> Welcome Home </Text>
            </Container>
        )
    }
}

export default Home;