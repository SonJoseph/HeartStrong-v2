import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, View, Text } from 'react-native';
import { Container } from '../components/Container';
import 'react-native-gesture-handler';

class Home extends Component {
    render(){
        const { navigation } = this.props; // ES2015 destructuring assignment
        const username = navigation.getParam('username','some default value') 
        return (
            <Container>
                <Text> Welcome Home {username} </Text>
            </Container>
        )
    }
}


export default Home;