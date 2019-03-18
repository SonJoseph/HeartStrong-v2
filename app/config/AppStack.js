import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InsertLog from '../screens/InsertLog';
import ViewLog from '../screens/ViewLog';
import Home from '../screens/Home';
import Journal from '../screens/Journal';
import { Platform, StatusBar } from 'react-native';


const modalNav = createStackNavigator(
  {
    View:{
      screen: ViewLog
    },
    Insert:{
      screen: InsertLog
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
  }
)


export default createBottomTabNavigator(
    {
        Home:{
            screen : Home,
        },
        ViewLog: {
            screen : modalNav,
        },
        Journal : {
            screen : Journal,
        },
    },
    {
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }
    }
);