import {StyleSheet, Text, View, Pressable} from "react-native";

export default function GoalItem({id, text, handleDeleteItem}) {

    return <View style={styles.goalItem}>
            <Pressable
                android_ripple={{color: "#340571"}}
                onPress={handleDeleteItem.bind(this, id)}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 7,
        backgroundColor: "#5e0acc",
    },
    goalText: {
        color: "white",
        padding: 8,

    },
    pressedItem: {
        opacity: 0.5
    }
});