import { createStackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Register from '../screens/Register';
import MainNavigator from './mainRoutes';

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
        screen: MainNavigator,
        navigationOptions: {
            headerTitle: 'Welcome',
        }
    }
});