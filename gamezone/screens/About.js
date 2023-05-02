import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function About() {
  return (
    <View style={styles.container}>
      <Text>About</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
})
