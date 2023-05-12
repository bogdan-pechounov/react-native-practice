import { View, Text, StyleSheet, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login({ navigation }) {
  const [name, setName] = useState('')

  async function setData() {
    if (name.length === 0) {
      Alert.alert('Warning!')
    } else {
      try {
        await AsyncStorage.setItem('username', name)
        navigation.navigate('Home')
      } catch (e) {}
    }
  }
  return (
    <View style={styles.body}>
      <Image style={styles.logo} source={require('../assets/icon.png')} />
      <TextInput
        style={styles.input}
        placeholder='Enter your name'
        onChangeText={setName}
      />
      <CustomButton title='Login' color='#1eb900' onPressFunction={setData} />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0080ff',
  },
  logo: {
    width: 100,
    height: 100,
    margin: 20,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
  },
})
