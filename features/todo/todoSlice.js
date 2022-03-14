import { createSlice } from "@reduxjs/toolkit";

/**
 * We're using the time of creation as an ID in this application as the user can't create
 * two entries with the exact same time. If this was an online app it would be better
 * to use hashes to reduce collisions, but here it acts as a way to know when each item was created as well.
**/

const initialState = {
	todos: [
		{
			id: 1647260489243,
			text: "Read Documentation",
			isComplete: true,
		},
		{
			id: 1647257685241,
			text: "Make TODO Application",
			isComplete: true,
		},
		{
			id: 1647257748792,
			text: "Get a good nights sleep",
			isComplete: false,
		},
	],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	// The following may look like anti-patterns but Immer makes all these reducer actions immutable under the hood.
	reducers: {
		removeToDo: (state, action) => {
			state.todos = state.todos.filter((item) => item.id !== action.payload);
		},
		addToDo: (state, action) => {
			const newToDo = {
				text: action.payload,
				isComplete: false,
				id: Date.now(),
			};
			state.todos.push(newToDo);
		},
		toggleToDo: (state, action) => {
			state.todos.forEach((todo) => {
				if (todo.id === action.payload) {
					todo.isComplete = !todo.isComplete;
				}
				return todo;
			});
		},
	},
});

export const { removeToDo, addToDo, toggleToDo } = todoSlice.actions;

export default todoSlice.reducer;
