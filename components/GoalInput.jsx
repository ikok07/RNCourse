import {Button, TextInput, View, StyleSheet, Modal, Image} from "react-native";
import {useState} from "react";

export default function GoalInput({showModal, setShowModal, setGoals}) {
    const [goalText, setGoalText] = useState("")

    function goalInputHandler(enteredText) {
        setGoalText(enteredText)
    }

    function addGoalHandler() {
        setGoals(goals => [...goals, {text: goalText, id: Math.random().toString()}])
        setGoalText("")
        setShowModal(false)
    }

    return <Modal visible={showModal} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require("../assets/images/goal.png")}/>
            <TextInput
                value={goalText}
                onChangeText={goalInputHandler}
                placeholder="Your course goal!"
                style={styles.textInput}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                    <Button onPress={() => setShowModal(false)} title="Cancel" color="#f31282"/>
                </View>
                <View style={styles.button}>
                    <Button onPress={addGoalHandler} title="Add goal" color="#b180f0"/>
                </View>
            </View>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        padding: 16,
        backgroundColor: "#311b6b"
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438",
        borderRadius: 7,
        padding: 16,
    },
    buttonsContainer: {
        marginTop: 16,
        flexDirection: "row",
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
})