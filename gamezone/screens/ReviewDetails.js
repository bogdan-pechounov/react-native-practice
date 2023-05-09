import { View, Text, Button } from 'react-native'
import React from 'react'
import { globalStyles, images } from '../styles/global'
import Card from '../components/Card'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'

export default function ReviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam('title')}</Text>
        <Text>{navigation.getParam('body')}</Text>
        <View style={styles.rating}>
          <Text>Rating: </Text>
          <Image source={images.ratings[navigation.getParam('rating')]} />
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
  },
})
