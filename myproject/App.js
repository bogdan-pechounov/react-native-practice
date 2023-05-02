import { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function App() {
  const [name, setName] = useState('User')

  const clickHandler = () => {
    setName('Test')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello {name}!</Text>
      </View>
      <View style={styles.body}>
        <Text>Enim ut esse esse proident cupidatat cupidatat ut.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
      </View>
      <TextInput
        style={styles.input}
        placeholder='Name'
        onChangeText={(v) => setName(v)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
})
