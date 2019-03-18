import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register';
import MainNavigator from './AppStack';


export default createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                header:  () => null,
            },
        },
        Register: {
            screen: Register,
            navigationOptions:  {
                headerTitle: 'Register',
            }
        },
        /*
        Home: {
            screen: MainNavigator,
            navigationOptions: {
                header:  () => null,
            }
        }
        */
    }
);