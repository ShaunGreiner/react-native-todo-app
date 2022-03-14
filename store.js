import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice";

export const store = configureStore({
	reducer: {
		todo: todoReducer,
	},
});

store.subscribe(() => {
	//TODO figure out how to create a localstorage in react-native
});
