import { View, Text, Button } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'

export default function ReviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>{navigation.getParam('title')}</Text>
    </View>
  )
}
