import React, { useContext } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ProjectList = () => {
	const projectsContext = useContext(projectContext);
	const { projects } = projectsContext;

	if (projects.length === 0) return;

	return (
		<ul className="listado-proyectos">
			{projects.map((project) => (
				<Project project={project} />
			))}
		</ul>
	);
};

export default ProjectList;
