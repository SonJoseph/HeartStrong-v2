import React from 'react';
import { 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
    Alert
  } from 'react-native';
import styles from './styles';
import { withNavigation } from 'react-navigation';

class RegForm extends React.Component {
  constructor () {
    super()
    this.state = {
      status: true,
      status2: false,
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    }
  }

  ShowHideStatusView = () =>{
      
    if(this.state.status == true)
    {
      this.setState({status: false})
    }
    else
    {
      this.setState({status: true})
    }

    if(this.state.status2 == true)
    {
      this.setState({status2: false})
    }
    else
    {
      this.setState({status2: true})
    }
  }

  handleFirstName = (text) => {
    this.setState({firstname: text})
  }

  handleLastName = (text) => {
    this.setState({lastname: text})
  }

  handleEmail = (text) => {
    this.setState({email: text})
  }

  handlePassword = (text) => {
    this.setState({password: text})
  }

  goLogin = () => {
    this.props.navigation.navigate('Login');
  }

  register = (email, password,firstname,lastname) => {
    return fetch(serverRoot + '/app/apis/register.php', {
        method: 'POST',
        headers: {
          'Accept' : 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          age: 20,
          address: "test",
          username: email,
          password: password
        }),
      }).then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson.data);
      })
      
  }
  
  combined = () => {
    this.register(this.state.email, this.state.password);
    this.ShowHideStatusView();
  }

  buttonClickListener = () =>{
    // const { firstname }  = this.state.firstname;
    // const { lastname }  = this.state.lastname;
    // const { email }  = this.state.email;
    // const { password}  = this.state.password;
    if (this.state.lastname === '' || this.state.firstname === '' || this.state.email === '' || this.state.password === ''){
      Alert.alert("Please fill all to proceed");
    } else {
      this.combined();
    }
  }

  render() {
    return (
        <View style ={styles.regform}>
            {this.state.status ? 
            <View style = {styles.view2}>
              <Text style={styles.text}>Registration</Text>
            </View>
            : null}

            {this.state.status ? 
            <TextInput style ={styles.textinput} placeholder="Your first name"
            placeholderTextColor= '#ffffff'
            onChangeText = {this.handleFirstName}
            underlineColorAndroid={'transparent'}/>
            : null}
            
            {this.state.status ? 
            <TextInput style ={styles.textinput} placeholder="Your last name"
            placeholderTextColor= '#ffffff'
            onChangeText = {this.handleLastName}
            underlineColorAndroid={'transparent'}/>
            : null}

            {this.state.status ? 
            <TextInput style ={styles.textinput} placeholder="Your email"
            placeholderTextColor= '#ffffff'
            onChangeText = {this.handleEmail}
            underlineColorAndroid={'transparent'}/>
            : null } 

            {this.state.status ? 
            <TextInput style ={styles.textinput} placeholder="Password"
            placeholderTextColor= '#ffffff'
            secureTextEntry = {true}
            onChangeText = {this.handlePassword}
            underlineColorAndroid={'transparent'}/>
            : null}

            {this.state.status ? 
            <TouchableOpacity style = {styles.button}
            onPress = {this.buttonClickListener}>
              <Text style = {styles.btntext}>Sign up</Text>
            </TouchableOpacity>
            : null}

            {this.state.status2 ? 
            <TouchableOpacity style = {styles.button}
            onPress={
              () => this.goLogin()
            }>
              <Text style = {styles.btntext}>Go Login</Text>
            </TouchableOpacity>
            : null}
        </View>
    );
  }
}
export default withNavigation(RegForm);
//export default RegForm;