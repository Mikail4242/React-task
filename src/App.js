import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

function App() {
	const [tasks, setTasks] = useState([]);

	const addTask = (taskName) => {
		if (taskName.trim()) {
			setTasks([...tasks, { name: taskName, completed: false }]);
		}
	};

	const deleteTask = (indexToDelete) => {
		setTasks(tasks.filter((_, index) => index !== indexToDelete));
	};

	const toggleTaskCompletion = (indexToToggle) => {
		setTasks(
			tasks.map((task, index) =>
				index === indexToToggle
					? { ...task, completed: !task.completed }
					: task
			)
		);
	};

	return (
		<div className="container-task">
			<h1>Todo List</h1>
			<AddTaskForm addTask={addTask} />
			<TaskList
				tasks={tasks}
				toggleTaskCompletion={toggleTaskCompletion}
				deleteTask={deleteTask}
			/>
		</div>
	);
}

export default App;
