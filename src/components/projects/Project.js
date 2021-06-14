import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const Project = ({ project }) => {
	// Get projectContext
	const projectsContext = useContext(projectContext);
	const { actualProject } = projectsContext;

	// Get projectContext
	const tasksContext = useContext(TaskContext);
	const { getTasks } = tasksContext;

	// Handle Events.
	const handleSubmitActualProject = () => {
		actualProject(project.id);
		getTasks(project.id);
	};

	return (
		<li>
			<button type="submit" className="btn btn-blank" onClick={handleSubmitActualProject}>
				{project.name}
			</button>
		</li>
	);
};

export default Project;
