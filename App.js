import { StatusBar as NativeStatusBar, StyleSheet, View } from "react-native";
import { store } from "./store";
import { Provider } from "react-redux";

import ToDoList from "./components/todo/ToDoList";
import ToDoInput from "./components/todo/ToDoInput";

export default function App() {
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<NativeStatusBar backgroundColor="indigo" StatusBarStyle="auto" />
				<View style={styles.todos}>
					<ToDoList />
				</View>
				<ToDoInput />
			</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
	},
	todos: {
		flex: 1,
	},
});
