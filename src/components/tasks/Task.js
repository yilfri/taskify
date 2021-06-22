import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const Task = ({ task }) => {
	// Extract project from Context.
	const projectsContext = useContext(projectContext);
	const { project } = projectsContext;

	// Extract Task from Context.
	const tasksContext = useContext(TaskContext);
	const { deleteTask, getTasks, updateTask, saveActualTask } = tasksContext;

	const [actualProject] = project;

	// Handle Events
	const handleClickDeleteTask = (id) => {
		deleteTask(id, actualProject._id);
		getTasks(actualProject.id);
	};

	const changeState = (task) => {
		if (task.status) {
			task.status = false;
		} else {
			task.status = true;
		}

		updateTask(task);
	};

	const selectTask = (task) => {
		saveActualTask(task);
	};

	return (
		<li className="tarea sombra">
			<p>{task.name}</p>

			<div className="estado">
				{task.status ? (
					<button type="button" className="completo" onClick={() => changeState(task)}>
						Completed
					</button>
				) : (
					<button type="button" className="incompleto" onClick={() => changeState(task)}>
						Not Completed
					</button>
				)}
			</div>

			<div className="acciones">
				<button type="button" className="btn btn-primario" onClick={() => selectTask(task)}>
					Edit
				</button>
				<button
					type="button"
					className="btn btn-secundario"
					onClick={() => handleClickDeleteTask(task._id)}
				>
					Delete
				</button>
			</div>
		</li>
	);
};

export default Task;
