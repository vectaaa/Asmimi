import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './src/components/GoalItem';
import GoalInput from './src/components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);


  const addGoalHandler = (enteredGoalText) => {
    // console.log('new goal', enteredGoalText);
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals,
       {text: enteredGoalText, id: Math.random().toString()}])
    
  }
   const deleteGoal = (id) => {
     console.log('Goal deleted');
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    }) ;
   }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddHandler={addGoalHandler}/>
      <View style={styles.goalListContainer}>
      <FlatList 
      data={courseGoals} 
      renderItem={(itemData) => {
        return <GoalItem 
        text={itemData.item.text} 
        id={itemData.item.id}
        onDelete={deleteGoal}/>
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
 
  goalListContainer: {
    flex: 6
  },

  
 
});
