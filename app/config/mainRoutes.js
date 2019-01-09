import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tracking from '../screens/Tracking';
import Home from '../screens/Home';
import Journal from '../screens/Journal';

export default createBottomTabNavigator(
    {
        Home:{
            screen : Home,
        },
        Tracking: {
            screen : Tracking,
        },
        Journal : {
            screen : Journal,
        },
    },
    {   
        /* Try to add icons with react-native-vector-icons in the future!
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
              iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            } else if (routeName === 'Tracking') {
              iconName = `ios-options${focused ? '' : '-outline'}`;
            }
        //     You can return any component that you like here! We usually use an
        //     icon component from react-native-vector-icons
            return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
          },
        }),
        */
        tabBarOptions: {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        },
      }
);