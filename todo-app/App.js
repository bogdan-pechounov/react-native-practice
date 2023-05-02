import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import { Alert } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
import { Keyboard } from 'react-native'

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ])

  const pressHandler = (key) => {
    setTodos((todos) => todos.filter((todo) => todo.key !== key))
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((todos) => [...todos, { text, key: Math.random().toString() }])
    } else {
      Alert.alert('Oups!', 'Todo must be over 3 characters long', [
        { text: 'Understood', onPress: () => console.log('alert closed') },
      ])
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        // dismiss keyboard
        Keyboard.dismiss()
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    backgroundColor: 'pink',
    flex: 1,
  },
  list: {
    marginTop: 20,
    backgroundColor: 'yellow',
    flex: 1,
  },
})
