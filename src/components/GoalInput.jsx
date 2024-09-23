import { StyleSheet, TextInput,Button, View, Modal, Image } from 'react-native';
import React, {useState} from 'react';
import AddGoalImage from '../../assets/images/goal.png'; 

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
    <Modal visible={props.visible} animationType='slide'>
    <View style={styles.inputContainer}>
    <Image style={styles.imageStyle} source={AddGoalImage}/>
        <TextInput 
        style={styles.textInputStyle} 
        placeholder='Enter your course goals' 
        onChangeText={goalInputHandler}
        value={enteredGoalText}    
        />
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title='Add Goal' onPress={addGoalHandler}/>
        </View>
        <View style={styles.button}>
        <Button title='Cancel' onPress={props.closeModal} color='#F14C4C'/>
        </View>
        </View>
      </View>
      </Modal>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderColor: '#cccccc',
        padding: 16,
        backgroundColor: '#2296F3'
      },
     textInputStyle: {
        borderWidth: 1,
        borderColor: '#cccccc',
        backgroundColor: '#cccccc',
        borderRadius: 8,
        width: '100%',
        marginRight: 8,
        padding: 8
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16
      },
      button: {
        width: 100,
        marginHorizontal: 8,
      },
      imageStyle: {
        width: 100,
        height: 100,  
      },
})