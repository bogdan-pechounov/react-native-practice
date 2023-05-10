import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'
import { Image } from 'react-native'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  function modalHandler() {
    setIsModalVisible(true)
  }

  function closeModal() {
    setIsModalVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((courseGoals) => [...courseGoals, enteredGoalText])
    closeModal()
  }

  function deleteGoalHandler(id) {
    setCourseGoals((courseGoals) => courseGoals.filter((_, i) => i !== id))
  }

  return (
    <>
      <StatusBar style='light' />
      <SafeAreaView style={styles.appContainer}>
        <Button title='Add New Goal' color='#5e0acc' onPress={modalHandler} />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={isModalVisible}
          closeModal={closeModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={({ item, index }) => (
              <GoalItem
                item={item}
                onDeleteItem={() => deleteGoalHandler(index)}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
})
