import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#fff" }}
        onPress={props.onDelete.bind(this, props.id)}
        style={({pressed}) => pressed && styles.Item}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 6,
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: 3,
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
