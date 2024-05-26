import {useState} from "react"
import {Button, FlatList, StyleSheet, View} from 'react-native';
import {StatusBar} from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [goals, setGoals] = useState([])
    const [showModal, setShowModal] = useState(false)

    function handleDeleteItem(id) {
        setGoals(goals => {
            return goals.filter(goal => goal.id !== id)
        })
    }

  return (
      <>
          <StatusBar style="light"/>
          <View style={styles.appContainer}>
              <Button title="Add new goal!" color="#a065ec" onPress={() => setShowModal(v => !v)}/>
              <GoalInput showModal={showModal} setShowModal={setShowModal} setGoals={setGoals}/>
              <View style={styles.goalsContainer}>
                  <FlatList
                      data={goals}
                      renderItem={({item}) => {
                          return <GoalItem id={item.id} text={item.text} handleDeleteItem={handleDeleteItem}/>
                      }}
                      keyExtractor={item => item.id}
                  />
              </View>
          </View>
      </>
  );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16
    },
    goalsContainer: {
        flex: 5
    },
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 7,
        backgroundColor: "#5e0acc",
    },
    goalText: {
        color: "white"
    }
});
