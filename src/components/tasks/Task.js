import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const Task = ({ task }) => {
	// Extract project from Context.
	const projectsContext = useContext(projectContext);
	const { project } = projectsContext;

	const [actualProject] = project;

	// Extract Task from Context.
	const tasksContext = useContext(TaskContext);
	const { deleteTask, getTasks } = tasksContext;

	const handleClickDeleteTask = (id) => {
		deleteTask(id);
		getTasks(actualProject.id);
	};

	return (
		<li className="tarea sombra">
			<p>{task.name}</p>

			<div className="estado">
				{task.state ? (
					<button type="button" className="completo">
						Completed
					</button>
				) : (
					<button type="button" className="incompleto">
						Not Completed
					</button>
				)}
			</div>

			<div className="acciones">
				<button type="button" className="btn btn-primario">
					Edit
				</button>
				<button
					type="button"
					className="btn btn-secundario"
					onClick={() => handleClickDeleteTask(task.id)}
				>
					Delete
				</button>
			</div>
		</li>
	);
};

export default Task;
