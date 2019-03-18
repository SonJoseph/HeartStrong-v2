import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthLoading from '../screens/AuthLoading';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));