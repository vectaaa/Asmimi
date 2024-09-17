import { StyleSheet, TextInput,Button, View } from 'react-native';
import React, {useState} from 'react';


const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }

  const addGoalHandler = () => {
    props.onAddHandler(enteredGoalText); //This is to manually pass the entered text values to the App.js addGoalHandler class
    setEnteredGoalText(''); //This is to clear the input section when a new goal is added
  }

  return (
    <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInputStyle} 
        placeholder='Enter your course goals' 
        onChangeText={goalInputHandler}
        value={enteredGoalText}    
        />
        
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderColor: '#cccccc'
      
      },
     textInputStyle: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
      },
})