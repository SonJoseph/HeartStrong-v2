import { createStackNavigator, createAppContainer } from 'react-navigation';
import 'react-native-gesture-handler';
import Login from '../screens/Login';
import Register from '../screens/Register';
import MainNavigator from './mainRoutes';


const LoginNavigator = createStackNavigator({
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

const App = createAppContainer(LoginNavigator);
export default App;