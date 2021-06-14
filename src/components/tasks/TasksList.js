import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import Task from './Task';

const TasksList = () => {
	// Extract project from Context
	const projectsContext = useContext(projectContext);
	const { project } = projectsContext;

	// If dont have projects yet, return instruction
	if (!project) return <h2>Pick a Project</h2>;

	// Distructuring actualProject
	const [actualProjectede] = project;

	const tasksProject = [
		{ name: 'Pick Platform', state: false },
		{ name: 'Pick colors', state: true },
		{ name: 'Pick pay services', state: false },
		{ name: 'Pick Hosting', state: true }
	];
	return (
		<>
			<h2>{actualProjectede.name}</h2>

			<ul className="listado-tareas">
				{tasksProject.length === 0 ? (
					<li className="tarea">
						<p>You don't have Tasks</p>
					</li>
				) : (
					tasksProject.map((task) => <Task task={task} />)
				)}
			</ul>
			<button type="button" className="btn btn-eliminar">
				Delete Project
			</button>
		</>
	);
};

export default TasksList;
