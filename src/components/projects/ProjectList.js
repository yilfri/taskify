import React, { useEffect, useContext } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ProjectList = () => {
	// Extract project from Context
	const projectsContext = useContext(projectContext);
	const { projects, getProjects } = projectsContext;

	// Get projects
	useEffect(() => {
		getProjects();
	}, []);

	// Check if have projects
	if (projects.length === 0) return null;

	return (
		<ul className="listado-proyectos">
			{projects.map((project) => (
				<Project key={project.id} project={project} />
			))}
		</ul>
	);
};

export default ProjectList;
