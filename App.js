import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [showModal,setShowModal]= useState(false);

  const addGoalHandler = (enteredGoal) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id)=>{
    setGoals((currentGoals)=>{
      return currentGoals.filter((goal)=>goal.id !== id);
    })
  }

  const startAddGoalHandler=()=>{
    setShowModal(true);
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add Your Goal" color="#5e0acc" onPress={startAddGoalHandler}/>
      <GoalInput addGoalHandler={addGoalHandler} showModal={showModal} setShowModal={setShowModal}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <GoalItem itemData={itemData} deleteGoalHandler={deleteGoalHandler}/>;
          }}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
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
});
