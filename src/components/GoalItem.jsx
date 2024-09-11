import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
          <Text style={styles.goalText}>{props.text}</Text>
          </View>
  )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 2,
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: 2,
      },
      goalText: {
        color: 'white',
      }
})