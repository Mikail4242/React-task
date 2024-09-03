import React from "react"
import "../src/App.css";

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
	return (
		<ul className="task-list">
			{tasks.map((task, index) => (
				<li key={index} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
					{task.name}
					<button className="button" onClick={() => toggleTaskCompletion(index)}>
						{task.completed ? "Undo" : "Mark as Complete"}
					</button>
					<button className="button" onClick={() => deleteTask(index)}>Delete</button>
				</li>
			))}
		</ul>
	);
}

export default TaskList;
