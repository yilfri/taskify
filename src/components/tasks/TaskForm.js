import React, { useContext, useState } from 'react';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const TaskForm = () => {
	// Extract project from Context.
	const projectsContext = useContext(projectContext);
	const { project } = projectsContext;

	// Extract Task from Context.
	const tasksContext = useContext(TaskContext);
	const { addTask } = tasksContext;

	// Form State
	const [task, setTask] = useState({
		name: ''
	});

	// Object Distructuring
	const { name } = task;

	if (!project) return null;

	// Array destructuring for extract actual project
	const [actualProject] = project;

	// Handle Events
	const handleSubmitNewTask = (e) => {
		e.preventDefault();

		task.projectId = actualProject.id;
		task.state = false;

		addTask(task);
	};

	const handleChangeForm = (e) => {
		setTask({
			...task,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div className="formulario">
			<form onSubmit={handleSubmitNewTask}>
				<div className="contenedor-input">
					<input
						type="text"
						name="name"
						className="input-text"
						placeholder="Task Name..."
						value={name}
						onChange={handleChangeForm}
					/>
				</div>

				<div className="contenedor-input">
					<input type="submit" value="Add Task" className="btn btn-primario btn-submit btn-block" />
				</div>
			</form>
		</div>
	);
};

export default TaskForm;
