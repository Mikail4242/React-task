import React, { useState } from "react";
import "../src/App.css";

function AddTaskForm({ addTask }) {
	const [taskName, setTaskName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addTask(taskName);
		setTaskName("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				className="input-tracker"
				type="text"
				value={taskName}
				onChange={(e) => setTaskName(e.target.value)}
			/>
			<button className="button" type="submit">
				Add Todo
			</button>
		</form>
	);
}

export default AddTaskForm;
