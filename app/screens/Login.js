import React, { Component } from 'react';
import { 
  StatusBar,
  KeyboardAvoidingView, 
  View,
  AsyncStorage
} from 'react-native';
import { Container } from '../components/Container';
import {Logo} from '../components/Logo';
import { Input } from '../components/Input';
import {ClearButton} from '../components/Button';

class Login extends Component {

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

  login = (username, password) => {
    return fetch(serverRoot + '/app/apis/login.php', {
        method: 'POST',
        headers: {
          'Accept' : 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.data == 1){
          this.setUserToken();
          /*
          this.props.navigation.navigate('Home', {
            username: username,
          });
          */
        }else{
          alert(responseJson.data);
        }
      })
  }

  setUserToken = async () => {
    await AsyncStorage.setItem('userToken', this.state.username);
    this.props.navigation.navigate('App');
  }

  goRegister = () => {
    this.props.navigation.navigate('Register');
  }

  render(){
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <Input 
            placeholder="username"
            onChangeText = {this.handleUsername}
          />
          <Input 
            placeholder="password"
            onChangeText = {this.handlePassword}
          />
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',            
          }}>
            <ClearButton 
              text="Login"
              onPress={
                () => this.login(this.state.username, this.state.password)
              }
            />
            <ClearButton 
              text="Register"
              onPress={
                () => this.goRegister()
              }
            />
          </View>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Login;
