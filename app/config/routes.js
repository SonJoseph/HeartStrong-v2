import { createStackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Tracking from '../screens/Tracking';

export default createStackNavigator({
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
    Home: {
        screen: Home,
    }
});