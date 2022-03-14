import React, { useState, useRef } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { clear } from "react-native/Libraries/LogBox/Data/LogBoxData";
import { useSelector, useDispatch } from "react-redux";
import { addToDo } from "../../features/todo/todoSlice";

export default function ToDoInput(props) {
	const dispatch = useDispatch();
	const [inputText, setInputText] = useState("");

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				value={inputText}
				placeholder="Add a new ToDo"
				placeholderTextColor="lightgrey"
				onChangeText={(event) => setInputText(event)}
				onSubmitEditing={(event) => {
					dispatch(addToDo(event.nativeEvent.text));
					setInputText("");
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#ddd",
		padding: 16,
	},
	input: {
		backgroundColor: "#666",
		padding: 8,
		color: "white",
		borderRadius: 8,
	},
});
