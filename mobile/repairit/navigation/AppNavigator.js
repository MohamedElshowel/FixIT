import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import MainTabNavigator from './MainTabNavigator'
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen'
import SignInScreen from '../screens/auth/SignInScreen'

const AuthStack = createStackNavigator({ SignIn: SignInScreen })

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: MainTabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
)
