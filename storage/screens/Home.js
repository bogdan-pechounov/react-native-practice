import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Home() {
  const [name, setName] = useState('')

  useEffect(() => {
    getData()
  }, [])
  async function getData() {
    setName(await AsyncStorage.getItem('username'))
  }
  return (
    <View>
      <Text>Username: {name}</Text>
    </View>
  )
}
