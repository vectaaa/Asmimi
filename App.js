import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './src/components/GoalItem';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }

  const addGoalHandler = () => {
    // console.log('new goal', enteredGoalText);
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals,
       {text: enteredGoalText, id: Math.random().toString()}])
    
  }


  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInputStyle} placeholder='Enter your course goals' onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalListContainer}>
      <FlatList 
      data={courseGoals} 
      renderItem={(itemData) => {
        return <GoalItem text={itemData.item.text}/>
      }} 
      keyExtractor={(item, index) => {
        return item.id;
      }}
      alwaysBounceHorizontal={false}>
          
          </FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccccc'
  
  },

  goalListContainer: {
    flex: 6
  },

  textInputStyle: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
 
});
