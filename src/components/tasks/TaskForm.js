import React, { useContext, useState, useEffect } from 'react';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const TaskForm = () => {
	// Extract project from Context.
	const projectsContext = useContext(projectContext);
	const { project } = projectsContext;

	// Extract Task from Context.
	const tasksContext = useContext(TaskContext);
	const { errortask, taskselected, getTasks, addTask, validateTask, updateTask, cleanTask } =
		tasksContext;

	useEffect(() => {
		if (taskselected !== null) {
			setTask(taskselected);
		} else {
			setTask({
				name: ''
			});
		}
	}, [taskselected]);

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

		// Check if task don't have anything
		if (name.trim() === '') {
			validateTask();
			return;
		}

		if (taskselected === null) {
			// Add new task to state
			task.project = actualProject._id;
			addTask(task);
		} else {
			//Update task actual
			updateTask(task);
			cleanTask();
		}

		// Get and filter task from actual project.
		getTasks(actualProject.id);

		// Reset form
		setTask({
			name: ''
		});
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
					<input
						type="submit"
						value={taskselected ? 'Edit Task' : 'Add Task'}
						className="btn btn-primario btn-submit btn-block"
					/>
				</div>
			</form>

			{errortask ? <p className="mensaje error">Ingresa un nombre a la tarea</p> : null}
		</div>
	);
};

export default TaskForm;
