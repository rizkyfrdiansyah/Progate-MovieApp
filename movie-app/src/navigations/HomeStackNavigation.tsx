import { ParamListBase } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

function HomeStackNavigation({
  navigation,
}: NativeStackScreenProps<ParamListBase, 'Home'>): JSX.Element {
  return (
    <View>
      <Text>Home Stack Navigation</Text>
      <Button
        title="Pergi ke Movie Detail"
        onPress={() => navigation.navigate('Search')}
      />
    </View>
  )
}

export default HomeStackNavigation
