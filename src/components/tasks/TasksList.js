import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';
import Task from './Task';

const TasksList = () => {
	// Extract project from Context.
	const projectsContext = useContext(projectContext);
	const { project, deleteProject } = projectsContext;

	// Extract Task from Context.
	const tasksContext = useContext(TaskContext);
	const { tasksproject } = tasksContext;

	// If dont have projects yet, return instruction
	if (!project) return <h2>Pick a Project</h2>;

	// Distructuring actualProject
	const [actualProject] = project;

	// Handle Events.

	const handleClickDeleteProject = (project) => {
		deleteProject(actualProject.id);
	};
	return (
		<>
			<h2>{actualProject.name}</h2>

			<ul className="listado-tareas">
				{tasksproject.length === 0 ? (
					<li className="tarea">
						<p>You don't have Tasks</p>
					</li>
				) : (
					tasksproject.map((task) => <Task task={task} />)
				)}
			</ul>
			<button type="button" className="btn btn-eliminar" onClick={handleClickDeleteProject}>
				Delete Project
			</button>
		</>
	);
};

export default TasksList;
