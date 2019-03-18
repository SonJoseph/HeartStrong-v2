import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { RegForm } from '../components/RegForm';
import { Container } from '../components/Container';
import { Input } from '../components/Input';
import { ClearButton, Button } from '../components/Button';
//import EStylesheet from 'react-native-extended-stylesheet';

class Register extends Component {
    constructor () {
      super()
      this.state = {
        status: true,
        status2: false,
        status3: false,
        username : "",
        password: "",
        firstname: "",
        lastname: ""
      }
    }
   

  render(){
    return (
      <View style ={styles.container}>
        <RegForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#36485f',
    paddingLeft: 60,
    paddingRight: 60,
  }
});


export default Register;
