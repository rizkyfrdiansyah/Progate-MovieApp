import React from 'react'
import HomeStackNavigation from '../navigations/HomeStackNavigation'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { ParamListBase } from '@react-navigation/native'

function Home(
  props: NativeStackScreenProps<ParamListBase, 'Home'>,
): JSX.Element {
  return <HomeStackNavigation {...props} />
}

export default Home
