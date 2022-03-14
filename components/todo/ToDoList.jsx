import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { toggleToDo, removeToDo } from "../../features/todo/todoSlice";

import ToDoItem from "./ToDoItem";

export default function ToDoList(props) {
	const todos = useSelector((state) => state.todo.todos);
	const dispatch = useDispatch();
	const renderItem = ({ item }) => (
		<ToDoItem
			{...item}
			toggleToDo={() => dispatch(toggleToDo(item.id))}
			removeToDo={() => dispatch(removeToDo(item.id))}
		/>
	);

	return (
		<FlatList style={styles.container} data={todos} renderItem={renderItem} />
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 8,
	},
});
