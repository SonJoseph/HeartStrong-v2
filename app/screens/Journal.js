import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, View, Text } from 'react-native';
import { Container } from '../components/Container';


class Journal extends Component {
    render(){
        return (
            <Container>
                <Text> Keep track of your goals </Text>
            </Container>
        )
    }
}


export default Journal;