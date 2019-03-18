import React, { Component } from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { Input } from '../components/Input';

class Register extends Component {

    state = {
      username : "",
      password: ""
    }
    
    handleUsername = (text) => {
      this.setState({username: text})
    }

    handlePassword = (text) => {
      this.setState({password: text})
    }
  
    register = (username, password) => {
      return fetch(serverRoot + '/app/apis/register.php', {
          method: 'POST',
          headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstname: "test",
            lastname: "test",
            age: 20,
            address: "test",
            username: username,
            password: password
          }),
        })
        .then((response) => response.json())
        .then((responseJson) => {
          alert(responseJson.data);
        })
    }

    render(){ // this is very underdeveloped
        return(
            // <Container>
            
              <KeyboardAvoidingView behavior = "height"
              keyboardVerticalOffset = {-10} >
              <ScrollView>
                <Input 
                  placeholder="first name"
                  onChangeText = {this.handleUsername}
                />
              
                <Input 
                  placeholder="last name"
                  onChangeText = {this.handlePassword}
                />
                <Input
                  placeholder="username"
                  onChangeText = {this.handleUsername}
                />
              
              {/* <KeyboardAvoidingView enabled = {true}
                keyboardVerticalOffset = {0} > */}
                <Input 
                  placeholder="password"
                  onChangeText = {this.handlePassword}
                />
                <Input 
                  placeholder="first name"
                  onChangeText = {this.handleUsername}
                />
              
                <Input 
                  placeholder="last name"
                  onChangeText = {this.handlePassword}
                />
                <Input
                  placeholder="username"
                  onChangeText = {this.handleUsername}
                />
              
              {/* <KeyboardAvoidingView enabled = {true}
                keyboardVerticalOffset = {0} > */}
                <Input 
                  placeholder="password"
                  onChangeText = {this.handlePassword}
                />
              </ScrollView>
              </KeyboardAvoidingView>
            //</Container>
        );
    }
}

export default Register;