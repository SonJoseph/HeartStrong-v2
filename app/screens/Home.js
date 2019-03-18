import React, { Component } from 'react';
import { 
    StatusBar, 
    KeyboardAvoidingView, 
    View, 
    Text,
    Button,
    AsyncStorage
} from 'react-native';
import { Container } from '../components/Container';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : ""
        }
    }

    
    getUser = async() => {
        const val = await AsyncStorage.getItem("userToken");
        this.setState({username : val});
    }
    

    signOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }

    
    componentDidMount() {
        this.getUser();
    }
    

    render(){
        return (
            <Container>
                <Text> Welcome Home {this.state.username} </Text>
                <Button
                    title="Sign out"
                    onPress={this.signOut}
                />
            </Container>
        )
    }
}


export default Home;