import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import BottomTabNavigator from './src/navigations/BottomTabNavigation'

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}
