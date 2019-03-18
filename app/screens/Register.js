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
    //   ShowHideStatusView = () =>{
      
    //     if(this.state.status == true)
    //     {
    //       this.setState({status: false})
    //     }
    //     else
    //     {
    //       this.setState({status: true})
    //     }

    //     if(this.state.status2 == true)
    //     {
    //       this.setState({status2: false})
    //     }
    //     else
    //     {
    //       this.setState({status2: true})
    //     }
    //   }

    //    ShowHideStatus3View = () =>{
    //     if(this.state.status3 == true)
    //     {
    //       this.setState({status3: false})
    //     }
    //     else
    //     {
    //       this.setState({status3: true})
    //     }
    //     if(this.state.status2 == true)
    //     {
    //       this.setState({status2: false})
    //     }
    //     else
    //     {
    //       this.setState({status2: true})
    //     }
        
    //    }

    //   //  MixedFunction = () =>{
    //   //    this.ShowHideStatus3View()
    //   //    this.register()
    //   //  }

    // handleFirstName = (text) => {
    //   this.setState({firstname: text})
    // }

    // handleLastName = (text) => {
    //   this.setState({lastname: text})
    // }

    // handleUsername = (text) => {
    //   this.setState({username: text})
    // }

    // handlePassword = (text) => {
    //   this.setState({password: text})
    // }

    // goLogin = () => {
    //   this.props.navigation.navigate('Login');
    // }
  
    // register = (username, password) => {
    //   return fetch(serverRoot + '/app/apis/register.php', {
    //       method: 'POST',
    //       headers: {
    //         'Accept' : 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         firstname: "firstname",
    //         lastname: "lastname",
    //         age: 20,
    //         address: "test",
    //         username: username,
    //         password: password
    //       }),
    //     }).then((response) => response.json())
    //     .then((responseJson) => {
    //       alert(responseJson.data);
    //     })
       
    // }

    // combined = () => {
    //   this.register(this.state.username, this.state.password);
    //   this.ShowHideStatus3View();
    // }

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
{/* <StatusBar translucent={false} barStyle="light-content" /> */}
      {/* <KeyboardAvoidingView behavior="padding"> */}
        {/* <RegisterLogo 
        text = "Register"
        /> */}
        {/* <Logo/>
                {this.state.status ? 
                <Input 
                  placeholder="first name"
                  onChangeText = {this.handleFirstName}
                />
                : null}
                {this.state.status ? 
                <Input 
                  placeholder="last name"
                  onChangeText = {this.handleLastName}
                />
                : null}
                {this.state.status2 ?
                <Input
                  placeholder="username"
                  onChangeText = {this.handleUsername}
                />
                : null}
                {this.state.status2 ?
                <Input 
                  placeholder="password"
                  onChangeText = {this.handlePassword}
                />
                : null}
                
        <View style={{
          flexDirection: 'column',
          justifyContent: 'center',            
        }}>
       {this.state.status ?
       <ClearButton
                onPress={this.ShowHideStatusView}
               // onPress={this.ShowHideStatus2View}
                text = "Next"
        />
        : null}
        {this.state.status2 ?
          <ClearButton
                   onPress={this.combined}
                   text = "Register"
           />
           : null}
           {this.state.status2 ?
          <ClearButton
                   onPress={this.ShowHideStatusView}
                   text = "Go Back"
           />
           : null}
          {this.state.status3 ? <Text
          style = {{color: '#ffffff',
          fontSize: 20,
          fontWeight: '300',
          padding: 20,
          alignItems: 'center',
          justifyContent: 'center',
          }}> Succesfully Registered: </Text> 
            : null}
          {this.state.status3 ?
          <Button 
                   onPress={
                    () => this.goLogin()
                   }
                   text = "Back to Login"
           />
           : null}
        </View> */}
      {/* </KeyboardAvoidingView> */}