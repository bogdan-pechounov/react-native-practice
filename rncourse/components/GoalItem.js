import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function GoalItem({ item, onDeleteItem }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        onPress={onDeleteItem}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{item}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItemText: {
    padding: 8,

    color: 'white',
  },
})
