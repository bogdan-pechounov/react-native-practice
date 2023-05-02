import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
})
