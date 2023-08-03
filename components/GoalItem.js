import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ itemData, deleteGoalHandler }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={deleteGoalHandler.bind(this, itemData.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderRadius: 6,
    backgroundColor: "purple",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.4,
  },
});
