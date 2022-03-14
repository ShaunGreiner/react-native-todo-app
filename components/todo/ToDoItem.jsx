import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function ToDoItem({
	id,
	isComplete,
	text,
	toggleToDo,
	removeToDo,
	...props
}) {
	const addedDateAsString = new Date(id).toLocaleString();
	return (
		<TouchableOpacity onPress={toggleToDo} onLongPress={removeToDo}>
			<View style={[styles.container, isComplete && styles.containerComplete]}>
				<View
					style={[styles.button, isComplete && styles.buttonComplete]}
					color={isComplete ? "lightgrey" : "green"}
				>
					<Text style={styles.buttonText}>{isComplete ? "✓" : ""}</Text>
				</View>
				<View style={styles.content}>
					<Text style={[styles.title, isComplete && styles.titleComplete]}>
						{text}
					</Text>
					<Text style={styles.date}>{`Added on ${addedDateAsString}`}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#eee",
		padding: 8,
		margin: 2,
		borderRadius: 4,
	},
	containerComplete: {
		color: "#fff",
	},
	content: {
		flex: 1,
	},
	title: {
		flex: 1,
		color: "#333",
	},
	titleComplete: {
		color: "#aaa",
		textDecorationLine: "line-through",
		textDecorationStyle: "dashed",
	},
	date: {
		flex: 1,
		fontSize: 12,
	},
	button: {
		flex: 0,
		width: 32,
		height: 32,
		marginRight: 8,
		borderColor: "#333",
		borderWidth: 1,
		borderRadius: 100,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonComplete: {
		borderColor: "green",
		borderWidth: 3,
	},
	buttonText: {
		fontSize: 16,
		color: "green",
	},
});
