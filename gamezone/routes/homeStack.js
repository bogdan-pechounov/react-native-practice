import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'
import About from '../screens/About'

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'GameZone',
      // headerStyle: { backgroundColor: '#eee' },
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Revie Details',
      headerStyle: { backgroundColor: 'red' },
    },
  },
  About: {
    screen: About,
  },
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: 'grey', height: 70 },
    headerTintColor: '#444',
  },
})

export default createAppContainer(HomeStack)
